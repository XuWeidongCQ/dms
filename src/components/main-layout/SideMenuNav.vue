<template>
  <div class="nav-wrapper">
    <div class="avatar-wrapper">
      <img src="../../assets/doctor.png" alt="" width="120px">
    </div>
    <ul class="nav-links-wrapper">
      <router-link tag="li" to='/home' active-class="active" exact>
        <i class="fa fa-home"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="li" to='/device'>
        <i class="fa fa-home"></i>
        <span>首页</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.avatar-wrapper {
  padding: 40px 52px;
  border-bottom:1px solid #566579
}
.nav-links-wrapper {
  font-size: 16px;
}
.nav-links-wrapper > li {
  padding: 18px 0 18px 20px;
  border-bottom:1px solid #566579
}
.nav-links-wrapper > li > i {
  margin-right: 10px;
  font-size: 18px;
}
.nav-links-wrapper > li:hover {
  background-color: #269af1;
  color: #ffffff;
  cursor: pointer;
}
.active {
  color: #ffffff;
}
</style>