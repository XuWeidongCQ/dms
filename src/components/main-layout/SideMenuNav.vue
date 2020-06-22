<template>
  <div class="nav-wrapper">
    <div class="avatar-wrapper">
      <img src="../../assets/doctor.png" alt="" width="120px">
    </div>
    <ul class="nav-links-wrapper">
      <router-link tag="li" to='/home' active-class="active" exact>
        <i class="fa fa-home"></i>
        <span> 首页</span>
      </router-link>
      <router-link tag="li" to='/dev-monitor' active-class="active" exact>
        <i class="fa fa-desktop"></i>
        <span>监护仪</span>
      </router-link>
      <router-link tag="li" to='/device' active-class="active" exact>
        <i class="fa fa-desktop"></i>
        <span>呼吸机</span>
      </router-link>
      <router-link tag="li" to='/dev-anesthesia' active-class="active" exact>
        <i class="fa fa-desktop"></i>
        <span>麻醉机</span>
      </router-link>
      <router-link tag="li" to='/dev-depth-of-anesthesia' active-class="active" exact>
        <i class="fa fa-desktop"></i>
        <span>麻醉深度监测仪</span>
      </router-link>
      <router-link tag="li" to='/dev-noninvasive-hemoglobin' active-class="active" exact>
        <i class="fa fa-desktop"></i>
        <span>无创血红蛋白监测仪</span>
      </router-link>
      <router-link tag="li" to='/dev-noninvasive-brain-oxygen' active-class="active" exact>
        <i class="fa fa-desktop"></i>
        <span>无创脑氧饱和度监测仪</span>
      </router-link>
      <router-link tag="li" to='/dev-noninvasive-blood-pressure' active-class="active" exact>
        <i class="fa fa-desktop"></i>
        <span>无创血压监测仪</span>
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
  /* background-color: #269af1; */
  color: #ffffff;
  cursor: pointer;
}
.active {
  color: #ffffff;
  background-color: #24c79f;
}
</style>