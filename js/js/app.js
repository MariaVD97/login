var boton =document.getElementById('boton');

boton.addEventListener('click', ventana);

/* Modal basico
function ventana() {
    bootbox.alert('Hola mundo');
}

function ventana() {
    var nun1 =25;
    var num2 =5;
    var resultado = nun1+num2;
    bootbox.alert((String(resultado)));
}
function ventana() {
    var cadenada="hola mundo";
    bootbox.alert(cadenada);
}
function ventana() {    
    bootbox.alert({
      message: "hola mundo",
      size: 'small'  
    });
}
function ventana() {    
    bootbox.alert({
      message: "hola mundo",
      size: 'large'  
    });
}
function ventana() {    
    bootbox.alert({
      message: "Medio metro",
      size: 'extra-large'  
    });
}
function ventana() {    
    bootbox.alert({
      title: "Ventana",
      message: "Medio metro"           
    });
}*/

function ventana() {  
    var titulo="aprendiendo js";
    var mensaje="Hola mundo";
    
    bootbox.alert({
      title: titulo,
      message: mensaje           
    });
}
