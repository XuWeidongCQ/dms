<template>
  <x-box class="table-wrapper">
    <div class="xu-box-title">
      <span>已完成手术概况</span>
    </div>
    <x-table
      :title="['手术顺序号','手术名称','开始时间','结束时间','设备']"
      :size="'sm'"
      :align="'center'"
      :strip="true"
      :colWidth="['100px','250px','150px','150px']"
    >
      <tr v-for="ope in opeInfos" :key="ope.patientId">
        <td>
          <span>{{ ope.operationNumber }}</span>
          <x-button :value="'详情'" :size="'sm'" :type="'success'" @click="showModal(ope)"></x-button>
        </td>
        <td>{{ ope.operationName }}</td>
        <td>{{ ope.operationStartTime | formatterDate }}</td>
        <td>{{ ope.operationEndTime | formatterDate }}</td>
        <td>{{ ope.usedDeviceInfoForPlatform | formatterDevName}}</td>
      </tr>
    </x-table>
    <div class="pager-wrapper">
      <x-pager 
      :pageNum="totalPages"
      :totalElements="totalElements"
      @hasSelectedPage="selPage($event)">
      </x-pager>
    </div>
    <!-- 弹窗 -->
    <x-ope-detail-info 
     v-if="modalShow" 
     @close="modalShow = false"
     :operationNumber = "selOpe.operationNumber"
    >
    </x-ope-detail-info>
  </x-box>
</template>

<script>
import xTable from "@/x-views/xTable";
import xBox from "@/x-views/xBox";
import xPager from "@/x-views/xPager";
import xBadge from "@/x-views/xBadge";
import xButton from "@/x-views/xButton";
import xOpeDetailInfo from "@/components/share-components/xOpeDetailInfo";
export default {
  components: { xTable, xBox, xPager, xBadge, xButton, xOpeDetailInfo },
  data() {
    return {
      opeInfos: [],
      totalPages: 1,
      totalElements: 0,
      modalShow: false,
      selOpe: {}
    };
  },
  methods: {
    getData(page = 0, size = 14) {
      this.$http["getOpeInfos"]({ params: { page: page, size: size } }).then(
        res => {
          const { data } = res;
          // const reg = /(?<=\().+?(?=\))/g
          this.opeInfos = data["content"];
          this.totalPages = data["totalPages"];
          this.totalElements = data["totalElements"];
          // console.log(this.opeInfos[0].usedDeviceInfoForPlatform.match(reg))
        }
      );
    },
    selPage(page) {
      this.getData(page - 1);
    },
    showModal(ope){
      this.selOpe = ope;
      this.modalShow = true
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped>
.pager-wrapper {
  position: absolute;
  right: 20px;
  bottom: 5px;
}
.table-wrapper {
  height: 610px;
  font-size: 14px;
}
.total-badge {
  font-size: 12px;
  vertical-align: bottom;
}
</style>