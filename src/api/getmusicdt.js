import { request } from '../utils/request'

export function getmusicdt(id) {
    var s='/song/detail?ids='+id;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function getcomments(dat) {
    var s='/comment/music?id='+dat.id+'&limit='+dat.limit;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function getmoremusic(id) {
    var s='/simi/song?id='+id;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function getmusicurl(id) {
    var s='/song/url?id='+id;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function musiccanuse(id) {
    var s='/check/music?id='+id;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
