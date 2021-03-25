# 路由切换动画
router.js
```js
const router = new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/index.html'
    },
    {
      path: '/index.html',
      name: 'index',
      component: () => import('@/page/index'),
      meta: { slide: true } // 标记哪些页面要使用动画
    },
    {
      path:'/detail.html',
      name:'detail',
      component:() => import('@/page/detail'),
      meta: { slide: true }
    }
  ]
})

// 记录页面切换的方向
const pageStacks = [];
router.beforeEach((to, from, next) => {
    // 是否使用过渡动画
    const index = pageStacks.indexOf(to.path);
    let direction = '';


    if (index !== -1) {
        pageStacks.splice(index+1, pageStacks.length - index - 1);

        if (from.meta.slide) {
            direction = 'slide-right'
        }
    } else {
        pageStacks.push(to.path);
        
        if (to.meta.slide && !to.query.from) {
            direction = 'slide-left'
        }
    }

    store.commit('SET_VIEWDIRECTION', direction);
    next()
})
```

App.vue
```vue
<template>
  <div class="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition> 
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'App',
    computed: {
        ...mapState({
            transitionName: state => state.viewDirection
        })
    },
    mounted() {}
}

</script>

<style scoped>
.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all .3s ease;
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-to {
  transform: translateX(-100%);
}

.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
```