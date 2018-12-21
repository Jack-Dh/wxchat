<template>

    <div style="height: 100%">
        <router-view></router-view>

        <!--底部菜单-->
        <div class="bottMenu">
<<<<<<< HEAD
            <div @click="$router.push('/Home'),selected('主页')" :class="{active :active=='主页'}">
                <i style="font-size: 1.6rem;" class="iconfont icon-xiatubiao--copy"></i>
                <div class="menufont">主页</div>
            </div>
            <div @click="$router.push('/ctiList'),selected('活动')" :class="{active :active=='活动'}">
                <i style="font-size: 1.6rem;"  class="iconfont icon-huodong"></i>
                <div class="menufont">活动</div>
            </div>
            <div @click="$router.push('/MyctiList'),selected('我的')" :class="{active :active=='我的'}">
                <i style="font-size: 1.6rem"  class="iconfont icon-wode"></i>
                <div class="menufont">我的</div>
=======
            <div @click="$router.push('/Home')">
                <i style="font-size: 1.6rem;" class="iconfont icon-xiatubiao--copy"></i>
                <div>主页</div>
            </div>
            <div @click="$router.push('/ctiList')">
                <i style="font-size: 1.6rem;"  class="iconfont icon-huodong"></i>
                <div>活动</div>
            </div>
            <div @click="$router.push('/MyctiList')">
                <i style="font-size: 1.6rem"  class="iconfont icon-wode"></i>
                <div>我的</div>
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
            </div>

        </div>

    </div>

</template>

<script>
    export default {
<<<<<<< HEAD
        name: "framework",
        data(){
            return{
                active:''
            }
        },
        methods:{
            selected(active){
               this.active=active
                console.log(active)
            }
        },
        created:function () {
            this.active='主页' //设置主页默认高亮显示

        }
=======
        name: "framework"
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
    }
</script>

<style scoped>
<<<<<<< HEAD
    .active {

        color: #00aaee;
    }
    .bottMenu {
        border-top: 1px solid #f8f8f8;
        width: 100%;
        height: 10%;
=======
    .bottMenu {
        border-top: 1px solid #f8f8f8;
        width: 100%;
        height: 12%;
>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
        position: fixed;
        margin: 0;
        padding: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        font-size: 0.25rem;
        background-color: #ffffff;
        z-index: 9999;
        text-align: center;
<<<<<<< HEAD
    }
    .menufont{
        font-size: 1rem;
=======


>>>>>>> c75b95803d391ab0c19be27eed7e4577727d8ad0
    }
    /*.bottMenu*/
    .bottMenu p{margin-top: -2%}
</style>