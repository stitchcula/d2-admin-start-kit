<template>
  <d2-container>
    <SplitPane :min-percent='20' :default-percent='30' split="vertical">
      <template slot="paneR"><terminal></terminal></template>
      <template slot="paneL">
        <d2-crud
          :data="data"
          :columns="columns"
          selection-row
          @selection-change="handleSelectionChange"/>
      </template>
    </SplitPane>
  </d2-container>
</template>

<script>
import terminal from '@/components/terminal'

export default {
  name: 'page2',
  data () {
    return {
      columns: [
        {
          title: '日期',
          key: 'date'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleSelectionChange (selection) {
      console.log(selection)
    }
  },
  components: {
    terminal
  }
}
</script>
