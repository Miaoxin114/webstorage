import { request } from '@/utils/request'
export function getsearchtj(str) {
    var s='/search/suggest?keywords='+str;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}
export function getsearch(dat) {
    var s='/search?keywords='+dat.keywords+'&limit='+dat.limit+'&offset='+dat.offset+'&type='+dat.type;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}