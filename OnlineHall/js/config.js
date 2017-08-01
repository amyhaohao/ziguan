var config = {
    api: 'http://58.246.171.6:53801/HtFutures/hall',
    img: 'http://58.246.171.6:53801/HtFutures/captcha/gen',
    banners:[{img:"images/banner1.jpg"},{img:"images/banner2.jpg"},{img:"images/banner3.jpg"}],
    biz:{
        phone:{name: "手机号变更"},
        id:{name: "身份证变更"},
        address:{name: "地址变更"},
        email:{name: "邮箱变更"},
        bank:{name: "银期变更"},
        trade:{name: "交易系统切换"},
        active:{name: "休眠账户激活"},
        more:{name: "更多"}
    },
    indexBiz:["phone", "id", "address", "email", "bank", "trade", "active", "more"],
    allBiz:[{name:"信息变更", data:["phone","id","address","email","bank"]},
            {name:"其他业务", data:["trade", "active"]}],
    imgSize:5
}