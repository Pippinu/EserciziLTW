window.onload = function(){
    $('.c1').click(function(){
        $(this).attr('style', 'background-color: blue');
    })

    $('.c1').dblclick(function(){
        $(this).hide();
    })

    $('span.c2').click(function(){
        //$('.c1') seleziona tutti gli elementi di classe c1
        $('.c1').hide();
    })
}