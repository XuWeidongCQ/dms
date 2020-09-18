<template>
  <x-modal @close="close">
    <div><span class="xu-text-title">{}的历史标记记录</span></div>
    <div class="his-mark-wrapper xu-add-scrollBar">
      
    </div>
    <div><span class="xu-text-title">添加术中标记</span></div>
    <div class="mark-form-wrapper">
      <div class="xu-col-9">
        <div class="mb15">
          <x-select v-model='level1' :options='level1Option' :styleObj="{'width':'100px'}" class="mr"></x-select>
          <x-select v-model='level2' :options='level2Option' :styleObj="{'width':'150px'}" class="mr" v-if='level2Show'></x-select>
          <x-select v-model='level3' :options='level3Option' :styleObj="{'width':'300px'}" v-if='level3Show'></x-select>
        </div>
        <div class="xu-text-std mb15">
          <span class="mr">不良反应：</span>
          <label class="mr">
            <span>无</span>
            <input type="radio" :value="false" v-model="hasReaction" class="xu-input-radio">
          </label>
          <label>
            <span>有</span>
            <input type="radio" :value="true" v-model="hasReaction" class="xu-input-radio">
          </label>
        </div>
        <div>
          <p class="xu-text-second">不良反应描述:</p>
          <textarea :disabled='!hasReaction' class="xu-input-textarea reaction-desc" v-model='reactionDesc'></textarea>
        </div>
      </div>
      <div class="xu-col-3">
        <div class="prefix-wrapper" v-show="prefixShow">
          <div class="xu-text-second">
            <span v-if="level1 === '用药'">给药途径：</span>
            <span v-if="level1 === '补液/输血'">输入途径：</span>
          </div>
          <x-select v-model='level4' :options='level4Option' :styleObj="{'width':'100px'}" class="mb15"></x-select>
          <div class="xu-text-second">
            <span>剂量：</span>
          </div>
          <input type="number" class="dose-input" v-model="level5">
        </div>
      </div>
    </div>
    <div>
      <x-button :value="'确认提交'" :type="'success'" @click="submitMark()"></x-button>
    </div>
  </x-modal>
</template>

<script>
import xModal from '@/x-views/xModal'
import xSelect from '@/x-views/xSelect'
import xButton from '@/x-views/xButton'
import showAlert from '@/x-views/xAlert/xAlert'
import axios from 'axios'
export default {
  components:{
    xModal,
    xSelect,
    xButton
  },
  data(){
    return {
      markRecords:{},
      level1:'',
      level1Option:[],
      level2:'',
      level2Option:[],
      level3:'',
      level3Option:[],
      level4:'',
      level4Option:[],
      level5:'',
      hasReaction:false,
      reactionDesc:'',
      level2Show:false,
      level3Show:false,
    }
  },
  watch:{
    //是否要显示第二级选择框
    level1:function(newVal,oldVal){
      if(newVal === '用药'){
        this.level4Option = [
          "静脉注射","静脉滴注","皮下注射","肌肉注射","气道吸入","硬膜外","蛛网膜下","关节腔内注射"
        ]
      }
      if(newVal === '补液/输血'){
        this.level4Option = [
          "静脉滴注","静脉加压输注","静脉快速推注"
        ]
      }
      const tmp = this.markRecords[newVal]
      this.level2 = ''
      this.level3 = ''
      this.level4 = ''
      this.level5 = ''
      if(typeof tmp === 'object'){//有下一级选择框
        this.level2Show = true
        if(Array.isArray(tmp)){
          this.level2Option = tmp
        } else {
          this.level2Option = Object.keys(tmp)
        }
      } else {
        this.level2Show = false
      }
    },
    //是否显示第三级选择框
    level2:function(newVal,oldVal){
      const tmp = this.markRecords[this.level1][newVal]
      this.level3 = ''
      if(typeof tmp === 'object'){//有下一级选择框
        this.level3Show = true
        if(Array.isArray(tmp)){
          this.level3Option = tmp
        } else {
          this.level3Option = Object.keys(tmp)
        }
      } else {
        this.level3Show = false
      }
    },
    hasReaction:function(newVal,oldVal){
      if(!newVal){
        this.reactionDesc = ''
      }
    },
    //初始化选择框中的值
    level1Option:function(newVal){
      this.level1 = newVal[0]
    },
    level2Option:function(newVal){
      this.level2 = newVal[0]
    },
    level3Option:function(newVal){
      this.level3 = newVal[0]
    },
    level4Option:function(newVal){
      this.level4 = newVal[0]
    }
  },
  computed:{
    prefixShow:function(){
      if(this.level1 === '用药' && this.level2 !== '' && this.level3 !== ''){
        return true
      }
      if(this.level1 === '补液/输血' && this.level2 !== '' && this.level3 !== ''){
        return true
      }
      return false
    }
  },
  methods:{
    close(){
      this.$emit('close')
    },
    //1.获取手术标记信息
    getMarkRecords(){
      axios.get('./ope-mark.json')
      .then(res => {
        
        this.markRecords = res.data
        this.level1Option = Object.keys(res.data)
      })
      .catch(e => {
        console.log('获取或者解析手术标记信息出错')
      })
    },
    //2.提交标记信息
    submitMark(){
      showAlert('请填完再进行提交','failure')
    }
    
  },
  created(){
    this.getMarkRecords()
  }
}
</script>

<style scoped>
.his-mark-wrapper{
  height: 300px;
}
.mark-form-wrapper {
  width: 1000px;
  height: 260px;
  display: flex;
  margin: 0 -15px;
}
.mr {
  margin-right: 15px;
}
.dose-input {
  padding: 6px 25px 6px 10px;
  border: 0;
  border-bottom: 1px solid #dcdfe6;
  font-size: 1.2em;
}
.dose-input:focus {
  border-bottom: 1px solid #48a8ff
}
.reaction-desc {
  width: 680px;
  height: 120px;
  padding: 5px;
}
</style>