<template>
  <div class="coinlist-wrapper">
    <CoinPare v-for="(item, index) in coinList" :key="index" :data="item" :pare-list="filterList(item)"/>
  </div>
</template>

<script>
import CoinPare from './CoinPare.vue'
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
export default {
  name: 'CoinList',
  props: {
  },
  components: {
    CoinPare
  },
  setup() {
    const coin_list = ref([])
    const rub = {
            CharCode: "RUB",
            Name: "Российский рубль",
            Nominal: 1,
            Value: 1,
        }
    onMounted(async () => {
      coin_list.value = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((el) => {
        const res = el.data?.Valute
        const result = Object.keys(res).map((key) => res[key])
        console.log(result);
        result.push(rub)
        return result
      })
    })
    const coinList = computed(() => {
      return coin_list.value
    })
    const filterList = (data) =>{
      return coin_list.value.filter(el=> {return data?.ID != el?.ID})
    }
    return {coinList,filterList}
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

