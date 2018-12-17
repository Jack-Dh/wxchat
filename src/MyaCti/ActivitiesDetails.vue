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
                <van-tab title="已通过"></van-tab>
                <van-tab title="已拒绝"></van-tab>
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
                useractivity:[],//当前用户参加的所有活动
            }
        },
        methods: {


            //jiajiachuang.cn\\20181217\\11\\DtBc2vxLuorROR2NtlOG3EYHo6WPfLov.jpg

            userList(id,userstate){
                console.log(this.user.id)
                this.$axios.get(this.$store.state.useractivity,{
                    params:{id:id,state:userstate}
                }).then(res=>{
                    console.log(res.data)
                    this.useractivity=res.data.rs
                    console.log(this.useractivity)
                })
            },
            switchCti(index, title) {
                console.log(index)
                console.log(title)
                this.index=index

                // 用户订单状态,01:待审核 02:审核通过 03:审核拒绝 为空:all
                this.userList(this.user.id,index=='0'?"":"0"+index)
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
                this.userList(res.data.rs.id)
                console.log(this.user)
            })
            //查询该用户所有信息


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