import { request } from '@/utils/request'
export function getnewmusic(musictype) {
    var s='/top/song?type='+musictype.type
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}