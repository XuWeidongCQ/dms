<template>
    <div class="form-wrapper">
        <p>登  录</p>
        <div class="form-item">
            <input type="text" v-model="username" placeholder="请输入用户名">
        </div>
        <div class="form-item">
            <input type="text" v-model="password" placeholder="请输入密码">
        </div>
        <div class="login-btn-wrapper">
            <button @click="login">登录</button>
            <a>忘记密码?</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginInForm",
        data:function(){
            return {
                username:'',
                password:''
            }
        },
        methods:{
            login:function(){
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>
.form-wrapper {
    padding: 50px 60px;
    color: #3a3b45;
    text-align: center;
}
.form-wrapper > p {
    font-size: 40px;
}
.form-item {
    margin: 20px 0;
    height: 50px;
    border: 1px solid #d1d3e2;
    border-radius: 50px;
    line-height: 50px;
    padding: 0 20px;
    text-align: left;
}
.form-item > input {
    border: 0;
    height: 40px;
    line-height: 50px;
    font-size: 16px;
    width: 100%;
}
.login-btn-wrapper {
    padding-top: 20px;
    border-top: 1px solid #d1d3e2;
}
.login-btn-wrapper > button {
    display: block;
    height: 50px;
    width: 100%;
    background-color: #4e73df;
    border: 1px solid #d1d3e2;
    border-radius: 50px;
    font-size: 16px;
    color: #ffffff
}
.login-btn-wrapper > button:hover {
    background-color: #4e5fdf;
}
</style>