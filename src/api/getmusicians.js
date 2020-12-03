import { request } from '../utils/request'

export function getmusicians(dat) {
    var s='/top/artists?offset='+dat.offset+'&limit='+dat.limit
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}