// 封装购物车模块
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    // 1、定义state - cartList
    const cartList = ref([])

    // 2、定义action-addCart
    const addCart = (goods) => {
        // 3.添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item)=>item.skuId===goods.skuId)
        if(item){
            item.count++
        }else{
            cartList.value.push(goods)
        }
    }
    return {
        cartList,
        addCart
    }
},{
    persist: true,
  })