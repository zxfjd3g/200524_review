import dayjs from "dayjs";
import HintButton from "./HintButton.vue";
/* 
对象插件
*/
// const myPlugin1 = {
//   install (Vue) {
//     console.log('install()')
//     // 注册一个全局组件
//     Vue.component(HintButton.name, HintButton)
//     // 注册全局指令
//     Vue.directive('upper-text', (el, binding) => {
//       el.innerText = binding.value.toUpperCase()
//     })

//     // 注册全局过滤器
//     Vue.filter('date-format', (value) => {
//       // return moment(value).format('YYYY-MM-DD HH:mm:ss')
//       return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
//     })

//     // 给Vue添加方法
//     Vue.fn = function () {
//       console.log('Vue.fn()')
//     }
    
//     // 给Vue的原型添加方法
//     Vue.prototype.$fn = function () {
//       console.log('vm.$fn()')
//     }
    
//   }
// }

// export default myPlugin1


// 函数插件

export default function (Vue) {
  console.log('install----()')
  // 注册一个全局组件
  Vue.component(HintButton.name, HintButton)
  // 注册全局指令
  Vue.directive('upper-text', (el, binding) => {
    el.innerText = binding.value.toUpperCase()
  })

  // 注册全局过滤器
  Vue.filter('date-format', (value) => {
    // return moment(value).format('YYYY-MM-DD HH:mm:ss')
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss')
  })

  // 给Vue添加方法
  Vue.fn = function () {
    console.log('Vue.fn()')
  }
  
  // 给Vue的原型添加方法
  Vue.prototype.$fn = function () {
    console.log('vm.$fn()')
  }
  
}