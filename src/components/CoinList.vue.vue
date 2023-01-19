<template>
  <div class="coinlist-wrapper">
    <CoinPare v-for="(item, index) in coinList" :key="index" :data="item" :pare-list="filterList(item)"/>
  </div>
</template>

<script>
import CoinPare from './CoinPare.vue'
import {  onMounted, computed } from 'vue'
import { useCurrencyStore } from '@/stores/index'
export default {
  name: 'CoinList',
  props: {
  },
  components: {
    CoinPare
  },
  setup() {
    const currency = useCurrencyStore()
    onMounted( () => {
      currency.getCurrency()
    })
    const coinList = computed(() => {
      return currency.coin_list
    })
    const filterList = (data) =>{
      return currency.coin_list.filter(el=> {return data?.ID != el?.ID})
    }

    return {coinList,filterList,currency}
  }
}
</script>
<style lang="scss">
  .coinlist{
    &-wrapper{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
  }
</style>

