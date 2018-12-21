<template>
<<<<<<< HEAD
    <div class="ctiListMian" id="div">
=======
    <div class="ctiListMian">
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0

        <div class="user">
            <img :src="user.headimgurl">
            <span>{{user.nickname}}</span>
        </div>
<<<<<<< HEAD
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">

            <div class="ctiList">
                <!--<van-list-->
                <!--v-model="loading"-->
                <!--:finished="finished"-->
                <!--finished-text="没有更多了"-->
                <!--@load="onLoad"-->
                <!--&gt;-->
                <!--<div v-for="(item,index) in cliList" :key="index">-->
                <!--<van-cell style="margin: 0;padding: 2%" :to="{name:'Eventdetails',params:{id:item.id}}">-->
                <!--<template slot="title">-->
                <!--<div style="display: flex;align-items: center;justify-content: space-between">-->
                <!--<img class="ctiListImg" :src="'http://'+item.shopIcon">-->
                <!--<span style="margin-left: 2%">{{item.activityName}}</span>-->
                <!--<van-button size="small" round type="danger">立即参与</van-button>-->
                <!--</div>-->

                <!--</template>-->
                <!--</van-cell>-->
                <!--</div>-->
                <!--</van-list>-->


                <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        :immediate-check="false"
                        @load="onLoad"
                >
                    <van-cell
                            v-for="item in cliList"
                            :to="{name:'Eventdetails',params:{id:item.id}}"
                    >
                        <!--<span>{{item}}</span>-->


                        <template slot="title">
                            <div style="display: flex;align-items: center;justify-content: space-between">
                                <img class="ctiListImg" :src="'http://'+item.shopIcon">
                                <span style="margin-left: 2%">{{item.activityName}}</span>
                                <van-button size="small" round type="danger">立即参与</van-button>
                            </div>

                        </template>



                    </van-cell>
                </van-list>


            </div>

        </van-pull-refresh>


=======


        <div class="ctiList">

            <div v-for="(item,index) in cliList" :key="index"
                 style="display: flex;align-items: center;justify-content: space-between;margin-top: 2%;padding: 2%">
                <div style="width: 60%;display: flex;align-items: center;">
                    <img class="ctiListImg" :src="'http://'+item.shopIcon">
                    <span style="margin-left: 2%">{{item.activityName}}</span>
                </div>

                <van-button size="small" round type="danger" @click="participate(item.id)">
                    立即参与
                </van-button>


            </div>


            <!--根据活动id查到活动详情-->
            <van-popup
                    style="width: 100%;height: 100%;background-color: #f8f8f8"
                    v-model="show"
                    position="right"
                    :overlay="true"
            >
                <div>
                    <div class="shop">
                        <img :src="'http://'+cti.shopIcon">
                        <span>{{cti.shop}}</span>
                    </div>

                    <div class="Ctidetails">
                        <ul>
                            <li>
                                <span>活动时间：</span>
                                <span class="information">{{cti.startTime}}-{{cti.endTime}}</span>
                            </li>
                            <li>
                                <span>活动店铺：</span>
                                <span class="information">{{cti.shop}}</span>
                            </li>
                            <li>
                                <span>面向粉丝：</span>
                                <span class="information">{{cti.participationCondition}}</span>
                            </li>
                            <li>
                                <span>参与条件：</span>

                                <span class="information">{{cti.participationCondition}}</span>
                            </li>
                            <li>
                                <span>活动奖励：</span>
                                <span class="information">{{cti.award}}</span>
                            </li>
                            <li>
                                <span style="font-size: 0.3rem">若领取奖励过程中遇到问题,请及时联系公众号客服</span>
                            </li>
                            <li>
                                <span style="font-size: 0.3rem">最终解释权归本公众号所有</span>
                            </li>
                        </ul>

                        <van-button
                                type="primary"
                                style="width: 96%;margin: 2%;"
                                @click="award(cti.id)">
                            去领取奖励
                        </van-button>

                    </div>


                </div>


            </van-popup>

            <van-popup
                    style="width: 100%;height: 100%;background-color: #f8f8f8"
                    v-model="awardPage"
                    position="right"
                    :overlay="true"
            >

                <div>
                    <van-cell-group>
                        <van-field
                                v-model="evaluation"
                                type="textarea"
                                required
                                clearable
                                placeholder="说说本次活动与不足的地方吧"

                        />


                        <van-field
                                v-model="taobaoNum"
                                type="number"
                                required
                                clearable
                                placeholder="淘宝订单编号"
                                :error-message="error"
                                @blur="Theinput"

                        />
                    </van-cell-group>


                    <van-uploader
                            :after-read="onRead"
                    >
                        <img src="../assets/img/hont.png">
                    </van-uploader>


                    <van-button style="margin: 2%;width: 96%" size="large" type="primary" @click="submit">提交
                    </van-button>
                </div>

                <van-dialog
                        v-model="alertData"
                        confirm-button-text="确定">
                    <p style="text-align: center">{{Messag}}</p>

                </van-dialog>
            </van-popup>

        </div>
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
    </div>

