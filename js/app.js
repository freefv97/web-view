$(function () {
    banner();
    share();
    inews();
    toolbar();
    
    $('#scroll').slide({ titCell:'.hd ul', mainCell:'.bd ul', autoPlay:true, autoPage:true, delayTime:300,interTime:5000, effect:'leftLoop',trigger:"click",vis:3});
    $('#scrolll').slide({ titCell:'.hd ul', mainCell:'.bd ul', autoPlay:true, autoPage:true, delayTime:300,interTime:30, effect:'leftMarquee',trigger:"click",vis:4});
	$('#scrollll').slide({ titCell:'.hd ul', mainCell:'.bd ul', autoPlay:true, autoPage:true, delayTime:300,interTime:5000, effect:'leftLoop',trigger:"click",vis:6});
	$("#inews").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,delayTime:1000,interTime:5000,});
    
    $(".submian .subleft .lefta .comt > ul > li").each(function () {
        if (!$(this).find("li").length) {
            $(this).find(".boxlist").remove();
        }
    })

    if ($(".subleft").length) {
        $(".subleft .comt > ul > li").click(function () {
            $(this).find(".boxlist").show().end().siblings().find(".boxlist").hide();
        }, function () {

        })
    }
    $(".submian .subleft .lefta .comt > ul > li").each(function () {
        if (!$(this).find("li").length) {
            $(this).find(".boxlist").remove();
        }
    })

    if ($(".subleft").length) {
        $(".subleft .comt > ul > li").click(function () {
            $(this).find(".boxlist").show().end().siblings().find(".boxlist").hide();
        }, function () {

        })
    }


    $(".returnTop2,.returnTop").click(function() {
		$("body, html").stop().animate({
			"scrollTop": 0
		});
	});
	
	$("#addFavo").click(function() {
		var fm = $("title").html();
		AddFavorite(fm, location.href, '');
	});
	$("#setHome").click(function(){
        SetHome($('title').html(), location.href, '');
	});
	
	// map_ul
	$(".map_ul > li").each(function() {
		if (!$(this).find("li").length) {
			$(this).find("ul").remove();
		}
	});
});
// banner鐒︾偣鍥�
function banner() {
    if (!$("#banner").length || $("#banner li").length <= 1) {	return false; }
    $("#banner ul li:gt(0)").css({"display":"none"});
    var b = $("#banner"),
        me = $("#banner ul"),
        tip = $("#banner .tip"),
        t, interval = 5000,
        speed = 1000,
        speed2 = 700,
        n = 0,
        N = me.children("li").length;
    wid = b.children("li").width();
    step = 200,time = 5000;
    if ($("#banner .tip").length) {
        var htmlTip = "";
        for (var i = 0; i < N; i++) {
            if (i == 0) {
                htmlTip += "<span class='cur ico'>"+(i+1)+"</span>";
            } else {
                htmlTip += "<span class='ico'>"+(i+1)+"</span>";
            }
        }
        tip.html(htmlTip);
    }
    var func = function() {
        if (n >= N - 1) {
            n = 0;
        }else if(n < -1){
            n = N-1;
        }
        else {
            n++;
        }
        me.children("li").eq(n).css({
            "z-index": 2
        }).stop().fadeIn(speed).siblings("li").css({
            "z-index": 1
        }).stop().fadeOut(speed2);
        if ($("#banner .tip").length) {
            tip.children("span").eq(n).addClass("cur").siblings("span").removeClass("cur");
        }
    }
    $("#banner").hover(function(){
        $("#btn_prev,#btn_next").fadeIn()
    },function(){
        $("#btn_prev,#btn_next").fadeOut()
    })
    $dragBln = false;
    $("#btn_prev").click(function(){
        clearInterval(t);
        n -= 2;
        func();
        t = setInterval(func, time)
    });
    $("#btn_next").click(function(){
        clearInterval(t);
        func();
        t = setInterval(func, time)
    });

    tip.children("span").click(function() {
        clearInterval(t);
        n = $(this).index() - 1;
        func();
        t = setInterval(func, interval);
    })
    $("#banner ul.list li").mouseenter(function() {
        clearInterval(t);
    }).mouseleave(function() {
        t = setInterval(func, time);
    });
    t = setInterval(func, interval);
}


//inews
function inews(){ 
	var $a=$("#inews").find(".tog").find("div");
	var i=2;
	var page=1;
	var $v_show=$("#inews .inewsCon .list");
	var $v_content=$("#inews .inewsCon");
	var v_width=$v_content.width();
	var len=$v_content.find(".item").length;
	var page_count=Math.ceil(len/i);
	$v_show.width(page_count*v_width);
	if(len < 3){
		$a.hide();
	}
	$a.click(function(){
		var $sty=$(this).attr("class");
		if(!$v_show.is(":animated")){
		   if($sty=="prev"){
			  if(page==1){
					 $v_show.animate({left:-v_width*(page_count-1)+"px"},500);
					 page=page_count;  
			  }else{
					 $v_show.animate({left:"+="+v_width+"px"},500);                                    
					 page--;
			  }  
		   }
		   if($sty=="next"){
			  if(page==page_count){
					$v_show.animate({left:0},500);
					page=1;
			  }else{
					$v_show.animate({left:"-="+v_width+"px"},500);
					page++;
			  }   
		   }
		}
	});
}

function toolbar() {
    $('#toolbar dd').bind({
        'mouseenter': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(true, true).animate({ 'width': 180 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.show().animate({ 'right': 40 }, 200);
            }
        },
        'mouseleave': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(false, false).animate({ 'width': 0 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.hide().animate({ 'right': 120 }, 200);
            }
        }
    });
    $("#top").click(function () {
        $("body, html").stop().animate({ "scrollTop": 0 });
    });

}

function layout(u){
	var $obj = $('<div class="dialog-layout"></div>');
	if(u == 0){
		$('.dialog-layout').remove();
	}else{
		if(!$('.dialog-layout').length){
			$obj.appendTo('body').show();
		}
	}
}
function share(){
	window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "0",
        "bdSize": "16"
    },
    "share": {},
    "slide": { // 璺熷浘鏍囧紡鐨勪唬鐮佺浉姣旓紝杩欓噷鏄坊鍔犱簡娴獥寮� slide 灞炴€ч厤缃�
        "type": "slide",
        "bdImg": "6",
        "bdPos": "left",
        "bdTop": "100"
    }
};
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
}


// 鍔犲叆鏀惰棌 鍏煎360鍜孖E6
function shoucang(sTitle, sURL) {
    try {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e) {
            alert("鎮ㄧ殑娴忚鍣ㄤ笉鏀寔姝ゅ姛鑳斤紝璇蜂娇鐢–trl+D杩涜娣诲姞");
        }
    }
}
function SetHome(obj,url){
	try{
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage(url);
   }catch(e){
	   if(window.netscape){
		  try{
			  netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		 }catch(e){
			  alert("鎶辨瓑锛屾鎿嶄綔琚祻瑙堝櫒鎷掔粷锛乗n\n璇峰湪娴忚鍣ㄥ湴鍧€鏍忚緭鍏モ€渁bout:config鈥濆苟鍥炶溅鐒跺悗灏哰signed.applets.codebase_principal_support]璁剧疆涓�'true'");
		  }
	   }else{
		alert("鎶辨瓑锛屾偍鎵€浣跨敤鐨勬祻瑙堝櫒鏃犳硶瀹屾垚姝ゆ搷浣溿€俓n\n鎮ㄩ渶瑕佹墜鍔ㄥ皢銆�"+url+"銆戣缃负棣栭〉銆�");
	   }
  }
}