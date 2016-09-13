// 顶部返回
$(".goback").tap(function(){
    window.history.go(-1);
});
//底部返回
$(".foot-goback").tap(function(){
    window.history.go(-1);
});
//跳转详情页
$(".product").tap(function(){
    location.href="xiangqing.html";
});
// 滚动加载
window.addEventListener("scroll",function scrollHandler(){              
    var scrollh = $(document).height();
    var bua = navigator.userAgent.toLowerCase();
    if(bua.indexOf('iphone') != -1 || bua.indexOf('ios') != -1){
        scrollh = scrollh-60;
    }else{
        scrollh = scrollh;
    }
    var scrollTop=Math.max(document.documentElement.scrollTop||document.body.scrollTop);
    if((scrollTop + $(window).height()) >= scrollh){
        $(".loading").show();
        var interval = setTimeout(function(){
            $(".loading").hide();
        },1000);
        
   var timer = setTimeout(function(){
  $(".products").children().eq(0).appendTo($(".products")); //bug   
   },2000);
  
    }
},100);

//滚动加载
// function scrollLoad(){
//     //可视窗口的高度
//     var scrollTop=0;
//     var scrollBottom=0;
//     $(document).scroll(function(){
//         var dch = getClientHeight();
//         scrollTop=getScrollTop();
//         scrollBottom=document.body.scrollHeight-scrollTop;
//         if(scrollBottom>=dch&&scrollBottom<=(dch+10)){
//             if(pageCount==(currentPage+1)){
//                 $(".loading").hide();
//                 return;
//             }
//             currentPage++;
//             showList(currentPage,pageSize);
//         }
//     });
// }

    
