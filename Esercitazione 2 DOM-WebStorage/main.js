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
    }
}

let printLS = () => {
    // for()
}