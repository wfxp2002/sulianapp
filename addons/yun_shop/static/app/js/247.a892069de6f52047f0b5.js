webpackJsonp([247],{bET3:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Pexp"),a=i("Tg7E"),r={components:{cTitle:n.a},data:function(){return{language:{},ticketOrders:[{fromAddr:"广州",toAddr:"北京",payDetil:"待支付",data:"2017-5-3",fromTime:"22:10",toTime:"01:10",airline:"海南航空",flight:"HU2014",price:"1210",btns:[{btn:"查看订单",type:1},{btn:"去支付",type:2}]},{fromAddr:"广州",toAddr:"北京",payDetil:"已取消",data:"2017-5-3",fromTime:"22:10",toTime:"01:10",airline:"海南航空",flight:"HU2014",price:"445",btns:[{btn:"查看订单",type:1},{btn:"删除",type:3}]},{fromAddr:"广州",toAddr:"北京",payDetil:"已支付",data:"2017-5-3",fromTime:"22:10",toTime:"01:10",airline:"海南航空",flight:"HU2014",price:"2204",btns:[{btn:"查看订单",type:1},{btn:"删除",type:3}]}]}},methods:{initLang:function(){sessionStorage.languageService?this.language=JSON.parse(sessionStorage.languageService).ticketOrder:this.language=this.$store.state.service.languageService.ticketOrder},jump:function(t){var e=t.currentTarget.getAttribute("data-index");1==e?this.$router.push(this.fun.getUrl("ticketOrderDetail")):2==e||3==e&&Object(a.MessageBox)({title:"提示",message:"确定要删除此订单吗?",showCancelButton:!0}).then(function(t){"confirm"==t?console.log("删除订单成功"):"cancel"==t&&console.log("已取消")})}},computed:{getLangState:function(){return this.$store.state.service.languageService}},watch:{getLangState:function(t){this.language=t?JSON.parse(sessionStorage.languageService).ticketOrder:this.$store.state.service.languageService.ticketOrder}},mounted:function(){this.initLang()},activated:function(){this.$store.commit("onload")}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"ticketOrder"+t.$store.state.service.lang,attrs:{id:"ticketOrder"}},[i("c-title",{attrs:{hide:!1,text:t.language.title}}),t._v(" "),i("div",{staticStyle:{height:"40px"}}),t._v(" "),i("ul",{staticClass:"list"},[t._l(t.ticketOrders,function(e,n){return i("li",{key:n,staticClass:"item"},[i("div",{staticClass:"addr"},[i("i",{staticClass:"iconfont icon-life-plane"}),t._v(" "),i("span",{staticClass:"left"},[t._v("机票")]),t._v(" "),i("span",{staticClass:"left"},[t._v("  ")]),t._v(" "),i("span",{staticClass:"left"}),t._v(" "),i("b",{staticClass:"right"},[t._v(t._s(e.payDetil))])]),t._v(" "),i("div",{staticClass:"data"},[i("ul",{staticClass:"time"},[i("li",{staticClass:"a"},[i("span",[t._v(t._s(e.fromAddr)+" - "+t._s(e.toAddr))]),i("span",[t._v("¥"),i("b",[t._v(t._s(e.price))])])]),t._v(" "),i("li",{staticClass:"b"},[t._v(t._s(e.airline)+t._s(e.flight))]),t._v(" "),i("li",{staticClass:"c"},[t._v(t._s(e.fromTime)+"至"+t._s(e.toTime))])]),t._v(" "),i("div",{staticClass:"btns"},t._l(e.btns,function(e,n){return i("button",{key:n,attrs:{type:"button","data-index":e.type},on:{click:function(e){return t.jump(e)}}},[t._v(t._s(e.btn))])}),0)])])}),t._v(" "),i("router-link",{attrs:{to:t.fun.getUrl("ticketOrderDetail")}})],2)],1)},staticRenderFns:[]};var s=i("VU/8")(r,d,!1,function(t){i("nBBy")},"data-v-9679132a",null);e.default=s.exports},nBBy:function(t,e,i){var n=i("s7pO");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("7d46ea9d",n,!0,{})},s7pO:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"\n.ticketOrderch .list .item[data-v-9679132a] {\n  width: 100%;\n  margin-top: 0.625rem;\n  background-color: #fff;\n  clear: both;\n}\n.ticketOrderch .list .item .addr[data-v-9679132a] {\n    padding: 0 0.9375rem;\n    height: 2.25rem;\n    line-height: 2.25rem;\n    color: #333;\n    font-size: 14px;\n    border-bottom: solid 0.0625rem #ebebeb;\n}\n.ticketOrderch .list .item .addr i[data-v-9679132a] {\n      float: left;\n      color: #666;\n      font-size: 1.25rem;\n      margin-right: 0.625rem;\n}\n.ticketOrderch .list .item .addr span[data-v-9679132a] {\n      float: left;\n}\n.ticketOrderch .list .item .addr b[data-v-9679132a] {\n      float: right;\n      font-weight: normal;\n      color: #f15353;\n}\n.ticketOrderch .list .item .data[data-v-9679132a] {\n    background: #fff;\n}\n.ticketOrderch .list .item .data .time[data-v-9679132a] {\n      padding: 0.625rem 1.25rem;\n}\n.ticketOrderch .list .item .data .time .a[data-v-9679132a] {\n        font-size: 18px;\n        line-height: 2.25rem;\n        font-weight: bold;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n}\n.ticketOrderch .list .item .data .time .a span[data-v-9679132a]:last-child {\n          font-size: 14px;\n          color: #F15353;\n}\n.ticketOrderch .list .item .data .time .a span:last-child b[data-v-9679132a] {\n            font-size: 18px;\n}\n.ticketOrderch .list .item .data .time .b[data-v-9679132a], .ticketOrderch .list .item .data .time .c[data-v-9679132a] {\n        text-align: left;\n        font-size: 14px;\n        color: #8c8c8c;\n        line-height: 1.25rem;\n}\n.ticketOrderch .list .item .data .time div.left[data-v-9679132a] {\n        width: 80%;\n        text-align: left;\n        float: left;\n}\n.ticketOrderch .list .item .data .time div.left .one span[data-v-9679132a] {\n          color: #333;\n          font-size: 14px;\n          line-height: 2.1875rem;\n}\n.ticketOrderch .list .item .data .time div.left .two[data-v-9679132a] {\n          color: #666;\n          font-size: 12px;\n}\n.ticketOrderch .list .item .data .time div.right[data-v-9679132a] {\n        width: 20%;\n        float: right;\n        color: #f15353;\n        font-size: 16px;\n        margin-top: 1.25rem;\n}\n.ticketOrderch .list .item .data .btns[data-v-9679132a] {\n      width: 100%;\n      height: 2.5rem;\n      padding-right: 0.875rem;\n      border-top: 0.0625rem solid #ebebeb;\n}\n.ticketOrderch .list .item .data .btns button[data-v-9679132a] {\n        padding: 0.25rem 0.625rem;\n        margin-left: 0.625rem;\n        margin-top: 0.5rem;\n        color: #333;\n        border: 0.0625rem solid #666;\n        border-radius: 0.1875rem;\n        font-size: 12px;\n        float: right;\n        background: #fff;\n        outline: 0;\n}\n.ticketOrderwei .list[data-v-9679132a] {\n  margin: 0.625rem 0.9375rem;\n}\n.ticketOrderwei .list .item[data-v-9679132a] {\n    -webkit-box-shadow: 0.125rem 0.125rem 0.125rem 0.125rem #aaa;\n            box-shadow: 0.125rem 0.125rem 0.125rem 0.125rem #aaa;\n    width: 100%;\n    height: 8.125rem;\n    margin-bottom: 0.9375rem;\n    border-radius: 0.375rem;\n}\n.ticketOrderwei .list .item .addr[data-v-9679132a] {\n      padding: 0 0.9375rem;\n      height: 1.5625rem;\n      line-height: 1.5625rem;\n      background: #1bba9e;\n      color: #fff;\n      border-top-left-radius: 0.375rem;\n      border-top-right-radius: 0.375rem;\n}\n.ticketOrderwei .list .item .addr span[data-v-9679132a] {\n        float: right;\n}\n.ticketOrderwei .list .item .addr b[data-v-9679132a] {\n        float: left;\n        font-weight: normal;\n}\n.ticketOrderwei .list .item .data[data-v-9679132a] {\n      background: #fff;\n      height: 6.5625rem;\n      border-bottom-left-radius: 0.375rem;\n      border-bottom-right-radius: 0.375rem;\n}\n.ticketOrderwei .list .item .data .time[data-v-9679132a] {\n        padding: 0 0.9375rem;\n        height: 3.75rem;\n}\n.ticketOrderwei .list .item .data .time div.left[data-v-9679132a] {\n          width: 80%;\n          text-align: right;\n          float: right;\n}\n.ticketOrderwei .list .item .data .time div.left .one span[data-v-9679132a] {\n            color: #333;\n            font-size: 14px;\n            line-height: 2.1875rem;\n}\n.ticketOrderwei .list .item .data .time div.left .two[data-v-9679132a] {\n            color: #666;\n            font-size: 12px;\n}\n.ticketOrderwei .list .item .data .time div.right[data-v-9679132a] {\n          width: 20%;\n          float: left;\n          color: #333;\n          font-size: 16px;\n          margin-top: 1.25rem;\n}\n.ticketOrderwei .list .item .data .btns[data-v-9679132a] {\n        width: 100%;\n        height: 2.8125rem;\n        border-top: 0.0625rem solid #ccc;\n}\n.ticketOrderwei .list .item .data .btns button[data-v-9679132a] {\n          padding: 0.25rem 0.625rem;\n          margin: 0.625rem;\n          color: #ff951b;\n          border: 0.0625rem solid #ff951b;\n          border-radius: 0.25rem;\n          font-size: 12px;\n          float: left;\n          background: #fff;\n          outline: 0;\n}\n",""])}});