import { request } from '../utils/request'

export function getalllist() {
    return request({
        url:'/toplist',
        method: 'get'
    })
}