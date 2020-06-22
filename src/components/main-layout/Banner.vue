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
    line-height: 42px;
    background-color: #393d49;
    padding: 0px 15px;
}
.wrapper > .name {
    font-size: 20px;
    color: #ececec;
    
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