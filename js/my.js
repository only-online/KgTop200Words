$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "db/db.xml",
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {


    $(xml).find("menu").each(function () {

        $("#menu").append('<li class="col-md-6 col-sm-6 col-xs-12" ><a href="'+$(this).find("url").text()+'"onclick="return false;" data-ajax="false" data-transition="slidedown" class="dbdb"><div class="designbox1"><img src="'+ $(this).find("img").text() +'"class="img-thumbnail" /><h3>'+ $(this).find("title").text() +'<br/><span> '+ $(this).find("ruseng").text() +'</span></h3></div></a></li>');

    });
    var a =1;
    $('.dbdb').click(function(){
        var b = $(this).attr('href');
        window.a = b;
        $('.side-body').fadeOut(100);
        $('.site-page').fadeIn(100);

  });
  $('.site-page').append('<p>'+a+'</p>');
};




$(function () {
    $('.navbar-toggle').click(function () {
        $('.navbar-nav').toggleClass('slide-in');
        $('.side-body').toggleClass('body-slide-in');
        $('#search').removeClass('in').addClass('collapse').slideUp(200);

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').toggleClass('slide-in');

    });

   // Remove menu for searching
   $('#search-trigger').click(function () {
        $('.navbar-nav').removeClass('slide-in');
        $('.side-body').removeClass('body-slide-in');

        /// uncomment code for absolute positioning tweek see top comment in css
        //$('.absolute-wrapper').removeClass('slide-in');

    });
});



// Put your custom code here
$('document').ready(function () {



	//  run on page start to pronounce first word

	 $(document).on('swipeleft swiperight',function(event, data){
	 	      	event.stopImmediatePropagation();
				if(event.type =="swipeleft"){

					 nextClick();
				}
				else if(event.type =="swiperight")
				{
					  prevClick();
				}

	 	});


    $('.play').click(function(){

			showTranslationAndSoundPlay();

	  });

      $('#next').click(function(){
		  nextClick();

  	  });

      $('#prev').click(function(){
		  prevClick();
  	  });




	  var ChangeImage = function($param) { alert($param); $('#itemimage').attr("src", 'assets/'+nText[$param].img+'.jpg');   };
	  var ChangeText = function($param) {
		  $('#mainnum').replaceWith('<h3 id="mainnum">'+nText[$param].main+'</h3>');
		  $('#text').replaceWith('<h4 id="text">'+nText[$param].mtext+'</h4>');
     	};

	  var nextClick = function() {
		  if(number==maxslides){number=0}
	  	  number=number+1;

			if(number<=maxslides && number>0){
				ChangeImage(number);
				ChangeText(number);
				hideTranslation();
				//PlaySound(number);
			}
			else
			{
				number=number-1;
			}
		};



	  var prevClick = function() {
		  if(number==1){number=maxslides+1}
		  number=number-1;

  			if(number<=maxslides && number>0){
				ChangeImage(number);
				ChangeText(number);
				hideTranslation();
				//PlaySound(number);
			}
			else
			{
				number=number+1;
			}

	  	};

    	  var showTranslationAndSoundPlay = function() {

		   $('#mainnum').css("visibility", "visible");

		   PlaySound(number);

    		};

      	  var hideTranslation = function() {

				$('#mainnum').css("visibility", "hidden");

      		};



  	  var PlaySound = function($param) {
            //alert("111");
            //$.playSounds('assets/1.mp3');
	  	 $.playSounds('assets/'+nText[$param].img+'.mp3');
         //alert("222");
  	   };

	   $(document).keydown(function(e) {
	       switch(e.which) {
	           case 37: // left
			   prevClick();
	           break;

	           case 38: // up
			    showTranslationAndSoundPlay();
	           break;

	           case 39: // right
			   nextClick();
	           break;

	           case 40: // down
			    showTranslationAndSoundPlay();
	           break;

	           default: return; // exit this handler for other keys
	       }
	       e.preventDefault(); // prevent the default action (scroll / move caret)
	   });


 });


 /* -----------  --------------- */

 function exitFromApp()
        {
             navigator.app.exitApp();
        }


 (function($){

   $.extend({
     playSounds: function(){
       return $("<embed src='"+arguments[0]+"' class='mp3player' autostart='true' loop='false' class='playSound'>").appendTo('body');
     }
   });

 })(jQuery);



     function onDeviceReady() {
       document.removeEventListener('deviceready', onDeviceReady, false);


       // display a banner at startup

     }

     document.addEventListener("deviceready", onDeviceReady, false);


    //  $currenturl = $(window.location).attr('href');
    //  alert($currenturl);
    //  $currenturl = $currenturl.substring(0, $currenturl.length - 5);
    //  window.location.replace($currenturl);
