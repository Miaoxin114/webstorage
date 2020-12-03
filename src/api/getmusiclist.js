import { request } from '../utils/request'

export function getmusiclist(musictype) {
    var s='/top/playlist/highquality?cat='+musictype.cat+"&limit="+musictype.limit+"&before="+musictype.before
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}