const state = {
  // 页面加载初始化时执行
  cartList: JSON.parse(sessionStorage.getItem('CART_LIST_KEY')) || [],
  xxx: {}
}
const mutations = {
  RECEIVE_CART_LIST (state, cartList) {
    state.cartList = cartList
  },

  asyncUpdate (state) {
    /* 
    在mutation中异步更新状态数据?
    1. 界面是否更新?  会
    2. 问题: vuex的调试工具看到还是老的state数据?  
      why?  工具是在mutation函数执行完后立即记录下数据 ==> 如果是异步的当时还没有变化

    vuex中的状态数据的响应式的原理?
      1. 创建了一个vm对象
      2. state中的数据都是vm的data数据(是响应式的)
      3. 组件中读取的state数据本质读取的就是data中的数据
      4. 一旦更新了state中的数据, 所有用到这个数据的组件就会自动更新
    */
    setTimeout(() => {
      const item = {
        id: Date.now(),
        name: 'AA',
        price: 1000,
        count: 2
      }
      state.cartList.push(item)
    }, 1000);
  }
}
const actions = {

  getCartList ({commit, state}, isReload) {
    if (state.cartList.length>0 && !isReload) {
      return
    }
    console.log('异步请求获取列表数据')

    setTimeout(() => {
      const cartList = [
        {
          id: 1,
          name: 'AA',
          price: 1000,
          count: 2
        },
        {
          id: 2,
          name: 'BB',
          price: 2000,
          count: 3
        }
      ]

      commit('RECEIVE_CART_LIST', cartList)
    }, 2000);
  }
}
const getters = {
  totalPrice (state) {
    return state.cartList.reduce((pre, item) => pre + item.count*item.price, 0)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}