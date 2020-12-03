import { request } from '../utils/request'

export function getalbum(id) {
    var s='/album?id='+id
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}