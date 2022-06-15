$(function(){
	//포커스받은 엘리먼트가 네비에 숨을때
	$(document).keyup(function(e){
		var target = $(e.target);
		if(!target.parents("#header, #skipMenu").length){
			if(target.is("a, button, input, textarea, .ifrmFocus")){
				var tHeight = target.offset().top;
				var sHeight = $(window).scrollTop();
				var hideHeight = tHeight - sHeight;
				if(hideHeight < 102){
					$("html, body").scrollTop(sHeight-102);
				}
				//console.log(sHeight+":"+tHeight)
			}
		}
	});

	$("#nav>li")
	.mouseover(function(){
		if($(this).hasClass("typeA")){
			$(this).parents("#header").addClass("onTypeA");
		} else if($(this).hasClass("typeB")){
			$(this).parents("#header").addClass("onTypeB");
		} else if($(this).hasClass("typeC")){
			$(this).parents("#header").addClass("onTypeC");
		}
		$(".depth2", this).show();
	})
	.mouseleave(function(){
		$(this).parents("#header").removeClass();
		$(".depth2", this).hide();
	});



	$(".socialCont ul li .btn a:nth-child(4n)").css("border-right","none");
	$(".biList li:nth-child(4n)").css("margin-right","0");

	// gnbMenu
	headerInit();
	$("#gnb>li>a")
	.bind("mouseenter focusin", function(){
		$("#gnb>li").not($(this).parent()).removeClass("on");
		$(this).parent().addClass("on");
		$("#gnb>li .subMenuArea").not($(this).parent()).hide();
		$(this).parent().find(".subMenuArea").show();
		$("#header").css("z-index","50");
	});

	$("#header").mouseleave(function(){
		$("#gnb>li .subMenuArea").hide();
		$("#gnb>li").removeClass("on");
		$("#gnb>li.now").addClass("on");
	});

	$(".subMenuArea .slideArea strong a")
	.bind("mouseenter focusin", function(){
		var target = $(this).attr("href");
		$(this).parents(".slideArea").find("strong").not($(this).parent()).removeClass("on");
		$(this).parent().addClass("on");
		$(this).parents(".slideArea").find("div.section").not(target).hide();
		$(target).fadeIn('slow');
	});

	$("#container").focusin(function(){
		$("#gnb>li .subMenuArea").hide();
		$("#gnb>li").removeClass("on");
		$("#gnb>li.now").addClass("on");
	});
	$(".locationArea").focusin(function(){
		$("#gnb>li .subMenuArea").hide();
		$("#gnb>li").removeClass("on");
		$("#gnb>li.now").addClass("on");
	});

	//footer
	$("#footer .footHead .bgWrap > h2 a").click(function(){
		var _target = $(this).attr("href");
		$("#footer .footHead .bgWrap > h2").not($(this).parent()).removeClass("on");
		$(this).parent().addClass("on");
		$(".footTabSection").not(_target).hide();
		$(_target).show();
		footHeight = $(_target).height();
		$("#footer .footHead .bgWrap").height(footHeight + 137);
		return false;
	});

	footListSort($(".f_Beautiful>ul"), $(".f_Beautiful"));
	footListSort($(".f_Healthy>ul>li"), $(".f_Healthy"));
	footListSort($(".f_Refreshing>ul>li"), $(".f_Refreshing"));

	var footHeight = $(".footTabSection:first").height();
	$("#footer .footHead .bgWrap").height(footHeight + 137);


	// 제품 썸네일
	if($(".imgBoundary").size() > 0){
		$(".imgBoundary").each(function(){
			if($("img",this).height() < $(".imgBoundary:first").width() && $("img",this).width() < $(".imgBoundary:first").width()){
				$("img",this).css("height", $(".imgBoundary:first").height())
			}
			if($("img",this).height() < $(".imgBoundary:first").width()) {
				$("img",this).css("vertical-align", "middle");
			}
		});
	}

});
//gnbMenu
 $(window).resize(function(){
	 headerInit();

 });
//gnbMenu
function headerInit(){
	if($(window).width() >= 1200) {
		$("#header").removeClass("resize1000");
	} else if ($(window).width() < 1200) {
		$("#header").addClass("resize1000");
	}
}

//footer

/**기존 소스 시작 */
// function footListSort(target, objParent){
//  	target.each(function(i){
//  		i = i + 1;
//  		//console.log("index : "+$(this).index() +"____top :"+ parseInt($(this).css("top")) + "_____ height : "+ $(this).height());
//  		if(i%2 == 0){
// 			$(this).css("right", "0px");
//  		} else {
// 			$(this).css("left", "0px");
//  		}
//  		if(i / 2 > 1){
//  			var idx = i - 3;
//  			var size = parseInt(target.eq(idx).css("top")) + target.eq(idx).height() + 20;
//  			$(this).css("top", size+"px");
//  			//console.log("top :"+parseInt(target.eq(idx).css("top"))+"___ height : "+ target.eq(idx).height());
// 	 		target.parent().height(size);
//  		}
//  	});
// }

