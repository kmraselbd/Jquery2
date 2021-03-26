//hide by click
$(document).ready(function(){
    $('#hide').click(function(){
        $('p').hide('slow');
    })
})

//hide by click
$(document).ready(function(){
    $('#show').click(function(){
        $('p').show(1000);
    })
})

//hide & show by click togather
$(document).ready(function(){
    $('.hs').click(function(){
        $('p').toggle(1000);
    })
})

//use of fadeIn
$(document).ready(function(){
    $('#khan1').click(function(){
        $('.box1').fadeIn('fast');
        $('.box2').fadeIn('slow');
        $('.box3').fadeIn(2000);
    })
})

//use of fadeOut
$(document).ready(function(){
    $('#khan2').click(function(){
        $('.box1').fadeOut(2000);
        $('.box2').fadeOut('slow');
        $('.box3').fadeOut('fast');
    })
})

//use of fade toggle
$(document).ready(function(){
    $('.khan3').click(function(){
        $('.box1').fadeToggle();
        $('.box2').fadeToggle('slow');
        $('.box3').fadeToggle(2000);
    })
})
// use of slide toggle;
$(document).ready(function(){
    $('.khan4').click(function(){
        $('.khan5').slideToggle(1000);
    })
})

//use of animate;
$(document).ready(function(){
    $('.khan6').click(function(){
        $('.khan7').animate({
            left: '200px',
            opacity: 0.7,
            width: '300px',
        }, 2000);
        $('.khan7').css({
            background: 'yellow'
        })
    })
})

//use slide down & stop;
$(document).ready(function(){
    $('.khan8').click(function(){
        $('.khan9').slideDown(4000);
    });
    $('#btn').click(function(){
        $('.khan9').stop();
    })
})

//use of callback;
$(document).ready(function(){
    $('.khan10').click(function(){
        $('.khan11').hide('slow', function(){
            alert('It is callback function');
        });
        
    })
})

//use of slide up & down;
$(document).ready(function(){
    $('.khan12').click(function(){
        $('.khan13').css('color', '#000')
        .slideUp(2000)
    .slideDown(2000)
    .css('background-color', 'yellow');
    })
    
})