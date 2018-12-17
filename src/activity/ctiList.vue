<template>
    <div class="ctiListMian">

        <div class="user">
            <img :src="user.headimgurl">
            <span>{{user.nickname}}</span>
        </div>


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
                                ref="upImg"
                        >
                            <img style="width: 100px;height: 100px;margin: 5%" src="../assets/img/hont.png" ref="showImg">
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
    </div>

</template>

<script>
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
                ImgUrl:'',//上传图片返回的地址


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
                // console.log(file)
                this.$refs.showImg.src=file.content
                let fromDarta=new FormData()
                fromDarta.append('imgFile',file.file)
                this.$axios.post(this.$store.state.Upload,fromDarta).then(res=>{
                   this.ImgUrl=res.data.url
                })


            },
            //用户提交活动
            submit() {
                if (this.evaluation == '' || this.taobaoNum == ''||this.error=='淘宝订单编号格式不正确') {
                    this.alertData = true
                    this.Messag='所提交的信息不正确！'
                }else {
                    this.$axios.post(this.$store.state.upsert,{
                        activityId:this.awardid,
                        comment:this.evaluation,
                        img:this.ImgUrl,
                        taobaoOrder:this.taobaoNum
                    }).then(res=>{
                        this.alertData = true
                        this.Messag='参与成功！'
                    }).catch(err=>{
                        console.log(err)
                    })

                }


            }


        },
        created: function () {
                //用户信息
            this.$axios.get(this.$store.state.user).then(res=>{
                this.user=res.data.rs
                console.log(this.user)
            })


            //活动列表
            this.$axios.get(this.$store.state.ctiList).then(res => {
                console.log(res.data)
                this.cliList = res.data.data
            })

        }
    }
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
        margin-top: 3%
    }

    .ctiListImg {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
</style>