window.onload = function(){
    // let c1 = document.getElementById('c1').addEventListener('mouseenter', function(event){
    //     console.log($('div').attr('background-color'));
    //     console.log($('div').attr('width'));

    // });

    $('#c1').click(function(){                     
        alert($('a',this).attr('id'));                    
    });
}

// $(document).ready(function () {
//     $('#c1').click(function(){                     
//         alert($('a',this).attr('id'));                    
//     });
// });
