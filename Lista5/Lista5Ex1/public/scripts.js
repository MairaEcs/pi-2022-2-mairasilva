var socket = io();

var nome;
var user;

function setUsername(){ // btn entrar 
    nome = document.getElementById('nome').value;
    socket.emit('setUsername', nome);
};

socket.on('userSet', function(data){
    user = data.username;
    //anotheruser = data.other;
    if(user){
        document.body.innerHTML = 
        `<div id="container-chat">
            <div id="lista">
                <div class="${user}">
                    <input type="text" name="nome" value="${user}" disabled>
                </div>
            </div>
            <div id="chat">
                <div id="cabecalho">
                </div>
                <div id="corpo-mensagens"></div>
                <div id="enviar-mensagens">
                    <input type="text" name="" id="mensagem" placeholder="Digite uma mensagem">
                    <button type="button" name="" id="enviar" onclick="sendMessage()">Enviar</button>
                </div>
            </div>
        </div>`;
    }
});

socket.on('list', function(data){ // lista de usuários
    var lista = document.getElementById('lista').innerHTML;
    lista += 
    `<div class="${data}" onClick="clicarUsuario(this)">
        <input type="text" name="nome" value="${data}" disabled>
    </div>`;
    document.getElementById('lista').innerHTML = lista;
});

let clicarUsuario = (e) => {
    var getClass = e.className;

    //var salaNome = $("."+getClass).children("input").val();
    document.getElementById('cabecalho').innerHTML = getClass;
    
};

let userDisconnected = (e) => {
    socket.emit('messageDisconnected', `${nome} desconectou-se do chat`);
};

function sendMessage(){
    var msg = document.getElementById('mensagem').value;
    if(msg){
        socket.emit('msg', {message: msg, user: user});
        document.getElementById('mensagem').value = '';
    }
}

socket.on('newmsg', function(data){
    if(user){
        var chat = document.getElementById('corpo-mensagens').innerHTML;
        chat += '<div><b>' + data.user + '</b>: ' + data.message + '</div>';
        document.getElementById('corpo-mensagens').innerHTML = chat;
    }
})

socket.on('messageConnected', function(data){ // messagem usuário conectado
    var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<p>${data} conectou-se no chat</p>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;
});

socket.on('messageDisconnected', function(data){ // messagem usuário desconectado
    //console.log(data.user);
    var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<p>${data}</p>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;
});


/*socket.on('message', function(data){
    console.log(data.user);
    //digitando();

    //chat.scrollTop = chat.scrollHeight;
    var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<p><b>${user}:</b> ${msg}</p>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;
});*/


/*function list(){
    var nome = document.getElementById('nome').value;
    socket.emit('setUsername', nome);
    var msg = document.getElementById('mensagem').value;
    if(msg){
        socket.emit('msg', {message: msg, user: user});
        document.getElementById('mensagem').value = '';
    }
}

socket.on('userList', function(data){
    if(user){
        console.log(data.user);
        var chat = document.getElementById('corpo-mensagens').innerHTML;
        chat += '<div><b>' + data.user + '</b>: ' + data.message + '</div>';
        document.getElementById('corpo-mensagens').innerHTML = chat;
    }
})*/

/*var socket = io();

//var user = document.getElementById('nome');
var user = window.location.search.slice(6);
console.log(user);

var btn = document.getElementById('enviar');
var msg = document.getElementById('mensagem');

var chat = document.getElementById('corpo-mensagens');

// escutando evento no front
socket.on('message', function(user, msg){
    console.log(user, msg);
    outputMessage(user, msg);
    //digitando();

    //chat.scrollTop = chat.scrollHeight;
    /*var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<p><b>${user}:</b> ${msg}</p>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;
});

btn.addEventListener('click', function(e) {
    e.preventDefault();

    //const msg = e.target.elements.mensagem.value;
    
    if(msg.value){
        //console.log(msg);
        socket.emit('chat message', msg.value, user.value);
        //user.value = '';
        msg.value = '';
        msg.focus();
    }
    
    
});

// mensagem para os usuários conectados quando um novo usuário se conectar/desconectar.

function outputMessage(user, msg){
    //const divMessage = document.createElement('div');
    //divMessage.classList.add('mensagem-enviadas');
    //divMessage.innerHTML = `<p>${msg}</p>`;
    var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<div><p><b>${user}</b>${msg}</p></div>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;
}

/*
onkeyup="digitando()"
function digitando(){
    var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<div><p>Usuário está digitando...</p></div>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;
}*/
