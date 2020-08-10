import ajaxRequest from './ajaxRequest'


// 查询
export function GetpurcharesList(pagindex, limit) {
    return ajaxRequest({
        method: 'get',
        url: `api/purchase/GetpurchaseList`,
        params: {
            pagindex: pagindex,
            limit: limit
        }
    })
}

