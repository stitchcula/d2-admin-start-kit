<template>
  <d2-container>
    <div id="terminal"></div>
  </d2-container>
</template>

<script>
import { Terminal } from 'xterm'

export default {
  name: 'page2',
  mounted () {
    const term = new Terminal()
    term.open(document.getElementById('terminal'))
    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }
}
</script>
