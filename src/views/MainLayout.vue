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
    background-color: #455161;
    color: #939daa
}
.banner {
   position: absolute;
   top: 0;
   right: 0;
   left: 224px;
   box-sizing: border-box;
   background-color: #ffffff;
}
.main-container{
    margin-top: 34px;
    margin-left: 224px;
    padding: 15px;
    box-sizing: border-box;
    height: 900px;
}
</style>