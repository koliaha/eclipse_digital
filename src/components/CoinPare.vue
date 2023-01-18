<template>
  <div class="coinlist-wrapper">
    <CoinItem v-for="(item,index) in pareList" :key="index" :data="item" :current-coin="data"/>
  </div>
</template>

<script>
import CoinItem from './CoinItem.vue'

export default {
  name: 'CoinPare',
  props: {
    data:{
      default:{}
    },
    pareList:{
      default:[]
    }
  },
  components: {
    CoinItem
  },
  setup(){

  }
}
</script>

