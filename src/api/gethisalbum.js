import { request } from '../utils/request'

export function gethisalbum(dat) {
    var s='/artist/album?id='+dat.id+'&limit='+dat.limit
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}