<template>
    <div class="main-wrapper">
        <div class="sidebar-menu-wrapper">
            <side-menu-nav></side-menu-nav>
        </div>
        <div class="banner">
            <banner></banner>
        </div>
        <div class="main-container xu-add-scrollBar">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <div class="footer-wrapper">
            <span class="copyright">
               Copyright©2020 重庆大学微系统研究中心余华课题组 版权所有 
               <a href="http://www.beian.miit.gov.cn/">渝ICP备19011317号</a> 
               最佳分辨率1920*1080 
            </span>
        </div>
    </div>
</template>

<script>
import Banner from '@/components/main-layout/Banner.vue'
import SideMenuNav from '@/components/main-layout/SideMenuNav.vue'
export default {
    name: "MainLayout",
    components:{Banner,SideMenuNav},
    methods:{
        test(){
            console.log('click')
        }
    }
}
</script>

<style scoped>
.main-wrapper {
    min-height: 100vh;
    position: relative;
    width: 1920px;
    overflow: hidden;
}
.sidebar-menu-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 224px;
    box-sizing: border-box;
    background-color: #2e3d50;
    color: #939daa
}
.banner {
   position: absolute;
   top: 0;
   right: 0;
   left: 0;
   box-sizing: border-box;
   /* background-color: #ffffff; */
}
.main-container{
    margin-top: 60px;
    margin-left: 224px;
    padding: 0 15px 15px 15px;
    box-sizing: border-box;
    height: 850px;
    background-color: #f1f2f6;
}
.footer-wrapper {
   position: absolute;
   bottom: 0;
   right: 0;
   left: 0;
   box-sizing: border-box;
   background-color: #157dba;
   text-align: center;
}
.copyright {
    line-height: 32px;
    font-size: 12px;
    color: #f1f1f1;
}
</style>