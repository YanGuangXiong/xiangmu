import ajaxRequest from './ajaxRequest'




//注册
export function getzc(stuff) {
    return ajaxRequest({
        method: 'post',
        url: `api/WebLogin/LoginZC`,
        data:JSON.stringify(stuff)
    })
}


// 登录
export function qiantaidenglu(userinfo){
return ajaxRequest({
    method:'post',
    url: `api/WebLogin/getlogin`,
    data:JSON.stringify(userinfo)
})

}

