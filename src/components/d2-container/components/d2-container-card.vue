<template>
  <div class="d2-container-card">
    <div v-if="$slots.header" class="d2-container-card__header" ref="header">
      <slot name="header"/>
    </div>
    <el-scrollbar>
      <div class="d2-container-card__body" ref="body">
        <div class="d2-container-card__body-card">
          <slot/>
        </div>
      </div>
    </el-scrollbar>
    <div v-if="$slots.footer" class="d2-container-card__footer" ref="footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
import scroll from './mixins/normal'
export default {
  name: 'd2-container-card',
  mixins: [
    scroll
  ],
  mounted () {
    // 增加滚动事件监听
    this.addScrollListener()
  },
  beforeDestroy () {
    // 移除滚动事件监听
    this.removeScrollListener()
  }
}
</script>

<style>
.d2-container-card > .el-scrollbar {
  height: 100%;
}

.d2-container-card > .el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
