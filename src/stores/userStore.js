// 管理用户数据相关
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore} from './cartStore'
import {mergeCartAPI} from '@/apis/cart'

export const useUserStore = defineStore('user', () => {
    const cartStore = useCartStore()
    // 1、定义管理用户数据的state
    const userInfo = ref({})
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res.result
        await mergeCartAPI(cartStore.cartList.map((item)=>{
            return {
                skuId:item.skuId,
                count:item.count,
                selected:item.selected
            }
        }))
        cartStore.updataNewList()
    }
    // 退出是清除用户信息
    const clearUserInfo = () => {
        userInfo.value = {}
        // 执行清除购物车的action
        cartStore.clearCart()

    }

    // 3.以对象的格式把state和action return出去
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
        persist: true,
    }
    )