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
<<<<<<< HEAD
                <van-tab title="已通过"></van-tab>
                <van-tab title="已拒绝"></van-tab>
            </van-tabs>
        </div>



        <!--用户订单状态,01:待审核 02:审核通过 03:审核拒绝 为空:all-->
        <div v-for="item in useractivity" style="display: flex;justify-content: space-between">
            <van-cell is-link v-if="tag" :to="{name:'ParticipateDetails',params:{id:item.id}}">
                <template slot="title">
                    <span class="custom-text" style="display: block">{{item.activityName}}</span>
                    <van-tag type="danger" mark>{{item.state=='01'?'待审核':item.state=='02'?'审核通过':'已拒绝'}}</van-tag>
                </template>
            </van-cell>


            <van-cell is-link v-if="notag" title="暂无数据"></van-cell>

        </div>



=======
                <van-tab title="已拒绝"></van-tab>
                <van-tab title="已通过"></van-tab>
            </van-tabs>
        </div>
{{index}}
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
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
<<<<<<< HEAD
                useractivity:[],//当前用户参加的所有活动
                tag:'',//是否显示标签
                notag:''//暂无数据
            }
        },
        methods: {


            userList(id,userstate){
                console.log(this.user.id)

                this.useractivity=[]

                this.$axios.get(this.$store.state.useractivity,{
                    params:{id:id,state:userstate}
                }).then(res=>{
                    console.log(res.data)
                    if (res.data.rs.length!=0){
                        this.useractivity=res.data.rs
                        this.tag=true
                        this.notag=false
                    } else {
                        let data={activityName:'暂无数据'}
                        this.useractivity.push(data)
                        this.tag=false
                        this.notag=true
                    }


                })
            },
=======
            }
        },
        methods: {
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
            switchCti(index, title) {
                console.log(index)
                console.log(title)
                this.index=index
<<<<<<< HEAD

                // 用户订单状态,01:待审核 02:审核通过 03:审核拒绝 为空:all
                this.userList(this.user.id,index=='0'?"":"0"+index)
=======
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
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
<<<<<<< HEAD


            //用户信息
            this.$axios.get(this.$store.state.user).then(res=>{
                this.user=res.data.rs
                this.userList(res.data.rs.id)
                console.log(this.user)
            })
            //查询该用户所有信息


=======
            //用户信息
            this.$axios.get(this.$store.state.user).then(res=>{
                this.user=res.data.rs
                console.log(this.user)
            })
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
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