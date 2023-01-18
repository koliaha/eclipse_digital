<template>
  <div class="coinitem-wrapper">
    <h3>{{ currentCoin.CharCode }}/{{ data.CharCode }}</h3>
    <div>{{`1 ${currentCoin.CharCode} - ${convert(currentCoin,data).toFixed(4) || 1} ${data.CharCode}` }}</div>
    <div>{{`1 ${data.CharCode} - ${convertReverse(data,currentCoin).toFixed(4) || 1} ${currentCoin.CharCode}` }}</div>
  </div>
</template>

<script>
export default {
  name: 'CoinList',
  props: {
    data: {
      default: {}
    },
    currentCoin: {
      default: {}
    }
  },
  setup() {
    const convert = (data,convert) => {
      return data.Value / data.Nominal / convert.Value
    }
    const convertReverse = (data,convert) => {
      return data.Value * convert.Nominal  / convert.Value 
    }
    return { convert,convertReverse }
  }
}
</script>

<style lang="scss">
.coinitem {
  &-wrapper {
    max-width: 300px;
    width: 100%;
    height: 200px;
    padding: 20px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }
}
</style>