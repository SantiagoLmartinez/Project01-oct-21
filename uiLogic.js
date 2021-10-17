//aqui programaremos la logica que se va a comunicar con la interfaz de usuario

//capturamos el evento del boton y llamamos a la funcion
document.querySelector('#btnSavePerson').addEventListener('click', savePerson);

function savePerson(){

    var sId = document.querySelector('#txtId').value;
    var sName = document.querySelector('#txtName').value;
    var sBirthday = document.querySelector('#txtBirthday').value;
    var sEmail = document.querySelector('#txtEmail').value;

    addPersonToSystem(sId,sName,sBirthday,sEmail);
}