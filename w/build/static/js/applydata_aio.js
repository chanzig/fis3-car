!function(o){var t=o.MyAjax,n=window.location.protocol;urlPrefix="https"==n.substr(0,5)?"https://"+window.location.host+"/":"http://"+window.location.host+"/";var a={dev:"http://10.1.20.24:8080/",qa:"http://10.1.20.32:8081/",qa1:"http://qa1-api.liancheinfo.net/",qa3:"http://qa3-api.liancheinfo.net:8081/",localhost:"http://localhost:8080/chainlife-front/"},i=!0,r=i?"jsonp":"json",e=i?"GET":"POST";urlPrefix=i?a.qa3:urlPrefix,ajaxConfig={type:e,dataType:r,cache:!1,jsonp:"jsoncallback"};var c={urlAddress:urlPrefix,url:{productGroupList:"product/getList.json"},send:function(o){return o.config.url=urlPrefix+o.config.url,ajaxConfig.success=function(t){0==t.code?o.success&&o.success(t.data,t.total):3e3==t.code?o.unLogin&&o.unLogin():o.failure&&o.failure(t.msg)},ajaxConfig.error=function(){o.error&&o.error("服务器开小差了")},ajaxConfig.complete=function(){o.complete&&o.complete()},$.ajax($.extend(o.config,ajaxConfig))}};c.noConflict=function(){return o.MyAjax=t,c},o.MyAjax=c}(this);
var CARUTILS=function(){var e={getParameter:function(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null},parseMobile:function(e){return null!=e?e.substr(0,3)+"****"+e.substr(7,11):null},investUserName:function(e){if(null!=e){if(2==e.length)return e.substr(0,1)+"*";if(3==e.length)return e.substr(0,1)+"**";if(4==e.length)return e.substr(0,2)+"**";if(e.length>4)return e.substr(0,2)+"****"}return null},UrlPath:{set:function(e){window.location.href=e.indexOf("?")>-1?e+"&returnurl="+encodeURI(window.location.pathname+window.location.search):e+"?returnurl="+encodeURI(window.location.pathname+window.location.search)},locationhref:function(e){var t=window.location.href,n=t.indexOf("returnurl");if(t.indexOf("returnurl")>-1){var r=t.substring(n),l=new RegExp("(^|&)returnurl=([^&]*)(&|$)","i"),u=r.match(l);url=null!=u?unescape(u[2]):null}else url=null;window.location.href=null==url?e:decodeURI(url)}},fmtDate:function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in n)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t},addComma:function(e){e+="";var t,n,r,l="";t=e.replace(/,/g,"").split("."),n=t[0].length%3,r=t[0].substr(n).toString();for(var u=0;u<r.length;u++)l=u%3==0?l+","+r.substr(u,1):l+r.substr(u,1);var s=void 0==t[1]?t[0].substr(0,n)+l:t[0].substr(0,n)+l+"."+t[1];return 44==s.charCodeAt(0)&&(s=s.substr(1)),s},removeComma:function(e){e+="";var t;return t=e.replace(/,/g,""),Number(t)},showMoney:function(e){var e=e+"",t=e.split(".")[0],n="";if(t.length>3){for(;t.length>3;)n=""==n?t.substr(t.length-3,t.length):t.substr(t.length-3,t.length)+","+n,t=t.substr(0,t.length-3);(null!=t||""!=t)&&(n=t+","+n)}else n=t;return e.split(".")[1]&&null!=e.split(".")[1]?n=n+"."+e.split(".")[1]:n+=".00",n}};return e}();
var VALIDATEUTIL=function(){var r={nameReg:/^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/,certiCodeReg:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,mobileReg:/^1\d{10}$/,companyMobileReg:/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{6,14}$/,loginPwdReg:/^[0-9A-Za-z]{6,20}$/,payPwdReg:/^\d{6}$/,email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,isNotEmpty:function(r,s,o){var e=this;return r&&null!=r&&""!=r?(e.hideErrorMsg(""),!0):(o&&e.showErrorMsg(s+"不能为空"),!1)},certiCode:function(r,s){var o=this,e=o.certiCodeReg;return 0==e.test(r)?(s&&o.showErrorMsg("请输入有效的身份证信息"),!1):(o.hideErrorMsg(""),!0)},mobile:function(r,s){var o=this,e=o.mobileReg;return e.test(r)?(o.hideErrorMsg(""),!0):(s&&o.showErrorMsg("请确认你的手机号码"),!1)},loginPassword:function(r,s){var o=this,e=o.loginPwdReg;return e.test(r)?(o.hideErrorMsg(""),!0):(s&&o.showErrorMsg("请输入6-20位数字或字母"),!1)},payPassword:function(r,s){var o=this,e=o.payPwdReg;return e.test(r)?(o.hideErrorMsg(""),!0):(s&&o.showErrorMsgs("请输入6位数字交易密码"),!1)},againPassword:function(r,s,o){var e=this;return r!=s?(o&&e.showErrorMsg("确认密码错误"),!1):(e.hideErrorMsg(""),!0)},checkData:function(){return!0},isSelect:function(){var r=this,s=$(".virtualRight").hasClass("dispaly");return s?(r.showErrorMsg("未同意协议"),!1):(r.hideErrorMsg(""),!0)},isEmail:function(r,s){var o=this,e=o.email;return e.test(r)?(o.hideErrorMsg(""),!0):(s&&o.showErrorMsg("请输入正确的邮箱信息！"),!1)},isEmptyANum:function(r,s,o){var e=this;return r&&null!=r&&""!=r?isNaN(r)?(o&&e.showErrorMsg(s+"不能包含非数字"),!1):(e.hideErrorMsg(""),!0):(o&&e.showErrorMsg(s+"不能为空"),!1)},showCN:function(r){return r&&null!=r&&""!=r?r.substr(0,2)+"*****":""},showErrorMsg:function(r){var s=this;$(".error2").is(":visible")&&s.hideErrorMsg(),$(".error2").removeClass("hide"),$(".error2").animate({top:"0px"},"slow",function(){}),$(".error2 span").text(r),s.autoHideErrorMsg()},autoHideErrorMsg:function(){var r=this;$(".error2").is(":visible")&&setTimeout(function(){r.hideErrorMsg()},4e3)},hideErrorMsg:function(){$(".error2").addClass("hide"),$(".error2 span").text("")}};return r}();
"use strict";$(function(){var t={init:function(){var t=this;t.$submit=$(".submitdiv button"),t.submit()},submit:function(){var t=this;t.$submit.click(function(){return t.makeUserDate(),t.validate()?(t.$submit.prop("disabled",!0),void MyAjax.send({config:{url:"user/info/update.json",data:{data:JSON.stringify(t.user)}},success:function(){CARUTILS.UrlPath.locationhref("/")},complete:function(){t.$submit.prop("disabled",!1)},error:function(t){VALIDATEUTIL.showErrorMsg(t)},failure:function(t){VALIDATEUTIL.showErrorMsg(t)}})):!1})},makeUserDate:function(){var t=this;t.user={company:$("input[name=company]").val(),companyAddress:$("input[name=companyAddress]").val(),companyPhone:$("input[name=companyPhone]").val(),emergencyContact1:$("input[name=emergencyContact1]").val(),contact1Phone:$("input[name=contact1Phone]").val(),contact1Address:$("input[name=contact1Address]").val(),contact1Relation:$("#contact1Relation option:selected").val()}},validate:function(){var t=this;return VALIDATEUTIL.isNotEmpty(t.user.company,"工作单位",!0)&&VALIDATEUTIL.isNotEmpty(t.user.companyAddress,"工作单位地址",!0)?VALIDATEUTIL.companyMobileReg.test(t.user.companyPhone)?VALIDATEUTIL.isNotEmpty(t.user.emergencyContact1,"联系人姓名",!0)?VALIDATEUTIL.mobileReg.test(t.user.contact1Phone)?VALIDATEUTIL.isNotEmpty(t.user.contact1Address,"联系人地址",!0)&&VALIDATEUTIL.isNotEmpty(t.user.contact1Relation,"与联系人关系",!0)?!0:!1:(VALIDATEUTIL.showErrorMsg("请输入正确的联系人电话"),!1):!1:(VALIDATEUTIL.showErrorMsg("请输入有效的单位电话"),!1):!1}};t.init()});
