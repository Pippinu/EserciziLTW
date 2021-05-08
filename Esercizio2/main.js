let checkCap = () => {
    let capField = document.getElementById("inputCap").value;
    if (capField.length != 5 || !Number.isInteger(parseInt(capField, 10))){
        confirm('CAP deve essere di 5 numeri, no lettere, riprova!');
        document.getElementById("inputCap").value = null;
        return null;
    }
    return capField;
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

    let nameSurnameField = document.forms['myForm']['inputNomeCognome'].value;
    let sexField = getSexFieldValue();
    let ateneoField = document.forms['myForm']['selectAteneo'].value;
    let capField = checkCap();
    let studenteLavoratoreField = fillStudenteLavoratoreArray();

    if(nameSurnameField.length > 0 && sexField.localeCompare('') && ateneoField !== 0){
        if(studenteLavoratoreField.length === 2){
            if(document.getElementById("lavoroSvoltoTextArea").value.length === 0){
                confirm("Hai selezionato Studente e Lavoratore, descrizione lavoro non puo essere vuota, riprova!");
                return false;
            }
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
    var checkboxes = document.querySelectorAll(".studenteLavoratoreCB:checked")

    for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
    }
    
    return array;
}

let getSexFieldValue = () => {
    var radios = document.getElementsByName('optionsSex');

    for (var i = 0, length = radios.length; i < length; i++){
        if (radios[i].checked) return radios[i].value;
    }

    confirm('Non hai inserito sesso, riprova!');
    return '';
}

let resetForm = formName => document.getElementById(formName).reset();