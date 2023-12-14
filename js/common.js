

// 导航
$(function(){
	//超过一定高度导航添加类名
	var nav=$("header"); //得到导航对象  
	var win=$(window); //得到窗口对象  
	var sc=$(document);//得到document文档对象。  
	win.scroll(function(){  
	if(sc.scrollTop()>=100){  
		nav.addClass("on");   
	}else{  
	nav.removeClass("on");  
	}  
	})   

	//移动端展开nav
	$('#navToggle').on('click',function(){
		$('.m_nav').addClass('open');
	})
	//关闭nav
	$('.m_nav .top .closed').on('click',function(){
		$('.m_nav').removeClass('open');
	})
	
	//二级导航  移动端
	//二级导航  移动端
	$(".m_1").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_1");
		$(this).toggleClass("m_bg");
	});
	$(".m_2").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_2");
		$(this).toggleClass("m_bg");
	});
	$(".m_3").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_3");
		$(this).toggleClass("m_bg");
	});
	$(".m_4").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_4");
		$(this).toggleClass("m_bg");
	});
	$(".m_5").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_5");
		$(this).toggleClass("m_bg");
	});
	$(".m_6").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_6");
		$(this).toggleClass("m_bg");
	});
	$(".m_7").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_7");
		$(this).toggleClass("m_bg");
	});
	$(".m_8").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_8");
		$(this).toggleClass("m_bg");
	});
	$(".m_9").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_9");
		$(this).toggleClass("m_bg");
	});
	$(".m_10").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_10");
		$(this).toggleClass("m_bg");
	});
	$(".m_11").click(function() {
		$(this).next("div.dropdown_menu").slideToggle('slow');
		$(this).toggleClass("m_11");
		$(this).toggleClass("m_bg");
	});

})


$(document).ready(function(){
	// 语言
	$(".language ul li").click(function() {
		$(this).parent().next().slideToggle(300)
	});


})

//首页导航	滚动后
$(document).ready(function(){
	$(document).scroll(function(){
		var pc_menu = $(document).scrollTop();
		var headerH= $(".navbar").height();
		if(pc_menu >= headerH){
			console.log(pc_menu,headerH);
			$(".pc_menu").addClass("pc_fixed");
		}else{
			$(".pc_menu").removeClass("pc_fixed");
		}
	})
	$(".openList").click(function(e){
		$(".m_menu_list").addClass("m_open_list");	
		e = e||event; stopFunc(e);
	})
	$(".menu_list_close").click(function(e){
		$(".m_menu_list").removeClass("m_open_list");	
		e = e||event; stopFunc(e);
	})
	$(document).click( function(e){
        $(".m_menu_list").removeClass("m_open_list");	
    })
	function stopFunc(e){   
    	e.stopPropagation?e.stopPropagation():e.cancelBubble = true;       
	}
	})


//首页banner
var mySwiper = new Swiper('.part_one .swiper-container', {
	autoplay: true,    //可选选项，自动滑动
	loop : true,
	pagination :{
		el: '.swiper-pagination',
		clickable :true,
  	},
	autoplay: {
    delay: 2000,    //7秒切换一次
  	},
})

// 公司介绍轮播图
$(document).ready(function() {
	var owl = $('#index01-lbt');
	var item_count = parseInt(owl.find('.item').length);
	if( item_count <= 1){
		owl.owlCarousel({
			loop: false,
			margin: 10,
			paginationNumbers:true,
			responsiveClass: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
			  0: {
				items: 1,
				nav: true
			  },
			  600: {
				items: 1,
				nav: false
			  },
			  1000: {
				items: 1,
			  }
			}
		})
	}else{
		owl.owlCarousel({
			loop: true,
			margin: 10,
			paginationNumbers:true,
			responsiveClass: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true,
			responsive: {
			  0: {
				items: 1,
				nav: true
			  },
			  600: {
				items: 1,
				nav: false
			  },
			  1000: {
				items: 1,
			  }
			}
		})
	}
	
  })




// 首页友情链接
$(document).ready(function() {
	var owl = $('#index05-lbt');
	owl.owlCarousel({
	  rtl: false,
	  nav: true,
	  loop: true,
	  autoplay: true,
	  autoplayTimeout: 3000,
	  autoplayHoverPause: true,
	  responsive: {
		0: {
			items: 2,
			margin: 12,
		  },
		580: {
			items: 3,
			margin: 12,
		},
		960: {
		  items: 4,
		  margin: 15,
		},
		1200: {
		  margin: 18,
		  items: 5
		},
		1400: {
			margin: 20,
			items: 5
		}
	  }
	})
  })


// 发展历程
$(document).ready(function() {
	var owl = $('#history-lbt');
	owl.owlCarousel({
	  rtl: false,
	  nav: true,
	  loop: true,
	  autoplay: true,
	  autoplayTimeout: 4000,
	  autoplayHoverPause: true,
	  responsive: {
		0: {
			items: 2,
			margin: 8,
		  },
		760: {
		  items: 2,
		  margin: 10,
		},
		960: {
		  items: 3,
		  margin: 15,
		},
		1200: {
		  margin: 18,
		  items: 4
		},
		1400: {
			margin: 20,
			items: 4
		}
	  }
	})
  })

// 资质荣誉
$(document).ready(function() {
	var owl = $('#honor-lbt');
	owl.owlCarousel({
	  rtl: false,
	  nav: true,
	  loop: true,
	  autoplay: true,
	  autoplayTimeout: 4000,
	  autoplayHoverPause: true,
	  responsive: {
		0: {
			items: 2,
			margin: 8,
		  },
		760: {
		  items: 2,
		  margin: 10,
		},
		960: {
		  items: 3,
		  margin: 15,
		},
		1200: {
		  margin: 18,
		  items: 4
		},
		1400: {
			margin: 20,
			items: 4
		}
	  }
	})
  })










