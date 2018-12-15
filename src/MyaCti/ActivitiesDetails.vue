<template>
    <div class="ActivitiesDetails">
        <div class="user">
            <img :src="user.headimgurl">
            <span>{{user.nickname}}</span>
        </div>
        <div>
            <van-tabs v-model="active" @click="switchCti">
                <van-tab title="全部"></van-tab>
                <van-tab title="待审核"></van-tab>
                <van-tab title="已拒绝"></van-tab>
                <van-tab title="已通过"></van-tab>
            </van-tabs>
        </div>
{{index}}
    </div>
</template>
<script>
    export default {
        name: "ActivitiesDetails",
        data() {
            return {
                active: 0,
                index:'',
                user:[],//用户信息
            }
        },
        methods: {
            switchCti(index, title) {
                console.log(index)
                console.log(title)
                this.index=index
            },
            // test(){
            //     this.$axios.get('/xxx/Api/Mobile/Quality/QualityInfoRankBySID.aspx',{
            //
            //         params:{sID:'17201240'}
            //     }).then(res=>{
            //         console.log(res.data)
            //     }).catch(err=>{
            //         console.log(err)
            //     })
            // }
        },
        created:function () {
            //
            // setInterval(this.test,100)
            //用户信息
            this.$axios.get(this.$store.state.user).then(res=>{
                this.user=res.data.rs
                console.log(this.user)
            })
        }
    }
</script>

<style scoped>
    .user {
        width: 100%;
        background-color: #ffffff;
        display: flex;;
        justify-content: flex-start;
        align-items: center;
    }
    .user img {
        width: 60px;
        height: 60px;
        margin: 2%;

    }
</style>