<template>
  <d2-container>
    <SplitPane :min-percent='20' :default-percent='20' split="vertical">
      <template slot="paneR">
        <terminal rz-url="/upload"></terminal>
      </template>

      <template slot="paneL"><div style="padding-right: 20px; height: 100%" v-resize="resizeTableHeight">
        <el-table
        v-loading="loading"
        :data="selectedData.filter(it => !search || it.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%"
        :height="rTableHeight"
        size="small">
          <el-table-column type="index" :index="indexMethod"></el-table-column>

          <el-table-column prop="name" :show-overflow-tooltip="true">
            <template slot="header" slot-scope="/* eslint-disable vue/no-unused-vars */scope">
              <el-input v-model="search" size="mini" placeholder="搜索"/>
            </template>
          </el-table-column>

          <el-table-column width="80" align="center">
            <template slot="header" slot-scope="/* eslint-disable vue/no-unused-vars */scope">
              <el-button size="mini" type="primary" plain @click="rTransferVisible = true"><d2-icon name="exchange"/></el-button>
            </template>
            <template slot-scope="/* eslint-disable vue/no-unused-vars */scope">
              <el-button size="mini" type="danger" plain @click="handleDelete(scope.$index, scope.row)"><d2-icon name="key"/></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div></template>
    </SplitPane>

    <el-dialog title="批量选择" :visible.sync="rTransferVisible" custom-class="dialog-width">
      <div style="text-align: center">
        <transfer
          class="transfer-wrap"
          filterable
          :filter-method="filterMethod"
          filter-placeholder="搜索"
          :titles="['可用', '启用']"
          :props="{ key: 'sid', label: 'name' }"
          v-model="selectedSid"
          :data="allData">
        </transfer>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="rTransferVisible = false">取 消</el-button>
        <el-button type="primary" @click="selectOK()">确 定</el-button>
      </div>
    </el-dialog>

  </d2-container>
</template>

<script>
import terminal from '@/components/terminal'
import resize from 'vue-resize-directive'
import transfer from '@/components/transfer'
import * as uweb from '../../../api/uweb'
export default {
  name: 'page2',
  data () {
    return {
      loading: false,
      allData: [],
      selectedSid: [],
      selectedData: [],
      search: '',
      rTableHeight: '0',
      rTransferVisible: false
    }
  },
  mounted () {
    this.fetchNodes()
  },
  methods: {
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
          this.selectedData = JSON.parse(JSON.stringify(allData))
        })
    },
    indexMethod (i) {
      return this.allData[i].sid
    },
    resizeTableHeight (it) {
      this.rTableHeight = window.getComputedStyle(it).height
    },
    filterMethod (query, item) {
      return item
    },
    handleDelete (i, row) {
      console.log(i, row)
    },
    selectOK () {
      this.rTransferVisible = false
      const selectedData = []
      for (let sid of this.selectedSid) {
        selectedData[sid] = this.allData[sid]
      }
      this.selectedData = selectedData
    }
  },
  components: {
    terminal,
    transfer
  },
  directives: {
    resize
  }
}
</script>

<style scoped>
.el-dialog__wrapper >>> .dialog-width {
  min-width: 50rem;
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
