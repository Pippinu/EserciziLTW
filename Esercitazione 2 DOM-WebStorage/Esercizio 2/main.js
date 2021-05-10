window.onload = function(){
    //VERSIONE JS PLAIN
    var c1Array = document.getElementsByClassName('c1');
    var divArray = document.getElementsByTagName('DIV');
    var spanC2Array = document.querySelectorAll('span.c2');

    for(var i = 0; i < divArray.length; i++){
        divArray[i].addEventListener('mouseenter', function(){
            if(window.getComputedStyle(this, null).getPropertyValue('background-color') === 'rgb(255, 0, 0)') this.style.backgroundColor = 'grey'
            else this.style.backgroundColor = 'red';
        })
    }

    for(var i = 0; i < c1Array.length; i++){
        c1Array[i].addEventListener('click', function(){
            this.style.backgroundColor = 'blue';
        })
        c1Array[i].addEventListener('dblclick', function(){
            this.style.display = 'none';                        //nasconde e rimuove dalla pagina
            //this.style.visibility = 'hidden';                 //nasconde soltanto
        })
    }

    let spanC2DefaultColor; 

    Array.prototype.forEach.call(spanC2Array, el => {
        el.addEventListener('mouseenter', function(){
            spanC2DefaultColor = window.getComputedStyle(this, null).getPropertyValue('background-color');
            this.style.backgroundColor = 'green'
        })
        el.addEventListener('mouseout', function(){
            this.style.backgroundColor = spanC2DefaultColor;
        })
    });

    //VERSIONE JQUERY
    // let spanC2DefaultColor = $('span.c2').css('backgroundColor');
    
    // $('div').mouseenter(function(){
        
    // var bgColor = $(this).css('backgroundColor');

    // if( bgColor === 'rgb(128, 128, 128)'){
    //     $(this).attr('style',  'background-color: red');
    // } else {
    //     $(this).attr('style', 'background-color: grey');
    // }
    // console.log(bgColor)
    // })

    // $('.c1').click(function(){
    //     $(this).attr('style', 'background-color: blue');
    // })
    // $('.c1').dblclick(function(){
    //     $(this).hide();
    // })

    // $('span.c2').mouseenter(function(){
    //     $(this).attr('style',  'background-color: green');
    // })
    // $('span.c2').mouseleave(function(){
    //     $(this).attr('style',  spanC2DefaultColor);
    // })
}


