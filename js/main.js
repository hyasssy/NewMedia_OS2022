$(function(){

	$('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないac-parentのopenクラスを取る
    $('.ac-parent').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.ac-parent').not($(this)).next('.ac-child').slideUp();
  });
	//menu bar

	$("#title").click(function(){
		$(window).scrollTop(0);
	});

	$("#header-top").click(function(){
		$("html,body").animate({
			scrollTop:$('.top-wrapper').offset().top
		});
	});

	$("#header-about").click(function(){
		$("html,body").animate({
			scrollTop:$('.about-start').offset().top - $('header').height()
		});
	});

	$("#header-info").click(function(){
		$("html,body").animate({
			scrollTop:$('.info-start').offset().top - $('header').height()
		});
	});

	$("#header-exhibitors").click(function(){
		$("html,body").animate({
			scrollTop:$('.exhibitors-start').offset().top - $('header').height()
		});
	});

  	// var headerHeight = $('header').outerHeight();
  	var headerHeight = $('#title').outerHeight();

		$(window).on('load', function(){
				$('header').css('top', '-' + headerHeight + 'px');
		});
		$(window).on('scroll', function(){
			if($(window).scrollTop() == 0){
				$('header').css('top', '-' + headerHeight + 'px');
			}else{
				$('header').css('top', '0');
			}
		});


	//modal
	// $("#modals-wrapper").hide();
	//
	// $(".grades").on('click', '#_01_uchiumi', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_01_uchiumi_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_02_kasajima', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_02_kasajima_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_03_joyce', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_03_joyce_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_04_sun', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_04_sun_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_05_tatsumura', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_05_tatsumura_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_06_tanaka_aya', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_06_tanaka_aya_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_07_matsui', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_07_matsui").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_08_yamagisi', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_08_yamagisi").fadeIn(500);
	// });
	//
	// //M1
	// $(".grades").on('click', '#_01_abe', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_01_abe_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_02_imamiya', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_02_imamiya_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_03_kuwahara', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_03_kuwahara_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_04_sato', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_04_sato_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_05_shimokawa', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_05_shimokawa_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_06_sunagawa', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_06_sunagawa_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_07_taguchi', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_07_taguchi_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_08_tanaka_kurumi', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_08_tanaka_kurumi_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_09_taniguchi', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_09_taniguchi_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_10_nagata', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_10_nagata_modal").fadeIn(500);
	// });
	//
	// $(".grades").on('click', '#_11_nunoya', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$("#modals-wrapper").fadeIn(500);
	// 	$("#_11_nunoya_modal").fadeIn(500);
	// });
	//
	// $("#modals-wrapper").on('click', '.back-button', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$(".artist-modal").fadeOut(500);
	// 	$("#modals-wrapper").fadeOut(500);
	// });
	// $("#modals-wrapper").on("click", '#modals-bg', function(){
  // 		$('body').css('overflow', 'visible');
	// 	$(".artist-modal").fadeOut(500);
	// 	$("#modals-wrapper").fadeOut(500);
	// });
	//
	// $(".grades").on("click", ".artist-wrapper", function(){
	// });


	//footer
	$("#twitter-button").click(function(){
		window.location.href = "https://twitter.com/geidai_newmedia";
	});
	$("#facebook-button").click(function(){
		window.location.href = "https://www.facebook.com/Tokyo.Geidai.New.Media/";
	});
	$("#instagram-button").click(function(){
		window.location.href = "https://www.instagram.com/geidainewmedia/";
	});
});
