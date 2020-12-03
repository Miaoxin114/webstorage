import { request } from '../utils/request'

export function getalbummoredt(id) {
    var s='/album/detail/dynamic?id='+id
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}