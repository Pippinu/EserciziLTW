let checkCap = () => {
    let capField = document.getElementById("inputCap").value;
    if (capField.length != 5){
        confirm('CAP deve essere di 5 numeri, riprova!');
        document.getElementById("inputCap").value = null;
    }
}

let checkNameSurname = () => {
    let nameSurnameField = document.getElementById("inputNomeCognome").value;
    if (hasNumber(nameSurnameField)){
        confirm('Il campo Nome Cognome deve essere di testo\nNO NUMERI!');
        document.getElementById("inputNomeCognome").value = null;
    }
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

let checkBeforeSubmit = () => {
    let nameSurnameField = document.getElementById("inputNomeCognome").value;
    let sexField = document.getElementByName("optionSex").value;
    let ateneoField = document.getElementById("inputNomeCognome").value;
    let studenteLavoratoreField = fillStudenteLavoratoreArray();

    confirm(nameSurnameField.length + ' ' + sexField + ' ' + ateneoField + ' ' + studenteLavoratoreField.length + ' ');
    if(nameSurnameField.length > 0 && sexField !== '' && ateneoField !== 0){
        if(studenteLavoratoreField.length === 2){
            if(document.getElementById("lavoroSvoltoTextArea").value.length === 0)
            confirm("Hai selezionato Studente e Lavoratore, descrizione lavoro non puo essere vuota, riprova!");
            return false;
        }
        confirm("Dati corretti, Invio!");
        return true;
    }
    confirm("Dati non corretti, Riprova!");
    resetForm('myForm');
    return false;
}

let fillStudenteLavoratoreArray = () => {
    var array = []
    var checkboxes = document.querySelectorAll("input:checkbox[name='studenteLavoratore']:checked")

    for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
    }

    return array;
}

let resetForm = formName => document.getElementById(formName).reset();