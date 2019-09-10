<template>
    <div ref='terminal' class="terminal"></div>
</template>

<script>
// import { Hterm } from './gotty/src/hterm'
// import { Xterm } from './gotty/src/xterm.ts'
// import { WebTTY, protocols } from './gotty/src/webtty.ts'
// import { ConnectionFactory } from './gotty/src/websocket.ts'
import { ConnectionFactory, Xterm, WebTTY, protocols } from 'gotty'

export default {
  name: 'page2',
  data () {
    this.term = {}
    this.closer = () => {}
  },
  mounted () {
    setTimeout(() => {
      this.term = new Xterm(this.$refs.terminal)
      // const httpsEnabled = window.location.protocol === 'https:'
      // const url = (httpsEnabled ? 'wss://' : 'ws://') + window.location.host + window.location.pathname + 'ws'
      const url = 'ws://192.168.30.242:1234/uweb/ws'
      const args = window.location.search
      const factory = new ConnectionFactory(url, protocols)
      const wt = new WebTTY(this.term, factory, args, '')
      this.closer = wt.open()
    }, 100)
  },
  destroyed () {
    this.closer()
    this.term.close()
  }
}
</script>

<style scoped>
.terminal {
  background: black;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  font-family: "DejaVu Sans Mono", "Everson Mono", FreeMono, Menlo, Terminal, monospace, "Apple Symbols";
}
</style>
