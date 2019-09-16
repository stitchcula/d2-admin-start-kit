<template>
    <d2-container-frame src="/terminal" class="terminal" ></d2-container-frame>
</template>

<script>

export default {
  name: 'terminal',
  data () {
    return {}
  },
  mounted () {
    console.log('mounted')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style scoped>

</style>
