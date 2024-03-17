// GSAP animation for preloader
gsap.fromTo('.preloader', {
    left: '0%', // start from left -100%
    opacity: 1
}, {
    duration: 1,
    left: '0%', // cover full screen
    onComplete: () => {
        // Hide preloader after 1.5 seconds
        document.querySelector('.preloader').classList.add('hide-preloader');

        // GSAP animation to move back to left -100%
        gsap.to('.preloader', {
            duration: .7,
            left: '-100%',
            delay: .5, // delay for 1.5 seconds before starting to move back
            onComplete: () => {
                // Additional actions after the preloader goes back to left -100%
            }
        });
    }
});


let i=2;

	
$(document).ready(function(){
    var radius = 200;
    var fields = $('.itemDot');
    var container = $('.dotCircle');
    var width = container.width();
radius = width/2.5;

     var height = container.height();
    var angle = 0, step = (2*Math.PI) / fields.length;
    fields.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }
        
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
    
    
    $('.itemDot').click(function(){
        
        var dataTab= $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+ dataTab).addClass('active');
        i=dataTab;
        
        $('.dotCircle').css({
            "transform":"rotate("+(360-(i-1)*36)+"deg)",
            "transition":"2s"
        });
        $('.itemDot').css({
            "transform":"rotate("+((i-1)*36)+"deg)",
            "transition":"1s"
        });
        
        
    });
    
    setInterval(function(){
        var dataTab= $('.itemDot.active').data("tab");
        if(dataTab>6||i>6){
        dataTab=1;
        i=1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="'+i+'"]').addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+i).addClass('active');
        i++;
        
        
        $('.dotCircle').css({
            "transform":"rotate("+(360-(i-2)*36)+"deg)",
            "transition":"2s"
        });
        $('.itemDot').css({
            "transform":"rotate("+((i-2)*36)+"deg)",
            "transition":"1s"
        });
        
        }, 3000);
    
});


$("#view").click(function(){
    $("#num-one").toggleClass("auto-height");
});
$("#view-2").click(function(){
    $("#num-two").toggleClass("auto-height");
});

$("#view-3").click(function(){
    $("#num-three").toggleClass("auto-height");
});
