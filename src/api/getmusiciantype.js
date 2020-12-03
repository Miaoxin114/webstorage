import { request } from '../utils/request'

export function getmusiciantype(dat) {
    var s='/artist/list?type='+dat.type+'&area='+dat.area+'&initial='+dat.initial+'&limit='+dat.limit;
    console.log(s)
    return request({
        url: s,
        method: 'get'
    })
}