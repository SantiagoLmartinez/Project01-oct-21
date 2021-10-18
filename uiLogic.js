//aqui programaremos la logica que se va a comunicar con la interfaz de usuario
//capturamos el evento y evitamos que se refresque la  pagina por defecto
document.querySelector('#btnSavePerson').addEventListener("click", function(e){
e.preventDefault();
//console.log("funciona este btn")
savePerson();
});

//creamos funcion para obtener los datos del formulario y enviarlos a la lista de personas
function savePerson(){
    let sId =document.querySelector('#txtID').value;
    let sName =document.querySelector('#txtName').value;
    let sBirthday =document.querySelector('#txtBirthday').value;
    let sEmail =document.querySelector('#txtEmail').value;

    addPersonToSystem(sId,sName,sBirthday,sEmail);
    drawPersonTable();
}
//  drawPersonTable();
// creamoms funcion para mostrar en el DOM cada persona agregada
function drawPersonTable(){
    var  list = getPersonList(),
    tbody = document.querySelector('#listPersonTable  tbody');
    tbody.innerHTML= " ";

    for(var i =0; i<list.length; i++){
        var row = tbody.insertRow(i);
        var idCell = row.insertCell(0);
    idCell.innerHTML = list[i].sId;

    tbody.appendChild(row);
    }
}