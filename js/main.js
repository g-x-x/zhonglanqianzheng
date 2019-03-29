jQuery(function(){
	$(".navbar-nav>li>a").click(function(){
		$(this).next("p").addClass("line-top").parent("li").siblings("li").find("p").removeClass("line-top");
	})
	
	$(".card-aree>li.card-item").mouseenter(function(){
    	$(this).addClass("card-active").siblings("li").removeClass("card-active");
    	$(this).siblings("li").children("div").find("h4").css("color","#0BA1E4");
    	$(this).children("div").find("h4").css("color","#FFFFFF");
    })
	$("#clan-slider a").mouseenter(function(){
		$(this).next().show().parent("li").siblings("li").find("div").hide();
	})
	$("#clan-slider a").mouseleave(function(){
		$(this).next().hide().parent("li").siblings("li").find("div").hide();
	})
	
    window.addEventListener('scroll',function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	console.log(scrollTop)
    if (scrollTop>200){
    	$("#slider-goTop").show();
    }else{
    	$("#slider-goTop").hide();
    }
    },true);
    
//  切换区域开始
    $(".pagination li").click(function(){
    	$(this).addClass("active").siblings("li").removeClass("active");
    	if($(this).index()==0){
    		$(".down-list").show();
    		$(".down-list1").hide();
    	}
    	if($(this).index()==1){
    		$(".down-list").show();
    		$(".down-list1").hide();
    	}
    	if($(this).index()==2){
    		$(".down-list").hide();
    		$(".down-list1").show();
    	}
    	if($(this).index()==3){
    		$(".down-list").hide();
    		$(".down-list1").show();
    	}

    })

})
