var config = {
    api: 'http://192.168.6.122:8080/notice/webservice',
    uploadApi: 'http://192.168.6.122:8080/notice/upload',
    downloadApi: 'http://192.168.6.122:8080/notice/download',
    types:{
           "1":"系统消息",
           "2":"公司公告",
           "3":"新闻资讯"
          },
    terminalTypes:{
          "0":"所有设备",
          "1":"IOS",
          "2":"Android"
    },
    softVers:{
          "0":"所有版本",
          "1":"最新版本",
          "2":"非最新版本"
    },
    receiverTypes:{
        "1":"手机号码",
        "2":"交易帐号",
        "3":"分组",
        "4":"注册用户"
    },
    operateTypes:{
        "1":"发送消息",
        "2":"审核消息",
        "3":"分组管理",
        "4":"分组成员管理"
    }
}