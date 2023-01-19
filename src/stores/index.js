import { defineStore } from "pinia";
import axios from "axios";
export const useCurrencyStore = defineStore("currency", {
  state: () => {
    return {
      coin_list: [],
      rub: {
        CharCode: "RUB",
        Name: "Российский рубль",
        Nominal: 1,
        Value: 1,
      },
      coinConvertFrom: null,
      coinConvertTo: null,
    };
  },
  actions: {
    async getCurrency() {
      this.coin_list = await axios
        .get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((el) => {
          const res = el.data?.Valute;
          const result = Object.keys(res).map((key) => res[key]);
          result.push(this.rub);
          return result;
        });
    },
  },
});
