<template>
  <div class="nav-wrapper">
    <div class="avatar-wrapper">
      <img src="../../assets/doctor.png" alt="" width="120px">
    </div>
    <ul class="nav-links-wrapper">
      <router-link tag="li" to='/home' active-class="active" exact class="nav-link">
        <i class="fa fa-home"></i>
        <span> 首页</span>
      </router-link>
      <li @click="toggle()" class="nav-link toggle-link">
        <i class="fa fa-th-large"></i>
        <span>数据分析</span>
        <span class="arrow">
          <i class="fa" :class="{'fa-angle-left':!isSpread,'fa-angle-down':isSpread}"></i>
        </span>
      </li>
      <ul :class="{'shrink-links-wrapper':!isSpread,'spread-links-wrapper':isSpread}" class="toggle-links-wrapper">
        <router-link tag="li" to='/dev-anesthesia' active-class="active" exact class="nav-link">
          <i class="fa fa-desktop"></i>
          <span>麻醉机</span>
        </router-link>
        <router-link tag="li" to='/dev-depth-of-anesthesia' active-class="active" exact class="nav-link">
          <i class="fa fa-desktop"></i>
          <span>麻醉深度监测仪</span>
        </router-link>
        <router-link tag="li" to='/dev-noninvasive-hemoglobin' active-class="active" exact class="nav-link">
          <i class="fa fa-desktop"></i>
          <span>无创血红蛋白监测仪</span>
        </router-link>
        <router-link tag="li" to='/dev-noninvasive-brain-oxygen' active-class="active" exact class="nav-link">
          <i class="fa fa-desktop"></i>
          <span>无创脑氧饱和度监测仪</span>
        </router-link>
        <router-link tag="li" to='/dev-noninvasive-blood-pressure' active-class="active" exact class="nav-link">
          <i class="fa fa-desktop"></i>
          <span>无创血压监测仪</span>
        </router-link>
        <router-link tag="li" to='/dev-monitor' active-class="active" exact class="nav-link">
          <i class="fa fa-desktop"></i>
          <span>监护仪</span>
        </router-link>
      </ul>
      
      <router-link tag="li" to='/device' active-class="active" exact class="nav-link">
        <i class="fa fa-desktop"></i>
        <span>呼吸机</span>
      </router-link>  
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isSpread:false
    }
  },
  methods:{
    toggle(){
      this.isSpread = !this.isSpread
    }
  }
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
.nav-link {
  padding: 10px 0 10px 15px;
  border-bottom:1px solid #566579
}
.nav-link:hover {
  color: #ffffff;
  cursor: pointer;
}
.nav-link > i {
  margin-right: 10px;
  font-size: 16px;
}
.arrow {
  float: right;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 3px;
}
.active {
  color: #ffffff;
  background-color: #24c79f;
}
.shrink-links-wrapper {
  height: 0;
}
.spread-links-wrapper {
  height: 260px; 
}
.toggle-links-wrapper {
  transition: height ease 0.5s;
  overflow: hidden;
}
.toggle-links-wrapper > .nav-link {
  padding-left: 30px;
}
</style>