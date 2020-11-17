<template>
  <ul>
    <li v-for="item in data" :key="item.text" @click.stop="handleClick(item)">
      {{item.text}}
      <Tree2 :data="item.children" v-if="item.expend && item.children && item.children.length"/>
    </li>
  </ul>
</template>

<script> 
/* 一个组件内部有自己的组件标签 */
export default {  // 
  name: 'Tree2',
  props: ['data'],
  methods: {
    handleClick (item) {
      console.log('handleClick()')
      if (item.hasOwnProperty('expend')) {
        item.expend = !item.expend
      } else {
        this.$set(item, 'expend', true)
      }
    }
  }
}
</script>