</template>

<script>
<<<<<<< HEAD

    export default {

        name: "ctiList",
        data() {
            return {
                user: [],//用户信息
                cliList: [],//活动列表信息
                cti: [],//单条活动信息
                show: false,
                awardid: '',//单条活动id
                count: 0,//总条目数
                list: [],
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
                page: 0,//当前页码
                isLoading: false,
                a:0,
            }
        },
        methods: {
            //下拉刷新
            onRefresh() {
                setTimeout(() => {


                    //活动列表
                    this.$axios.get(this.$store.state.ctiList, {
                        params: {size: 10}
                    }).then(res => {
                        console.log(res.data)
                        this.cliList = res.data.data
                        this.count = res.data.count
                        this.page = res.data.page
                        if (res.data.code==0){
                            this.$toast('刷新成功');
                            this.isLoading = false;
                        }


                    })




                }, 500);
            },
            //上滑加载更多
            onLoad() {
                if (this.cliList.length<this.count){
                    //活动列表
                    this.$axios.get(this.$store.state.ctiList, {
                        params: {size: 10,page:++this.page}
                    }).then(res => {
                        this.cliList =this.cliList.concat(res.data.data)
                        if (this.cliList.length>=this.count) {
                            this.finished=true
                            this.loading=false
                        }
                    })
                }else {
                    this.finished=true
                    this.loading=false
=======
    export default {
        name: "ctiList",
        data() {
            return {
                user:[],//用户信息
                cliList: [],//活动列表信息
                cti: [],//单条活动信息
                show: false,
                awardPage: false,//参与页面
                evaluation: '',//用户评价
                taobaoNum: '',//淘宝订单编号
                error: '',//淘宝编号错误信息
                awardid: '',//单条活动id
                alertData: false,//消息弹框
                Messag:'',//提示消息

            }
        },
        methods: {
            participate(ctiid) {
                this.$cookies.set('ctiid', ctiid) //设置活动id
                this.show = true
                //this.$router.push()//设置页面跳转

                //查询活动详情
                this.$axios.get(this.$store.state.activity, {
                    params: {'id': ctiid}
                }).then(res => {
                    this.cti = res.data.rs
                    console.log(this.cti)
                })

            },

            award(awardid) {
                this.awardid = awardid
                this.awardPage = true

            },

            Theinput() {
                if (Number.isInteger(Number.parseInt(this.taobaoNum)) == false) {
                    this.error = '淘宝订单编号格式不正确'
                } else {
                    this.error = ''
                }

            },
            //上传图片
            onRead(file) {
                console.log(file)
                // this.$axios.post('http://jiajiachuang.cn/junran/manage/keUpload')
            },
            //用户提交活动
            submit() {
                if (this.evaluation == '' || this.taobaoNum == ''||this.error=='淘宝订单编号格式不正确') {
                    this.alertData = true
                    this.Messag='所提交的信息不正确！'
                }else {
                    this.alertData = true
                    this.Messag='参与成功！'
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
                }


            }
<<<<<<< HEAD
        },


        created: function () {
            //用户信息
            this.$axios.get(this.$store.state.user).then(res => {
                this.user = res.data.rs
=======


        },
        created: function () {
                //用户信息
            this.$axios.get(this.$store.state.user).then(res=>{
                this.user=res.data.rs
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
                console.log(this.user)
            })


            //活动列表
<<<<<<< HEAD
            this.$axios.get(this.$store.state.ctiList, {
                params: {size: 10}
            }).then(res => {
                console.log(res.data)
                this.cliList = res.data.data
                this.count = res.data.count
                this.page = res.data.page
=======
            this.$axios.get(this.$store.state.ctiList).then(res => {
                console.log(res.data)
                this.cliList = res.data.data
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
            })

        }
    }
<<<<<<< HEAD

</script>

<style scoped>
=======
</script>

<style scoped>
    .Ctidetails{
        background-color: #ffffff;
        margin-top: 2%;
    }
    .Ctidetails ul {
        padding: 2%;
    }

   .information{
        text-indent: 1em;
        font-size: 0.8rem;
       display: block;
       line-height: 2em;

    }
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0

    .ctiListMian {
        width: 100%;
        height: 100vh;
        background-color: #f8f8f8
    }

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

    .shop {
        width: 100%;
        background-color: #ffffff;
        display: flex;;
        justify-content: flex-start;
        align-items: center;
    }

    .shop img {
        width: 60px;
        height: 60px;
        margin: 2%;
        border-radius: 0%;

    }

    .ctiList {
        width: 100%;
        background-color: #ffffff;
<<<<<<< HEAD
        margin-top: 3%;
        margin-bottom: 20%;

=======
        margin-top: 3%
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
    }

    .ctiListImg {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
</style>