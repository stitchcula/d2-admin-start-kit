<template>
  <d2-container class="page" type="card">
    <template slot="header">
      <el-steps :active="step" finish-status="success" align-center>
        <el-step title="选择">
          <template slot="icon"><d2-icon name="exchange"/></template>
        </el-step>
        <el-step title="上传" icon="el-icon-upload"></el-step>
        <el-step title="执行" icon="el-icon-brush"></el-step>
      </el-steps>
    </template>
    <el-backtop target=".d2-container-card .el-scrollbar__wrap" :bottom="110"></el-backtop>
    <div style="margin: 0 auto; min-height: 20rem">
      <div v-if="step === 0" class="step-body">
        <transfer
        v-loading="loading"
        class="transfer-wrap"
        filterable
        :filter-method="filterMethod"
        filter-placeholder="搜索"
        :titles="['已接入', '待升级']"
        :props="{ key: 'sid', label: 'name' }"
        v-model="selectedSid"
        :data="allData">
        </transfer>
      </div>

      <div v-if="step === 1" class="step-body" style="width: 360px">
        <el-upload
        :on-success="onUploaded"
        :on-error="onUploadFailed"
        :on-change="onChange"
        ref="uploader"
        :auto-upload="false"
        :multiple="false"
        :drag="true"
        :limit="1"
        action="/uweb/files/uweb">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将补丁包拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传patch/tgz文件，且不超过1GB</div>
        </el-upload>
      </div>

      <div v-if="step === 2" class="step-body">
        <el-tabs tab-position="right" style="min-height: 18rem;">
          <el-tab-pane><el-badge slot="label" :value="0" :hidden="true" class="badge-margin">升级中</el-badge>
            <div class="thin-body">
              <div class="progress-label">{{OpDone.length+OpFailed.length}}/{{OpAll.length}}</div>
              <el-progress :percentage="OpAll.length?Math.round((OpDone.length+OpFailed.length)*100/OpAll.length):0"></el-progress>
              <el-divider></el-divider>

              <div style="padding: 5px" v-for="item in OpDoing" v-bind:key="item.metadata.link_info.sid">
                <el-card shadow="hover">
                  <div class="progress-label">{{item.metadata.link_info.sid}}# {{item.metadata.link_info.name}}({{item.metadata.link_info.addr}})</div>
                  <el-progress :percentage="item.metadata.progress"></el-progress>
                </el-card>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane><el-badge slot="label" :value="OpDone.length" :max="99" type="success" class="badge-margin">已成功</el-badge>
            <el-table
            class="thin-body"
            :data="OpDone"
            border
            style="width: 100%">
              <el-table-column
              prop="metadata.link_info.sid"
              label="#">
              </el-table-column>
              <el-table-column
              prop="metadata.link_info.name"
              label="名称">
              </el-table-column>
              <el-table-column
              prop="metadata.link_info.addr"
              label="地址">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane><el-badge slot="label" :value="OpFailed.length" :max="99" type="danger" class="badge-margin">已失败</el-badge>
            <el-table
            class="thin-body"
            :data="OpFailed"
            border
            style="width: 100%">
              <el-table-column
              prop="metadata.link_info.sid"
              label="#"
              width="180">
              </el-table-column>
              <el-table-column
              prop="metadata.link_info.name"
              label="名称">
              </el-table-column>
              <el-table-column
              prop="metadata.link_info.addr"
              label="地址">
              </el-table-column>
              <el-table-column
              prop="error.message"
              label="错误信息">
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <template slot="footer">
      <div style="text-align: right">
        <el-button @click="last" v-show="!locked && step !== 0">上一步</el-button>
        <el-button @click="next" type="primary"
                   v-show="step !== 2"
                   :loading="locked"
                   :disabled="(step === 0 && selectedSid.length === 0) || (step === 1 && !picked)">
          下一步</el-button>
        <el-button @click="next" type="primary" v-show="step === 2" :loading="locked">完成</el-button>
      </div>
    </template>
  </d2-container>
