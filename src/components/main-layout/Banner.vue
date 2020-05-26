<template>
    <div class="wrapper">
        <span class="name">医疗仪器大数据分析平台</span>
        <span class="out" @click="logOut">
            <span class="fa fa-sign-out"> 退出</span>
        </span>
    </div>
</template>

<script>
export default {
    methods:{
        logOut:function(){
            this.$router.push('/')
        }
    }
}
</script>

<style scoped>
.wrapper {
    line-height: 32px;
    background-color: #0b75c1;
    padding: 0 15px
}
.wrapper > .name {
    font-size: 20px;
    color: #ffffff;
    
}
.wrapper > .out {
    float: right;
    cursor: pointer;
    color: #e9e9e9;
}
.out:hover {
    color: #ffffff;
}
</style>