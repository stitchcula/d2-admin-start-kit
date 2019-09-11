<template>
    <iframe src="http://192.168.20.143:9010/"></iframe>
</template>

<script>
// import { Hterm } from './gotty/src/hterm'
// import { Xterm, WebTTY, protocols, ConnectionFactory } from 'gotty'

export default {
  name: 'page2',
  data () {
    this.term = {}
    this.closer = () => {}
    return {}
  },
  mounted () {
    setTimeout(() => {
      // this.term = new Xterm(this.$refs.terminal)
      // const httpsEnabled = window.location.protocol === 'https:'
      // const url = (httpsEnabled ? 'wss://' : 'ws://') + window.location.host + window.location.pathname + 'ws'
      // const url = 'ws://192.168.20.143:1234/ws'
      // const args = window.location.search
      // const factory = new ConnectionFactory(url, protocols)
      // const wt = new WebTTY(this.term, factory, args, '')
      // this.closer = wt.open()
    }, 100)
  },
  destroyed () {
    // this.closer()
    // this.term.close()
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

.xterm-overlay {
    font-family: "DejaVu Sans Mono", "Everson Mono", FreeMono, Menlo, Terminal, monospace, "Apple Symbols";
    border-radius: 15px;
    font-size: xx-large;
    color: black;
    background: white;
    opacity: 0.75;
    padding: 0.2em 0.5em 0.2em 0.5em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    transition: opacity 180ms ease-in;
}

</style>
