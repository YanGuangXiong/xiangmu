import ajaxRequest from './ajaxRequest'




//注册
export function getzc(stuff) {
    console.log(stuff);
    return ajaxRequest({
        method: 'post',
        url: `api/WebLogin/LoginZC`,
        data:JSON.stringify(stuff)
    })
}




