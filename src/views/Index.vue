<template>
    <div class="index" :style="{width: fullWidth+'px', height:fullHeight+'px'}">
        <div class="img_box" :style="{width: fullWidth+'px'}">
            <div>
                <img alt="Vue logo" src="../assets/logo.png">
                <h1>welcome! {{ msg }}</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'index',

    // 这种方式也可以
    // data() {
    //     return {
    //         msg: this.$route.query.data
    //     };
    // },

    data() {
        return {
            msg: '',
            //保存数据，实现动态渲染
            //注意：这里没有带‘px’单位，在上面添加动态样式时，需要加上px单位！！！
            fullWidth: document.documentElement.clientWidth,
            fullHeight: document.documentElement.clientHeight
        };
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        if (this.$route.query.data != null) {
            this.msg = this.$route.query.data
        } else {
            this.msg = '[visitor]'
        }
    },

    methods: {
        //定义数据获取方法
        handleResize() {
            this.fullWidth = document.documentElement.clientWidth
            this.fullHeight = document.documentElement.clientHeight
        }
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize)
    }

}
</script>

//样式实现
<style lang="less" scoped>
.index {
  //固定外层盒子，不受其他盒子影响
  //放在最底层
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;

  .img_box {
    //这里外层盒子已经固定定位了，其实可以不加定位
    position: absolute;
    background-image: url(../assets/bg03.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    //保证盒子始终在窗口中心
    background-position: center center;
    //避免窗口周围留白
    width: 101%;
    height: 101%;
  }
}

</style>
