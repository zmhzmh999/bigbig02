//注意：每次调用post get ajax的时候会先调用这个函数
$.ajaxPrefilter(function(options) {
    // console.log(options.url);
    //在发起真正的Ajax之前统一拼接
    options.url = 'http://ajax.frontend.itheima.net' + options.url
})