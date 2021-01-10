<template>
  <div class="nav-wrapper">
    <div class="avatar-wrapper">
      <img src="../../assets/doctor.png" alt="" width="120px">
    </div>
    <ul class="nav-links-wrapper">
      <router-link tag="li" to='/home' active-class="active" exact class="nav-link">
        <i class="fa fa-th-large fa-fw"></i>
        <span>实时监测</span>
      </router-link>
      <router-link tag="li" to='/operation-info' active-class="active" exact class="nav-link">
        <i class="fa fa-bars fa-fw"></i>
        <span>手术数据</span>
      </router-link>
      <router-link tag="li" to='/data-analysis-ope-mid' active-class="active" exact class="nav-link">
        <i class="fa fa-bars fa-fw"></i>
        <span>仪器数据</span>
      </router-link>
      <li @click="toggle()" class="nav-link toggle-link">
        <i class="fa fa-bars fa-fw"></i>
        <span>仪器详细数据</span>
        <span class="arrow">
          <i class="fa" :class="{'fa-angle-left':!isSpread,'fa-angle-down':isSpread}"></i>
        </span>
      </li>
      <ul :class="{'shrink-links-wrapper':!isSpread,'spread-links-wrapper':isSpread}" class="toggle-links-wrapper">
        <router-link 
        v-for='(item,index) in urls' 
        :key='index' tag="li" 
        :to="item['url']"
        active-class="active" 
        exact 
        class="nav-link"
        >
          <i class="fa fa-laptop"></i>
          <span>{{ item['name'] }}</span>
        </router-link>
      </ul> 
    </ul>
  </div>
</template>

<script>
import { typeInfo } from '@/global/devTypeCode'

export default {
  data(){
    return {
      isSpread:false,
      urls:this.getUrls()
    }
  },
  methods:{
    toggle(){
      this.isSpread = !this.isSpread
    },
    getUrls(){
      const ans = []
      for(const key in typeInfo){
        ans.push({'name':key,'url':typeInfo[key]['url']})
      }
      return ans
    }
  },
}
</script>

<style scoped>
.avatar-wrapper {
  padding: 60px 52px 25px 52px;
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
  background-color: #157dba;
}
.shrink-links-wrapper {
  height: 0;
}
.spread-links-wrapper {
  height: 260px; 
}
.toggle-links-wrapper {
  transition: height ease 0.3s;
  overflow: hidden;
}
.toggle-links-wrapper > .nav-link {
  padding-left: 20px;
}
</style>