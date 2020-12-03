import { request } from '../utils/request'

export function getaboutlist(id) {
    return request({
        url:'/related/playlist?id='+id,
        method: 'get'
    })
}