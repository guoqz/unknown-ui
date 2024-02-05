const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    // devServer: {
    //     proxy: {
    //         '/auth': {
    //             target: 'http://localhost:8500/auth/',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '/auth': ''
    //             }
    //         }
    //     }
    // }

})


