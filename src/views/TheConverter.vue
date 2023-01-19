<template>
    <div class="container converter">
        <div class="converter-wrapper">
            <div class="converter-content converter-content__left">
                <ConvertItem @current="currency.coinConvertFrom =  $event" :current-data="currency.coinConvertFrom"/>
                <div class="converter-value">
                    <input type="number" placeholder="100000" v-model="val1" @change="convert">
                </div>
            </div>
            <div class="converter-reverse" @click="reverse">
                <img src="@/assets/img/transfer.svg" class="onverter-reverse__img" alt="">
            </div>
            <div class="converter-content converter-content__right">
                <ConvertItem @current="currency.coinConvertTo =  $event" :current-data="currency.coinConvertTo"/>
                <div class="converter-value">
                    <input type="number" placeholder="100000" v-model="val2" readonly>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import { ref, onMounted, computed } from 'vue'
import { useCurrencyStore } from '@/stores/index'
import ConvertItem from '@/components/ConvertItem.vue'
export default {
    components: {
        ConvertItem
    },
    setup() {
        const currency = useCurrencyStore()
        const val1 = ref(0);
        const val2 = ref(0);

        onMounted(async () => {
            currency.getCurrency()
        })
        const coinList = computed(() => {
            return currency.coin_list
        })
        
     

        const reverse = () => {
            let val3 = val1.value
            val1.value = val2.value
            val2.value = val3

            let curval3 = currency.coinConvertFrom
            currency.coinConvertFrom = currency.coinConvertTo
            currency.coinConvertTo = curval3
            convert()
        }
        const convert = () => {
            val2.value = (val1.value * currency.coinConvertFrom?.Value / currency.coinConvertFrom?.Nominal) / currency.coinConvertTo?.Value * currency.coinConvertTo?.Nominal
        }
        return { val1, val2, reverse, coinList, convert, currency }
    }
}
</script>
<style lang="scss">
.converter {
    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 500px;
    }

    &-reverse {
        max-width: 50px;
        width: 100%;
        cursor: pointer;
    }
    &-content {
        max-width: 350px;
        width: 100%;
        background: rgb(248, 248, 248);
        padding: 40px 20px;
        border-radius: 20px;
    }
    &-value {
        width: 100%;

        input {
            width: 100%;
            padding: 10px;
            border-radius: 10px;
        }
    }
}
</style>