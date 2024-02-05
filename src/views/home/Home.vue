<template>
    <div class="home">
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary" @click="getTtaList()">获取接口数据</el-button>
            <div>
                <p>{{ nodeList }}</p>
            </div>
            <el-button type="success" @click="loginPage()">登录</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        <br>
        <el-row>
            <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-row>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'home',
    components: {},
    data() {
        return {nodeList: null}
    },
    created() {

    },
    methods: {
        getTtaList() {
            this.axios.get('http://localhost:8200/dateNode/list', {
                params: {
                    pageNum: 1,
                    pageSize: 10,
                    isActive: false
                }
            }).then((req) => {
                console.log(req.data)
                this.nodeList = req.data
            }, error => {
                console.log('错误', error.message)
            })
        },

        loginPage() {
            this.$router.push("/login")
        }

    }
}
</script>
