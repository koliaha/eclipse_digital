<template>
    <div class="container converter">
        <div class="converter-wrapper">
            <div class="converter-content converter-content__left">
                <div class="converter-coins">
                    <div class="converter-coin" :class="i?.CharCode == currentCoin?.CharCode ? 'active_coin' : ''"
                        v-for="(i, index) in coinList" :key="index" @click="chooseCoin(i)">{{
                            i?.CharCode
                        }}</div>
                </div>
                <div class="converter-value">
                    <label for="">
                         {{`1 ${currentCoin?.Name} = ${currentCoin?.Value / currentCoin?.Nominal}₽ `}}
                    </label>
                    <input type="number" placeholder="100000" v-model="val1" @change="convert">
                </div>
            </div>
            <div class="converter-reverse" @click="reverse">
                <img src="@/assets/img/transfer.svg" class="onverter-reverse__img" alt="">
            </div>
            <div class="converter-content converter-content__right">
                {{ currentConvertCoin }}
                <div class="converter-coins">
                    <div class="converter-coin"
                        :class="i?.CharCode == currentConvertCoin?.CharCode ? 'active_coin' : ''"
                        v-for="(i, index) in coinList" :key="index" @click="chooseConvertCoin(i)">{{
                            i?.CharCode
                        }}</div>
                </div>
                <div class="converter-value">
                    <input type="number" placeholder="100000" v-model="val2" readonly>
                </div>
            </div>
        </div>
    </div>
</template>
<script >
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'
export default {
    setup() {
        const val1 = ref(0);
        const val2 = ref(0);
        const rub = {
            CharCode: "RUB",
            Name: "Российский рубль",
            Nominal: 1,
            Value: 1,
        }
        const coin_list = ref([])
        const currentCoin = ref(rub)
        const currentConvertCoin = ref(rub)

        onMounted(async () => {
            coin_list.value = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then((el) => {
                const res = el.data?.Valute
                const result = Object.keys(res).map((key) => res[key]);
                result.push(rub)
                return result
            })
        })
        const coinList = computed(() => {
            return coin_list.value
        })
        const chooseCoin = (data) => {
            currentCoin.value = data
        }
        const chooseConvertCoin = (data) => {
            currentConvertCoin.value = data
        }

        const reverse = () => {
            let val3 = val1.value
            val1.value = val2.value
            val2.value = val3

            let curval3 = currentCoin.value
            currentCoin.value = currentConvertCoin.value
            currentConvertCoin.value = curval3
        }
        const convert = () => {
            val2.value = val1.value * currentCoin.value?.Value / currentCoin.value?.Nominal / currentConvertCoin.value?.Value
        }
        return { val1, val2, reverse, coinList, currentCoin, chooseCoin, chooseConvertCoin, currentConvertCoin, convert }
    }
}
</script>
<style lang="scss">
.converter {
    &-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &-content {
        max-width: 400px;
        width: 100%;
    }

    &-reverse {
        max-width: 50px;
        width: 100%;
        cursor: pointer;
    }

    &-coins {
        display: flex;
        margin: 10px;
        flex-wrap: wrap;
    }

    &-coin {
        margin: 5px;
        cursor: pointer;
        transition: 0.1s opacity;

        &:hover {
            opacity: 0.7;
        }

        &.active_coin {
            color: rgb(0, 179, 119);
        }
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