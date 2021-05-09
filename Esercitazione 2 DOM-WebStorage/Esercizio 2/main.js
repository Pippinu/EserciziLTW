window.onload = function(){
    let c1 = $('.c1').get(0).addEventListener('mouseenter', function(event){
        confirm('BG: ' + JSON.parse(this.attributes));
    })
}