</template>

<script>
import transfer from '@/components/transfer'
// import * as uweb from '@/api/uweb'
import * as uweb from '../../../api/uweb'
import * as longrunning from '../../../api/longrunning'
export default {
  components: {
    transfer
  },
  data () {
    return {
      search: '',
      step: 0,
      loading: true,
      locked: false,
      picked: false,

      allData: [],
      selectedSid: [],
      patch: '',

      OpAll: [],
      OpDoing: [],
      OpDone: [],
      OpFailed: []
    }
  },
  mounted () {
    setInterval(this.fetchTask, 10000)
    this.fetchNodes()
  },
  methods: {
    fetchTask () {
      uweb.GetTask({ id: '0' }).then(data => {
        if (!data.id) {
          return
        }
        if (this.step !== 2) {
          this.locked = true
          this.step = 2
        }
        let qs = []
        for (let operation of data.operations) {
          qs.push(longrunning.GetOperation({ name: operation }))
        }
        Promise.all(qs).then(data => {
          this.OpAll = data
          this.OpDoing = data.filter(it => { return !it.done })
          this.OpDone = data.filter(it => { return it.done && !it.error.code })
          this.OpFailed = data.filter(it => { return it.done && !!it.error.code })
        })
      })
    },
    fetchNodes () {
      uweb.ListNodes()
        .then(data => {
          let selectedSid = []
          let allData = []
          for (let node of data.nodes) {
            allData[parseInt(node.sid)] = node
            selectedSid.push(node.sid)
          }

          this.loading = false
          this.allData = allData
          this.selectedSid = selectedSid
        })
    },
    CreateTask () {
      const selectedData = []
      for (let sid of this.selectedSid) {
        selectedData.push(this.allData[parseInt(sid)])
      }
      uweb.CreateTask({ body: {
        PatchPath: this.patch,
        links: selectedData
      } })
        .then(data => {
          this.$notify.success({
            title: '任务提交成功',
            message: `任务ID为${data.id}`,
            position: 'bottom-right'
          })
        })
        .catch(err => {
          this.$notify.error({
            title: '任务提交失败',
            message: err,
            position: 'bottom-right'
          })
        })
    },
    last () {
      this.step--
    },
    next () {
      if (this.step === 1) { // do upload
        this.$refs.uploader.submit()
        this.locked = true
        return
      }
      this.step++
    },
    filterMethod (query, item) {
      return !query || item.name.toLowerCase().includes(query.toLowerCase())
    },
    onChange (file, fileList) {
      this.picked = !!fileList.length
    },
    onUploaded (response, file, fileList) {
      this.$prompt(`此任务将会把上传的补丁包(${file.name})批量部署到已选的${this.selectedSid.length}个子系统，且在执行完成前无法取消。` +
      `请输入已选子系统的数量以完成确认：`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValidator: value => { return parseInt(value) !== this.selectedSid.length ? '数量不正确' : true }
      })
        .then(({ value }) => {
          this.patch = response.url
          this.step++ // => step 3
          this.CreateTask()
        })
        .catch(() => {
          this.$message({ message: '已取消提交' })
          this.locked = false
        })
    },
    onUploadFailed (err, file, fileList) {
      console.log(err)
      this.$message.error(`上传${file.name}失败`)
      this.locked = false
    }
  }
}
</script>

<style scoped>

.step-body {
  margin: 3rem auto;
  width: 100%;
  text-align: center;
}

.thin-body {
  margin: 2px auto;
  max-width: 40rem;
}

.badge-margin {
  margin-right: 5px
}

.progress-label {
  text-align: left;
  margin-left: 8px;
  font-size: 14px
}

.transfer-wrap {
  text-align: left;
  display: inline-block;
}

.transfer-wrap >>> .el-transfer-panel {
  width: 20rem;
}

.transfer-wrap >>> .el-transfer-panel__item.el-checkbox .el-checkbox__label {
  min-width: 14rem;
}

</style>
