import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://test.codeedu.com.cn/wangyiyun',
        timeout: 30000
    })
    

    // instance(config).then(res => {
    //     success(res)
    // })
    return instance(config)
}