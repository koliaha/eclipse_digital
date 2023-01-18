<template>
  <div class="home">
    <CoinList/>
  </div>
</template>

<script>
// @ is an alias to /src
import CoinList from '@/components/CoinList.vue'

export default {
  name: 'HomeView',
  components: {
    CoinList
  }
}
</script>
