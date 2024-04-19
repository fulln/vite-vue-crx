<script>

import { ref } from 'vue'
import { apiReqs } from '@/api'

export default {
    setup() {

        const text = ref('')
        const isSuccess = ref(false)  // 新增 isSuccess 引用
        
        // 提交
        const onSubmit = () => {
            apiReqs.submitByBackground({
                data: {
                    token: Math.random().toString(36).substring(2, 8)
                },
                success: (res) => {
                    text.value = "验证码：" + res.code +" ，去公众号发送验证码获取下载链接"
                    console.log(text.value)
                    isSuccess.value = true
                },
                fail: (res) => {
                    text.value = "请求失败, 请重试"
                },
            })
        }

        return {
            text,
            isSuccess,
            onSubmit,
        };
    }
}

</script>

<template>
    <div class="P-home">
        <h1>关注公众号</h1>
        <img src='./qrcode.png' alt="公众号二维码" />
        <el-button style="width: 100%" @click="onSubmit">提交</el-button>
        <p v-if="isSuccess"> {{ text }} </p> 


    </div>
</template>


<style scoped lang="stylus">
.P-home
    position: absolute
    top: 0
    bottom: 0
    width: 100%
    background: linear-gradient(#f48c8d,#f4c58d)
    h1
        margin-top: 50px
        text-align: center
        color: #fff
        font-size: 40px
</style>