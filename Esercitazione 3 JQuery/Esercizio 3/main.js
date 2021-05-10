window.onload = function(){

    $('#btn1').click(caricaDocumento);
    $('#btn2').click(caricaDocumento);
    $('#btn3').click(caricaDocumento);
    $('#btn4').click(caricaDocumento);

    function caricaDocumento(e) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = gestisciResponse;
        httpRequest.open("GET", e.target.innerHTML+".html", true);
        httpRequest.send();
    }
    function gestisciResponse(e) {
        if (e.target.readyState == 4 && e.target.status == 200) {
        document.getElementById("documentID").innerHTML = e.target.responseText;
        }
    }
}