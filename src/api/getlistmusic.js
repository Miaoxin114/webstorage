import { request } from '../utils/request'

export function getlistmusic(id) {
    var s='/playlist/detail?id='+id
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}