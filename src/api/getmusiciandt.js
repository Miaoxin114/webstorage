import { request } from '../utils/request'

export function getsongs(id) {
    var s='/artist/top/song?id='+id;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function getdetail(id) {
    var s='/artist/desc?id='+id;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function getalbums(dat) {
    var s='/artist/album?id='+dat.id+'&limit='+dat.limit+'&offset='+dat.offset;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function getmore(id) {
    var s='/simi/artist?id='+id;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
