<template>
    <div class="converter-coins">
        <select v-model="currentCoin" class="converter-select">
            <option v-for="(i, index) in coinList" :key="index" :value="i">{{
                i?.CharCode
            }} - {{ i.Name }}</option>
        </select>

    </div>
    <div class="converter-value">
        <label for="">
            {{`1 ${currentCoin?.Name} = ${currentCoin?.Value /
            currentCoin?.Nominal}₽ `}}
        </label>
    </div>
</template>
<script>
import { useCurrencyStore } from '@/stores/index'
import { ref, computed, watch } from 'vue'
export default {
    emits: ['current'],
    props: {
        currentData: {
            default: null
        }
    },
    setup(props, { emit }) {
        const val = ref(0)
        const currency = useCurrencyStore()
        const currentCoin = ref(currency.rub)
        const chooseCoin = (data) => {
            currentCoin.value = data
            emit('current', currentCoin.value)
        }
        const coinList = computed(() => {
            return currency.coin_list
        })
        watch(() => props.currentData, (val) => {
            if (val) currentCoin.value = val
        });
        watch(() => currentCoin.value, (val) => {
            currentCoin.value = val
            emit('current', currentCoin.value)
        });
        return { coinList, val, chooseCoin, currentCoin }
    }
}
</script>
<style lang="scss">
.converter {
    &-coins {
        display: flex;
        flex-wrap: wrap;
    }
    &-select {
        width: 100%;
        padding: 10px 5px;
        border-radius: 10px;
        margin-bottom: 20px;
    }
}
</style>