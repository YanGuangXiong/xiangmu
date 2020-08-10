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

// 添加
export function Addpurchares(obj) {
    return ajaxRequest({
        method: 'post',
        url: `api/purchase/Savet_billList`,
        data: JSON.stringify(obj)
    })
}

// 删除
export function Deletepurchares(obj) {
    return ajaxRequest({
        method: 'Delete',
        url: `api/purchase/DeleteInfo`,
        params:{
            billId:obj
        }
    })
}