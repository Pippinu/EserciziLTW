let checkForm = formName => {

    //Assegno i valori dei campi "Nome", "Cognome", "Matricola", ecc.
    let cognome = document.forms[formName]["inputCognome4"].value;                          //Check notEmpty
    let nome = document.forms[formName]["inputNome4"].value;                                //Check notEmpty
    let matricola = parseInt(document.forms[formName]["inputMatricola4"].value, 10);        //Check isNumber
    let regione = document.forms[formName]["selectResidenza"].value;                        //Check !== -1
    let email = document.forms[formName]["inputEmail"].value;                               //Check notEmpty
    let telefono = document.forms[formName]["inputTelefono4"].value;                        //Check notEmpty
    
    if(cognome.length > 0 && nome.length > 0 && Number.isInteger(matricola) && regione !== -1 && (email.length > 0 || telefono.length > 0)) {
        console.log(cognome.length + ' ' + nome.length  + ' ' + Number.isInteger(matricola) + ' ' + regione + ' ' + email.length + ' ' + telefono.length);
        confirm("DATI INVIATI");
        return true;
    }
    console.log(cognome.length + ' ' + nome.length  + ' ' + Number.isInteger(matricola) + ' ' + regione + ' ' + email.length + ' ' + telefono.length);
    confirm("Dati non inviati, compila tutti i campi. \nNB: Un campo tra email o telefono deve essere valido!");
    resetForm("myForm");
    return false;
}

let resetForm = formName => document.getElementById(formName).reset();