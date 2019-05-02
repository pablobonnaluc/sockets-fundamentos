var socket = io();

// Escchar sucesos
socket.on('connect', function(){
    
    console.log('Conectado al servidor');
    
});

socket.on('disconnect', function(){

    console.log('Se ha perdido la conexion con el servidor');

});

// Enviar informacion
socket.emit('enviarMensaje',{
    usuario: 'Pablo',
    mensaje: 'Hola mundo'
}, function() {
    console.log('Respuesta server:');
});

// Escuchar informacion
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});