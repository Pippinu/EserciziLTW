window.onload = function(){
    /* let c1 = $('.c1', '.c2').addEventListener('mouseenter', function(event){
        confirm('BG: ' + this.attr(''));
    }) */

   /*  $('div.col').click(function(){
        confirm('This DIV is ' + $(this).css('background-color'));
    }) */

    /* $('div.c1').mouseenter(function(){
        $(this).attr('style', 'background-color: red');
    })

    $('div.c2').mouseenter(function(){
        $(this).attr('style', 'background-color: grey');
    }) */

    let spanC2DefaultColor = $('span.c2').css('backgroundColor');
    
    $('div').mouseenter(function(){
        
        var bgColor = $(this).css('backgroundColor');

        if( bgColor === 'rgb(128, 128, 128)'){
            $(this).attr('style',  'background-color: red');
        } else {
            $(this).attr('style', 'background-color: grey');
        }
        console.log(bgColor)
    })

    $('.c1').click(function(){
        $(this).attr('style', 'background-color: blue');
    })
    $('.c1').dblclick(function(){
        $(this).hide();
    })

    $('span.c2').mouseenter(function(){
        $(this).attr('style',  'background-color: green');
    })
    $('span.c2').mouseleave(function(){
        $(this).attr('style',  spanC2DefaultColor);
    })

}


