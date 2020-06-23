<template>
  <ul class="list-wrapper">
    <li
    class="list-item-wrapper"
    :class="{'active':item === activeItem}" 
    v-for="(item,index) in items" 
    :key="index" 
    @click="emit(item)">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props:{
    items:{
      type:Array,
      default:() => []
    },
    activeItem:{
      default:''
    }
  },
  methods:{
    emit(value){
      this.$emit('click',value)
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.list-wrapper{
  font-size: 14px;
}
.list-wrapper > .list-item-wrapper {
  cursor: pointer;
  padding: 5px 2px;
}
.active {
  background-color: #24c79f !important;
  color: #ffffff !important;
}
</style>