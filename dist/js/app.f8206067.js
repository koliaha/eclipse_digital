(function(){"use strict";var e={9415:function(e,n,r){var t=r(9242),o=r(3396);function c(e,n){const r=(0,o.up)("router-link"),t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(r,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Список валют")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(r,{to:"/converter"},{default:(0,o.w5)((()=>[(0,o.Uk)("Конвертер")])),_:1})]),(0,o.Wm)(t)],64)}var i=r(89);const a={},l=(0,i.Z)(a,[["render",c]]);var u=l,s=r(2483);const v={class:"home container"};function d(e,n,r,t,c,i){const a=(0,o.up)("CoinList");return(0,o.wg)(),(0,o.iD)("div",v,[(0,o.Wm)(a)])}var p=r(7139);const C={class:"coinlist-wrapper"},f={class:"coinlist-filter"},m=(0,o._)("option",{value:null},"Все",-1),w=["value"],_={key:0},h={key:1};function y(e,n,r,c,i,a){const l=(0,o.up)("CoinPare");return(0,o.wg)(),(0,o.iD)("div",C,[(0,o._)("div",f,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>c.currentCoin=e),class:"converter-filter"},[m,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.currency.coin_list,((e,n)=>((0,o.wg)(),(0,o.iD)("option",{key:n,value:e},(0,p.zw)(e?.CharCode)+" - "+(0,p.zw)(e.Name),9,w)))),128))],512),[[t.bM,c.currentCoin]]),(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>c.searchFilter=e),placeholder:"R01010",class:"converter-filter"},null,512),[[t.nr,c.searchFilter]])]),c.coinList.length>0?((0,o.wg)(),(0,o.iD)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.coinList,((e,n)=>((0,o.wg)(),(0,o.j4)(l,{key:n,data:e,"pare-list":c.filterList(e)},null,8,["data","pare-list"])))),128))])):((0,o.wg)(),(0,o.iD)("div",h," Список пуст "))])}const g={class:"coinlist-wrapper"};function b(e,n,r,t,c,i){const a=(0,o.up)("CoinItem");return(0,o.wg)(),(0,o.iD)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.pareList,((e,n)=>((0,o.wg)(),(0,o.j4)(a,{key:n,data:e,"current-coin":r.data},null,8,["data","current-coin"])))),128))])}const D={class:"coinitem-wrapper"},k={class:"coinitem-currency"},F={class:"arrow__price"},L={class:"coinitem-currency"},V={class:"arrow__price"};function H(e,n,r,t,c,i){return(0,o.wg)(),(0,o.iD)("div",D,[(0,o.Uk)(" ID "+(0,p.zw)(r.currentCoin.ID)+" ",1),(0,o._)("h3",null,(0,p.zw)(r.currentCoin.CharCode)+"/"+(0,p.zw)(r.data.CharCode),1),(0,o._)("div",k,[(0,o._)("p",null,(0,p.zw)(`1 ${r.currentCoin.CharCode} - ${t.convert(r.currentCoin,r.data).toFixed(4)||1} ${r.data.CharCode}`),1),(0,o._)("div",F,[(0,o._)("i",{class:(0,p.C_)(["arrow",t.checkPrice(r.currentCoin)?"up":"down"])},null,2)])]),(0,o._)("div",L,[(0,o._)("p",null,(0,p.zw)(`1 ${r.data.CharCode} - ${t.convertReverse(r.data,r.currentCoin).toFixed(4)||1} ${r.currentCoin.CharCode}`),1),(0,o._)("div",V,[(0,o._)("i",{class:(0,p.C_)(["arrow",t.checkPrice(r.data)?"up":"down"])},null,2)])])])}var O={name:"CoinList",props:{data:{default:{}},currentCoin:{default:{}}},setup(){const e=(e,n)=>e.Value/e.Nominal/n.Value,n=(e,n)=>e.Value*n.Nominal/n.Value,r=e=>{const n=e.Value-e.Previous;return n>=0};return{convert:e,convertReverse:n,checkPrice:r}}};const P=(0,i.Z)(O,[["render",H]]);var j=P,I={name:"CoinPare",props:{data:{default:{}},pareList:{default:[]}},components:{CoinItem:j},setup(){}};const z=(0,i.Z)(I,[["render",b]]);var N=z,U=r(4870),T=(r(7658),r(2578)),Y=r(6943);const x=(0,T.Q_)("currency",{state:()=>({coin_list:[],rub:{CharCode:"RUB",Name:"Российский рубль",Nominal:1,Value:1},coinConvertFrom:null,coinConvertTo:null}),actions:{async getCurrency(){this.coin_list=await Y.Z.get("https://www.cbr-xml-daily.ru/daily_json.js").then((e=>{const n=e.data?.Valute,r=Object.keys(n).map((e=>n[e]));return r.push(this.rub),r}))}}});var Z={name:"CoinList",props:{},components:{CoinPare:N},setup(){const e=(0,U.iH)(null),n=(0,U.iH)(""),r=x();(0,o.bv)((()=>{r.getCurrency()}));const t=(0,o.Fl)((()=>n.value.length?r.coin_list.filter((e=>e?.ID?.toLowerCase().includes(n.value.toLowerCase()))):null!=e.value?r.coin_list.filter((n=>n?.ID==e.value?.ID)):r.coin_list)),c=e=>r.coin_list.filter((n=>e?.ID!=n?.ID));return(0,o.YP)((()=>e.value),(n=>{e.value=n})),{coinList:t,filterList:c,currency:r,currentCoin:e,searchFilter:n}}};const $=(0,i.Z)(Z,[["render",y]]);var W=$,K={name:"HomeView",components:{CoinList:W}};const R=(0,i.Z)(K,[["render",d]]);var M=R,B=r.p+"img/transfer.172c5171.svg";const E={class:"container converter"},Q={class:"converter-wrapper"},q={class:"converter-content converter-content__left"},A={class:"converter-value"},G=(0,o._)("img",{src:B,class:"onverter-reverse__img",alt:""},null,-1),J=[G],S={class:"converter-content converter-content__right"},X={class:"converter-value"};function ee(e,n,r,c,i,a){const l=(0,o.up)("ConvertItem");return(0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("div",Q,[(0,o._)("div",q,[(0,o.Wm)(l,{onCurrent:n[0]||(n[0]=e=>c.currency.coinConvertFrom=e),"current-data":c.currency.coinConvertFrom},null,8,["current-data"]),(0,o._)("div",A,[(0,o.wy)((0,o._)("input",{type:"number",placeholder:"100000","onUpdate:modelValue":n[1]||(n[1]=e=>c.val1=e),onChange:n[2]||(n[2]=(...e)=>c.convert&&c.convert(...e))},null,544),[[t.nr,c.val1]])])]),(0,o._)("div",{class:"converter-reverse",onClick:n[3]||(n[3]=(...e)=>c.reverse&&c.reverse(...e))},J),(0,o._)("div",S,[(0,o.Wm)(l,{onCurrent:n[4]||(n[4]=e=>c.currency.coinConvertTo=e),"current-data":c.currency.coinConvertTo},null,8,["current-data"]),(0,o._)("div",X,[(0,o.wy)((0,o._)("input",{type:"number",placeholder:"100000","onUpdate:modelValue":n[5]||(n[5]=e=>c.val2=e),readonly:""},null,512),[[t.nr,c.val2]])])])])])}const ne={class:"converter-coins"},re=["value"],te={class:"converter-value"},oe={for:""};function ce(e,n,r,c,i,a){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",ne,[(0,o.wy)((0,o._)("select",{"onUpdate:modelValue":n[0]||(n[0]=e=>c.currentCoin=e),class:"converter-filter"},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.coinList,((e,n)=>((0,o.wg)(),(0,o.iD)("option",{key:n,value:e},(0,p.zw)(e?.CharCode)+" - "+(0,p.zw)(e.Name),9,re)))),128))],512),[[t.bM,c.currentCoin]])]),(0,o._)("div",te,[(0,o._)("label",oe,(0,p.zw)(`1 ${c.currentCoin?.Name} = ${c.currentCoin?.Value/c.currentCoin?.Nominal}₽ `),1)])],64)}var ie={emits:["current"],props:{currentData:{default:null}},setup(e,{emit:n}){const r=(0,U.iH)(0),t=x(),c=(0,U.iH)(t.rub),i=e=>{c.value=e,n("current",c.value)},a=(0,o.Fl)((()=>t.coin_list));return(0,o.YP)((()=>e.currentData),(e=>{e&&(c.value=e)})),(0,o.YP)((()=>c.value),(e=>{c.value=e,n("current",c.value)})),{coinList:a,val:r,chooseCoin:i,currentCoin:c}}};const ae=(0,i.Z)(ie,[["render",ce]]);var le=ae,ue={components:{ConvertItem:le},setup(){const e=x(),n=(0,U.iH)(0),r=(0,U.iH)(0);(0,o.bv)((async()=>{e.getCurrency()}));const t=(0,o.Fl)((()=>e.coin_list)),c=()=>{let t=n.value;n.value=r.value,r.value=t;let o=e.coinConvertFrom;e.coinConvertFrom=e.coinConvertTo,e.coinConvertTo=o,i()},i=()=>{r.value=n.value*e.coinConvertFrom?.Value/e.coinConvertFrom?.Nominal/e.coinConvertTo?.Value*e.coinConvertTo?.Nominal};return{val1:n,val2:r,reverse:c,coinList:t,convert:i,currency:e}}};const se=(0,i.Z)(ue,[["render",ee]]);var ve=se;const de=[{path:"/",name:"home",component:M},{path:"/converter",name:"converter",component:ve}],pe=(0,s.p7)({history:(0,s.r5)(),routes:de});var Ce=pe;const fe=(0,T.WB)();(0,t.ri)(u).use(Ce).use(fe).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var c=n[t]={exports:{}};return e[t](c,c.exports,r),c.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,c){if(!t){var i=1/0;for(s=0;s<e.length;s++){t=e[s][0],o=e[s][1],c=e[s][2];for(var a=!0,l=0;l<t.length;l++)(!1&c||i>=c)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(a=!1,c<i&&(i=c));if(a){e.splice(s--,1);var u=o();void 0!==u&&(n=u)}}return n}c=c||0;for(var s=e.length;s>0&&e[s-1][2]>c;s--)e[s]=e[s-1];e[s]=[t,o,c]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){r.p=""}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,c,i=t[0],a=t[1],l=t[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var s=l(r)}for(n&&n(t);u<i.length;u++)c=i[u],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(s)},t=self["webpackChunkdigital"]=self["webpackChunkdigital"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(9415)}));t=r.O(t)})();
//# sourceMappingURL=app.f8206067.js.map