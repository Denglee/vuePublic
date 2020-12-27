<template>
  <div class="layout-box row-bg">
    <!--左侧侧边导航-->
    <div  class="layout-left" :style="{width:navLeftWidth}">
      <LeftNav></LeftNav>
    </div>

    <!--右侧主体内容-->
    <div class="layout-right" >

      <!--右侧头部-->
      <header class="layoutR-header">
        <!-- 头部 -->
        <header-top/>
        <!--左侧点击路由添加显示在头部导航-->
<!--        <tag-nav></tag-nav>-->
      </header>

      <!--右边主体内容-->
      <router-view></router-view>

      <!--回到顶部-->
      <el-backtop :bottom="20">
        <el-tooltip content="回到顶部" placement="right">
          <span></span>
        </el-tooltip>
      </el-backtop>

    </div>
  </div>
</template>

<script>
// import HeaderBar from './HeaderBar'
import HeaderTop from './HeaderTop'
import LeftNav from './LeftNav'
// import TagNav from './TagNav'

import {mapActions, mapGetters} from 'vuex'

export default {
  data(){
    return{
      localUrl:this.GLOBAL.localUrl,

    }
  },
  computed: {

  },

  methods:{
    getGlobal(){
      // console.log(this.localUrl);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    changePass(){

    }
  },
  created() {
    this.getGlobal();
  },
  components:{
    HeaderTop,
    LeftNav,
  },
  computed: {
    //获取 store 中 StoreTagNav。js 的 gState 页面通过{{gState}}直接用
    ...mapGetters({
      navLeftWidth: "StoreTagNav/getNavLeftWidth",
    }),
  }

}
</script>
<style lang="scss">
@import "~@/assets/css/LayoutNav.scss";

</style>
