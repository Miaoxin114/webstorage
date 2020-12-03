import { request } from '../utils/request'

export function getlistcomment(id) {
    var s='/comment/playlist?id='+id
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}