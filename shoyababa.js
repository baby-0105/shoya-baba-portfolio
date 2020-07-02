$(function(){

	var headerHight =65;
    //①ページ内スクロール
        $(".navlink1").click(function () {
        var i = $(".navlink1").index(this)
        var p = $(".about").eq(i).offset().top-headerHight;
        $('html,body').animate({ scrollTop: p }, 'middle');
        return false;
    });

     $(".navlink2").click(function () {
        var i = $(".navlink2").index(this)
        var p = $(".skills").eq(i).offset().top-headerHight;
        $('html,body').animate({ scrollTop: p }, 'middle');
        return false;
    });

      $(".navlink3").click(function () {
        var i = $(".navlink3").index(this)
        var p = $(".portfolio").eq(i).offset().top-headerHight;
        $('html,body').animate({ scrollTop: p }, 'middle');
        return false;
    });

      $(".navlink4").click(function () {
        var i = $(".navlink4").index(this)
        var p = $(".canDo").eq(i).offset().top-headerHight;
        $('html,body').animate({ scrollTop: p }, 'middle');
        return false;
    });

       $(".navlink5").click(function () {
        var i = $(".navlink5").index(this)
        var p = $(".contact").eq(i).offset().top-headerHight;
        $('html,body').animate({ scrollTop: p }, 'middle');
        return false;
    });

        $(".footer-mail").click(function () {
        var i = $(".footer-mail").index(this)
        var p = $(".contact").eq(i).offset().top-headerHight;
        $('html,body').animate({ scrollTop: p }, 'middle');
        return false;
    });


    //②collapseメニュー：スクロール後に閉じる
    $('.navbar-nav li a').click(function(){
    	$('.navbar-collapse').collapse('hide');
    });

    //③
   	$('.main-text1').addClass('main-tx');
   	$('.main-text2').addClass('main-tx');
   	$('.main-text3').addClass('main-tx');
});