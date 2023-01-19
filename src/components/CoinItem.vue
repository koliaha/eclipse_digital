<template>
  <div class="coinitem-wrapper">
    <h3>{{ currentCoin.CharCode }}/{{ data.CharCode }}</h3>
    <div class="coinitem-currency">
      <p>{{`1 ${currentCoin.CharCode} - ${convert(currentCoin, data).toFixed(4) || 1} ${data.CharCode}` }}</p>
      <div class="arrow__price"><i class="arrow" :class="checkPrice(currentCoin) ? 'up' : 'down'"></i></div>
    </div>
    <div class="coinitem-currency">
      <p>{{`1 ${data.CharCode} - ${convertReverse(data, currentCoin).toFixed(4) || 1} ${currentCoin.CharCode}` }}</p>
      <div class="arrow__price"><i class="arrow" :class="checkPrice(data) ? 'up' : 'down'"></i></div>
    </div>
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
    const convert = (data, convert) => {
      return data.Value / data.Nominal / convert.Value
    }
    const convertReverse = (data, convert) => {
      return data.Value * convert.Nominal / convert.Value
    }
    const checkPrice = (item) => {
      const counter = item.Value - item.Previous
      return counter >= 0
    }
    return { convert, convertReverse, checkPrice }
  }
}
</script>

<style lang="scss">
.coinitem {
  &-wrapper {
    max-width: 300px;
    width: 100%;
    padding: 20px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &-currency{
    display: flex;
    justify-content: center;
    margin: 5px 0;
  }
}
.arrow {
  display: inline-block;
  padding: 3px;
  margin: 5px ;
}
.up {
  transform: rotate(-135deg);
  border: solid rgb(0, 205, 0);
  border-width: 0 3px 3px 0;
}

.down {
  transform: rotate(45deg);
  border: solid rgb(209, 0, 0);
  border-width: 0 3px 3px 0;
}
</style>