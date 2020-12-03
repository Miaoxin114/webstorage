import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 30000
    })
    

    // instance(config).then(res => {
    //     success(res)
    // })
    return instance(config)
}