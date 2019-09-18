<template>
    <div style="margin-left: 20px; height: 100%; position: relative">
        <iframe
        ref="terminal"
        @load="onLoad"
        class="d2-container-frame"
        src="/terminal"
        frameborder="0"></iframe>
    </div>
</template>

<script>

export default {
  name: 'terminal',
  props: {
    rzUrl: String
  },
  data () {
    return {}
  },
  methods: {
    onDrop (e) {
      // if (!this.rzUrl) {
      //   return
      // }
      e.stopPropagation()
      e.preventDefault()
      console.log(e.dataTransfer.files)
    },
    prevent (e) {
      e.stopPropagation()
      e.preventDefault()
    },
    onLoad (_) {
      let body = this.$refs.terminal.contentDocument.body
      let inner = body.querySelector('iframe')
      if (inner) {
        body = inner.contentDocument.body
      }
      body.addEventListener('dragleave', this.prevent, true)
      body.addEventListener('dragover', this.prevent, true)
      body.addEventListener('drop', this.onDrop, true)
    }
  },
  mounted () {

  },
  destroyed () {
    // console.log('destroyed')
  }
}
</script>

<style scoped>
.d2-container-frame {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
