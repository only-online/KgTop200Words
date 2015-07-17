


// Put your custom code here
$('document').ready(function () {

  var hash = window.location.hash.substring(1);
  var nText = [];
  nText = numarray;
  //alert (hash);

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


    $('#play').click(function(){
			showTranslationAndSoundPlay();

	  });

      $('#next').click(function(){
		  nextClick();

  	  });

      $('#prev').click(function(){
		  prevClick();
  	  });




	  var ChangeImage = function($param) {   $('#numberimage').attr("src", 'assets/'+nText[$param].img+'.jpg');   };
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
        //alert("aaa");
	  	 $.playSounds('assets/'+nText[$param].img+'.mp3');
       //alert(nText[$param].img);
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
      // alert("<embed src='"+arguments[0]+"' hidden='true' autostart='true' loop='false' class='playSound'>");
       $('#sound1').attr("src", arguments[0]); // = arguments[0];
       document.getElementById('sound1').play();
      // return $("<embed src='"+arguments[0]+"' hidden='true' autostart='true' loop='false' class='playSound'>").appendTo('body');
     }
   });

 })(jQuery);



     function onDeviceReady() {
       document.removeEventListener('deviceready', onDeviceReady, false);


       // display a banner at startup

     }

     document.addEventListener("deviceready", onDeviceReady, false);
