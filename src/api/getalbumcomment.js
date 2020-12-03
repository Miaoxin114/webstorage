import { request } from '../utils/request'

export function getalbumcomment(id) {
    var s='/comment/album?id='+id
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}