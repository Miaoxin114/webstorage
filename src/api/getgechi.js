import { request } from '../utils/request'

export function getgechi(id) {
    var s='/lyric?id='+id
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}