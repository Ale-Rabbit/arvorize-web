// $(function() {
//   $('li[data-target*=#]').on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({ scrollTop: $($(this).attr('data-target')).offset().top}, 500, 'linear');
//   });
// });

$(document).ready(function(){

    // scroll slides on mouse scroll 
    $('#myCarousel').bind('mousewheel DOMMouseScroll', function(e){

        //scroll slides on swipe for touch enabled devices 
     	$("#myCarousel").on("touchstart", function(event){
     
            var yClick = event.originalEvent.touches[0].pageY;
        	$(this).one("touchmove", function(event){

            var yMove = event.originalEvent.touches[0].pageY;
            if( Math.floor(yClick - yMove) > 1 ){
                $(".carousel").carousel('next');
            }
            else if( Math.floor(yClick - yMove) < -1 ){
                $(".carousel").carousel('prev');
            }
        });

        $(".carousel").on("touchend", function(){
                $(this).off("touchmove");
            });

        });
    
    });
    
});

