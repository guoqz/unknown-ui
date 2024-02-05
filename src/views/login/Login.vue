<template>
    <div>
        <el-card class="login-form-layout">
            <el-form
                    autocomplete="on"
                    :model="loginForm"
                    ref="loginForm"
                    label-position="left"
            >
                <h2 class="login-title">登录页面</h2>
                <el-form-item prop="username">
                    <el-input
                            name="username"
                            type="text"
                            v-model="loginForm.username"
                            autocomplete="on"
                            placeholder="请输入用户名"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            name="password"
                            type="text"
                            @keyup.enter.native=""
                            v-model="loginForm.password"
                            autocomplete="on"
                            placeholder="请输入密码"
                    >
                    </el-input>
                </el-form-item>
                <el-form-item style="margin-bottom: 60px">
                    <el-button
                            style="width: 100%"
                            type="primary"
                            :loading="loading"
                            @click.native.prevent="login"
                    >登录
                    </el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>

import {login} from "@/api/login";
import axios from "axios";

export default {
    name: "login",
    components: {},
    data() {
        return {
            loginForm: {
                userType: '',
                username: 'admin',
                password: '123456'
            },
            loading: false,
        };
    },
    methods: {
        login() {
            this.loading = true;
            axios.post('http://localhost:8500/auth/login', {
                username: this.loginForm.username,
                password: this.loginForm.password
            }).then(response => {
                this.loading = false;
                console.log('ok', response.data)
                let code = response.data.code;
                if (code === 200) {
                    this.$router.push({
                        path: '/',
                        query: {data: response.data.data}
                    });
                }
            }, error => {
                this.loading = false;
                console.log('错误', error.message)
            }).catch(() => {
                this.loading = false;
            });
        },
    }
};
</script>

<style scoped>
.login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409eff;
}

.login-title {
    text-align: center;
}


</style>