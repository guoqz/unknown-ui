import axios from "axios"; //引入封装好的 axios 请求

//登录接口
export function login(username, password) {
    return axios.post('http://localhost:8500/auth/login', {
        username,
        password
    })
}