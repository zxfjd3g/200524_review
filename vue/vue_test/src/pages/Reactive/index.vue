<template>
  <div>
    <p>msg3: {{msg3}}</p>
    <p>{{msg1.name}}</p>
    <hr>
    <!-- <data-test :msg3="msg3" @update:msg3="msg3=$event"></data-test> -->
    <data-test :msg4="msg1" :msg3.sync="msg3"></data-test>

    <!-- <p>{{msg4}}</p>
    <button @click="add">添加新属性</button> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import DataTest from './DataTest'
  export default {
    name: 'Reactive',

    data () {

      this.xx = []

      return {
        msg1: {name: 'aaaa'},
        msg3: 'atguigu',
        yyy: []
      }
    },

    methods: {
      add () {
        // this.msg4 = 'abcd'
        // this.$set(this.$data, 'msg4', 'abcde')
      }
    },


    components: {
      DataTest
    }
  }
</script>