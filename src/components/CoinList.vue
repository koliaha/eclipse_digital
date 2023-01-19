<template>
  <div class="coinlist-wrapper">
    <div class="coinlist-filter">
      <select v-model="currentCoin" class="converter-filter">
        <option :value="null">Все</option>
        <option v-for="(i, index) in currency.coin_list" :key="index" :value="i">{{
          i?.CharCode
        }} - {{ i.Name }}</option>
      </select>
      <input type="text" v-model="searchFilter" placeholder="R01010" class="converter-filter">
    </div>
    <div v-if="coinList.length > 0">
      <CoinPare v-for="(item, index) in coinList" :key="index" :data="item" :pare-list="filterList(item)" />
    </div>
    <div v-else>
      Список пуст
    </div>
    
  </div>
</template>

<script>
import CoinPare from './CoinPare.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { useCurrencyStore } from '@/stores/index'
export default {
  name: 'CoinList',
  props: {
  },
  components: {
    CoinPare
  },
  setup() {
    const currentCoin = ref(null)
    const searchFilter = ref('')
    const currency = useCurrencyStore()

    onMounted(() => {
      currency.getCurrency()
    })
    const coinList = computed(() => {
      if (searchFilter.value.length) {
        return currency.coin_list.filter((elem) => {
            return elem?.ID?.toLowerCase().includes(searchFilter.value.toLowerCase())
        }
        );
      }
      if (currentCoin.value != null) {
        return currency.coin_list.filter((el) => el?.ID == currentCoin.value?.ID)
      }
      return currency.coin_list
    })
    const filterList = (data) => {
      return currency.coin_list.filter(el => { return data?.ID != el?.ID })
    }
    watch(() => currentCoin.value, (val) => {
      currentCoin.value = val
    });

    return { coinList, filterList, currency, currentCoin, searchFilter }
  }
}
</script>
<style lang="scss">
.coinlist {
  &-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  &-filter {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

