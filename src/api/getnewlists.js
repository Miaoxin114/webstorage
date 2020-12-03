import { request } from '@/utils/request'
export function getnewlists(dat) {
    var s='/top/album?offset='+dat.offset+'&limit='+dat.limit+'&area='+dat.area+'&type='+dat.type+'&year='+dat.year+'&month='+dat.month;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}