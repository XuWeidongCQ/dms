<template>
    <div>
        <div class="sidebar-menu-wrapper">
            <side-menu-nav></side-menu-nav>
        </div>
        <div class="banner">
            <banner></banner>
        </div>
        <div class="main-container">
            <div class="xu-row">
                <div class="xu-col-4">
                    <x-box>
                        <div class="xu-box-title">
                            标题
                        </div>
                        盒子
                    </x-box>
                </div>
                <div class="xu-col-4">
                    <x-box>盒子</x-box>
                </div>
                <div class="xu-col-4">
                     <x-box>盒子</x-box>
                </div>
            </div>
            <x-badge :value="'压力错误'" :type="'danger'"></x-badge>
            <x-button :value="'确定'" :size="'sm'"></x-button>
        </div>
    </div>
</template>

<script>
    import Banner from '@/components/main-layout/Banner.vue'
    import SideMenuNav from '@/components/main-layout/SideMenuNav.vue'
    import xBox from '@/x-views/xBox.vue'
    import xBadge from '@/x-views/xBadge.vue'
    import xButton from '@/x-views/xButton.vue'
    export default {
        name: "MainLayout",
        components:{Banner,xBox,xBadge,xButton,SideMenuNav},
        methods:{
            test(){
                console.log('click')
            }
        }
    }
</script>

<style scoped>
.sidebar-menu-wrapper {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 224px;
    box-sizing: border-box;
    background-color: #455161;
    color: #939daa
}
.banner {
   position: fixed;
   top: 0;
   right: 0;
   left: 224px;
   min-width: 1366px;
   box-sizing: border-box;
   background-color: #ffffff;
}
.main-container{
    margin-top: 32px;
    margin-left: 224px;
    padding: 15px;
    min-width: 1366px;
    height: 300px;
    box-sizing: border-box;
    /* padding: ; */
}
</style>