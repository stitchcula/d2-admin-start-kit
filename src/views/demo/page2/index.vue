<template>
  <d2-container>
    <SplitPane :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneR"><terminal></terminal></template>
      <template slot="paneL"><div style="padding-right: 20px; height: 100%" v-resize:throttle.initial="resizeTableHeight">
        <el-table :data="data.filter(it => !search || it.name.toLowerCase().includes(search.toLowerCase()))" style="width: 100%" :height="rTableHeight">
          <el-table-column type="index" :index="indexMethod"></el-table-column>
          <el-table-column prop="name">
            <template slot="header" slot-scope="/* eslint-disable vue/no-unused-vars */scope">
              <el-input v-model="search" size="mini" placeholder="输入关键字搜索"/>
            </template>
          </el-table-column>
          <el-table-column width="80" align="center">
            <template slot="header" slot-scope="/* eslint-disable vue/no-unused-vars */scope">
              <el-button size="mini"><i class="el-icon-edit"></i></el-button>
            </template>
            <template slot-scope="/* eslint-disable vue/no-unused-vars */scope">
              <el-button size="mini" @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-edit"></i></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div></template>
    </SplitPane>
  </d2-container>
</template>

<script>
import terminal from '@/components/terminal'
import resize from 'vue-resize-directive'

export default {
  name: 'page2',
  data () {
    return {
      data: [
        {
          date: '2016-05-02',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: 'XXX路(192.168.5.64)',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      search: '',
      rTableHeight: 300
    }
  },
  methods: {
    handleDelete (index, row) {
      console.log(index, row)
    },
    indexMethod (index) {
      return index * 2
    },
    resizeTableHeight (it) {
      this.rTableHeight = window.getComputedStyle(it).height
    }
  },
  components: {
    terminal
  },
  directives: {
    resize
  }
}
</script>
