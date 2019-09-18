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
    <!--el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop-->
    <div style="margin: 0 auto; min-height: 20rem">
      <div v-show="step === 0" class="step-body">
        <el-transfer
        class="transfer-wrap"
        filterable
        :filter-method="filterMethod"
        filter-placeholder="搜索"
        :titles="['可用', '启用']"
        :props="{ key: 'sid', label: 'name' }"
        v-model="selectedSid"
        :data="allData">
        </el-transfer>
      </div>

      <div v-show="step === 1" class="step-body">
        <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/">
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将补丁包拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传patch/tgz文件，且不超过1GB</div>
        </el-upload>
      </div>

      <div v-show="step === 2" class="step-body">
        <el-tabs tab-position="right" style="min-height: 18rem;">
          <el-tab-pane><el-badge slot="label" :value="0" :hidden="true" class="badge-margin">升级中</el-badge>
            <div style="margin: 2px auto; max-width: 40rem;">
              <div class="progress-label">1554/41441</div>
              <el-progress :percentage="50"></el-progress>
              <el-divider></el-divider>

              <div style="padding: 5px" v-for="item in selectedData" v-bind:key="item.sid">
                <el-card shadow="hover">
                  <div class="progress-label">{{item.name}}</div>
                  <el-progress :percentage="50"></el-progress>
                </el-card>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane><el-badge slot="label" :value="100" :max="10" type="success" class="badge-margin">已成功</el-badge>
            <div></div>
          </el-tab-pane>
          <el-tab-pane><el-badge slot="label" :value="0" :max="10" type="danger" class="badge-margin">已失败</el-badge>
            <div></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>

    <template slot="footer">
      <div style="text-align: right">
        <el-button @click="last" v-show="step !== 0">上一步</el-button>
        <el-button @click="next" type="primary" v-show="step !== 2">下一步</el-button>
        <el-button @click="next" type="primary" v-show="step === 2">完成</el-button>
      </div>
    </template>
  </d2-container>
</template>

<script>

export default {
  components: {
  },
  data () {
    const allData = []
    const selectedSid = []
    for (let i = 0; i < 10; i++) {
      allData[i] = {
        sid: i,
        name: `测试1112 (192.168.1.${i})`
      }
      selectedSid.push(i)
    }
    return {
      allData: allData,
      selectedSid: selectedSid,
      selectedData: JSON.parse(JSON.stringify(allData)),
      search: '',
      step: 2
    }
  },
  methods: {
    last () {
      this.step--
    },
    next () {
      this.step++
    },
    filterMethod (query, item) {
      return item
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

</style>
