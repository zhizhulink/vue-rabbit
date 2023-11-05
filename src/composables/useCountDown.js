// 封装倒计时逻辑函数
import dayjs from 'dayjs'
import { ref, computed, onUnmounted } from 'vue'

export const useCountDown = () => {
    // 响应式数据
    let timer = null
    const time = ref(0)
    // 格式化时间为 xx分xx秒
    const formatTime = computed(() => dayjs.unix(time.value).format('mm分ss秒'))
    // 2、开启倒计时的函数
    const start = (currentTime) => {
        // 开始倒计时的逻辑
        // 核心逻辑的编写
        time.value = currentTime
        timer = setInterval(() => {
            time.value--
        }, 1000)
    }
    // 组件销毁时清除定时器
    onUnmounted(() => {
        timer && clearInterval(timer)
    })
    return {
        formatTime,
        start
    }
}
