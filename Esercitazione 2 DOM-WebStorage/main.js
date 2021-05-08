let addObjLS = () => {
    let nome = document.getElementById("inputNome").value;
    let cognome = document.getElementById("inputCognome").value;
    let matricola = document.getElementById("inputMatricola").value;
    
    if(nome.length > 0 && cognome.length > 0 && matricola.length > 0){
        var obj = {
            nome: nome,
            cognome: cognome,
            matricola: matricola
        }

        localStorage.setItem(localStorage.length, JSON.stringify(obj));
        confirm('Aggiunto: \nNome: ' + obj.nome + '\n Cognome: ' + obj.cognome + '\n Matricola: ' + obj.matricola);
    }
}

let printLS = () => {
    document.getElementById('divPrintLS').innerHTML = '';
    for(var i=0; i < localStorage.length; i++){
        document.getElementById('divPrintLS').innerHTML += localStorage.getItem(i) + '\n';
    }
}

let clearLS = () => {
    localStorage.clear();
    document.getElementById('divPrintLS').innerHTML = '';
}