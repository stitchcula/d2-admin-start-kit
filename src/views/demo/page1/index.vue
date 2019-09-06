<template>
  <d2-container>
    <ve-tree :data="chartData" height="100%" :extend="chartExtend" :tooltip-formatter="tooltipFormatter" :settings="chartSettings"></ve-tree>
  </d2-container>
</template>

<script>
const treeData = {
  name: '0',
  value: '东方有线',
  addr: '192.168.3.12',
  hardware: '通用服务器',
  os: 'CentOS',
  children: [
    {
      name: '12',
      value: '测试2',
      addr: '192.168.3.363',
      hardware: '通用服务器',
      os: 'CentOS',
      children: [
        {
          name: 'a-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'a-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'b',
      value: 1,
      link: 'https://ele.me',
      children: [
        {
          name: 'b-a',
          link: 'https://ele.me',
          value: 2
        },
        {
          name: 'b-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'c',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'c-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'c-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    },
    {
      name: 'd',
      value: 3,
      link: 'https://ele.me',
      children: [
        {
          name: 'd-a',
          link: 'https://ele.me',
          value: 4
        },
        {
          name: 'd-b',
          link: 'https://ele.me',
          value: 2
        }
      ]
    }
  ]
}
export default {
  name: 'page1',
  data () {
    this.chartSettings = {
      seriesMap: {
        topology: {
          orient: 'vertical',
          label: {
            position: 'top',
            formatter: '{b}: {c}'
          },
          itemStyle: {
            borderColor: '#31ff2f'
          }
        }
      }
    }
    this.chartExtend = {
      tooltip: {
        alwaysShowContent: true,
        enterable: true,
        renderMode: 'html'
      }
    }
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          {
            name: 'topology',
            value: [treeData]
          }
        ]
      }
    }
  },
  methods: {
    tooltipFormatter (v) {
      return [
        `地址：<a target="_blank" href="http://${v.data.addr}">${v.data.addr}</a>`,
        `设备：${v.data.hardware || '未知'}`,
        `系统：${v.data.os || '未知'}`
      ].join('<br>')
    }
  }
}
</script>