function showTab(obj, other){
	var target = $(obj).attr("href");
	$(obj).prepend('<span class="hide">선택됨</span>');
	$(target).show().siblings("." + other).hide();
	$(obj).parent().addClass("on").siblings().find("span").remove();
	$(obj).parent().addClass("on").siblings().removeClass("on");
}
function showTab2(obj, other){
	var target = $(obj).attr("href");
	//var height = $(target).height() + 45;
	$(target).show().siblings("." + other).hide();
	//$(obj).parents(".tabWrap").css("min-height", height + "px");
	$(obj).parents(".tabWrap").find(">h4").removeClass("on");
	$(obj).parent("h4").addClass("on");
}
/**기존 소스 끝 */



function fontSize() {
	var sizei = 0;
	$("#btn_size_expand").click(function(){
		sizei = sizei + 1;
		if(sizei <= 3 ){
			$("#fontSize a").css("background","none");
			$("#contArea *").each(function(){
				var thisSize = parseInt($(this).css("font-size"));
				$(this).css("font-size", thisSize+1+"px");
			});
			if(sizei == 3) {
				/* $(this).css("background","red"); */
			}
		}else {
			alert("가장 큰 글자크기 입니다.");
			return false;
		}
	});

	$("#btn_size_reduce").click(function(){
		sizei = sizei - 1;
		if(sizei >= -2 ){
			$("#fontSize a").css("background","none");
			$("#contArea *").each(function(){
				$("this").css("background","none");
				var thisSize = parseInt($(this).css("font-size"));
				$(this).css("font-size", thisSize-1+"px");
			});
			if(sizei == -2) {
				/* $(this).css("background","blue"); */
			}
		}else {
			alert("가장 작은 글자크기 입니다.");
		}
	}); // 글자크기 컨트롤
}


function goTop() {
	$("html, body").animate({scrollTop : "0"}, 200);
}

// 레이어 팝업
var POPUP_INIT_ID = 111;
var _popupLayerID = POPUP_INIT_ID;
function showPopupLayer(popSrc, popWidth, popHeight) {
	var marginTop = - (popHeight / 2 - $(document).scrollTop());
	var marginLeft = - (popWidth / 2);
	var frmWidth = popWidth - 10;
	var frmHeight = popHeight - 20;
	//_popupLayerID += 2;
	$("body").append('<div class="bgLayer"></div>');
	$("body").append(
			'<div class="popLayer" id="popLayer' + (_popupLayerID) + '" style="z-index:' + _popupLayerID + ';width:' + frmWidth + 'px;margin-top:' + marginTop + 'px;margin-left:' + marginLeft + 'px">'
			+ ' <div class="popLayerCont">'
			+ '  <iframe src="' + popSrc + '" width="' + frmWidth + '" height="' + frmHeight + '" frameborder="0" allowTransparency="true" id="iframetPopLayer' + (_popupLayerID) + '"></iframe>'
			+ ' </div>'
			+ ' <p class="close"><a href="#" onclick="hidePopupLayer(); return false" id="popLayer_close">X</a></p>'
			+ '</div>'
		);
		$(".bgLayer").css("z-index", _popupLayerID - 1).show();
		$("#popLayer" + _popupLayerID).show();
}

function hidePopupLayer() {
	$("#popLayer" + _popupLayerID).empty().remove();
	$(".bgLayer").empty().remove();
}



//Location
function subMenu(){
    var menuTitle = "";
    $('#location li div ul li.on').each(function(i){
        menuTitle = $(this).html();
        $(this).parent().parent().siblings("p").prepend(menuTitle);
    });
    $('#location li p:last').addClass('fb');
    $('#location li p a')
    .bind("mouseenter focusin", function(){
        $('#location li div').removeClass("on");
        $(this).parents('li').find('div').addClass("on");
        $("#header").css("z-index","1");
    }); 

    $("#location li div ul li a")
    .bind("mouseenter focusin click", function(){
        $('#location li div').removeClass("on");
        $(this).parents('div').addClass("on");
        $(this).parent().addClass('over');
    })
    .bind("mouseleave focusout", function(){
        $(this).parent().removeClass('over');
    });

    $("#location li").mouseleave(function(){
        $(this).find("div").removeClass("on")
    });	
    
    $(".locationArea").focusout(function(){
        $(this).find("div").removeClass("on")
    });
    
}
subMenu();


/**추가 시작 */

// 푸터
$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('h2').siblings(),
        target = $this.attr('href');
    others.removeClass('on');
    $this.parent('h2').addClass('on');
    $(tabgroup).children('div').hide();
    $(target).show();
})



// aside 
$(".accordion-header").on("click", function () { 
    $(this).siblings(".accordion-item").slideToggle();
});
/**추가 끝 */



