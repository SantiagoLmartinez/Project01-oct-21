//aqui programaremos objetos y funcionabilidad del sistema

//creamos una variable para recorrer toda la lista de personas en un arreglo
let personList = [];

//creamos funcion para agregar personas a la lista
function addPersonToSystem(pId, pName, pBirthday, pEmail) {

    var newPerson= {
        id: pId,
        name: pName,
        birthday: pBirthday,
        email: pEmail
    };
    console.log(newPerson);
    personList.push(newPerson);
}

//creamos funcion que nos devuelve la lista de amigos  
function getPersonList(){
return personList;
}