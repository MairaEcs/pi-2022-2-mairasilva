var socket = io();

var nome = document.getElementById('nome');
var user;
var para = 'todos';
var chat;

//const users = [];
//var userList = new Set();

function setUsername(){ // btn entrar 
    if(nome.value.trim()){
        socket.emit('setUsername', nome.value);
    }
    
}

socket.on('userSet', (data) => {
    user = data.username;

    if(user){
        document.body.innerHTML = 
        `<div id="container-chat">
            <div id="lista">
            </div>
            <div id="chat">
                <div id="cabecalho">todos</div>
                <div id="corpo-mensagens"></div>
                <div id="digitando-mensagens"></div>
                <div id="enviar-mensagens">
                    <textarea name="" id="area-mensagem" placeholder="Digite sua mensagem aqui ${user}..." rows="3"></textarea>
                    <button type="button" name="" id="enviar" onclick="sendMessage()"><i class="fa-regular fa-paper-plane"></i></button>
                </div>
            </div>
        </div>`;

        var mensagem = document.getElementById('area-mensagem');

        mensagem.addEventListener("keypress", () => {
            socket.emit("typing", nome.value);
        });

        chat = document.getElementById('corpo-mensagens');
    }

});

socket.on('list', (data) => { // lista de usuários
    var lista = document.getElementById('lista');
    var usuariosLista = "";
    
    usuariosLista = 
    `<div class="todos" onClick="clicarUsuario(this)">
        <input type="text" name="nome" value="todos" disabled>
    </div>`;

    data.forEach((item, index) => {
        
        if(item == nome.value){
            usuariosLista += 
            `<div class="${item}">
                <input type="text" name="nome" value="${item} (yourself)" disabled>
            </div>`;
        }else{
            usuariosLista += 
            `<div class="${item}" onClick="clicarUsuario(this)">
                <input type="text" name="nome" value="${item}" disabled>
            </div>`;
        }
        
    });
    
    lista.innerHTML = usuariosLista;
});

let clicarUsuario = (e) => {
    
    para = e.className;
    document.getElementById('cabecalho').innerHTML = para;

    chat.innerHTML = "";    
}

let userDisconnected = (e) => {
    socket.emit('messageDisconnected', `${nome.value} desconectou-se do chat`);

}

function sendMessage(){
    var msg = document.getElementById('area-mensagem').value;
    if(msg){
        socket.emit('chat message', {user: user, para: para, message: msg});
        document.getElementById('area-mensagem').value = '';
    }

    var corpoMensagem = document.getElementById('corpo-mensagens');

    corpoMensagem.scrollTo(0, corpoMensagem.scrollHeight);

}

socket.on('chat message', (data) => {
    if((data.para == para && data.user == user) || (data.para == user && data.user == para) && para != 'todos'){
        chat.innerHTML += '<div class="mensagem"><b>' + data.user + ' - </b>' + data.message + '</div>';
        
    }else if(para == 'todos' && data.para == 'todos'){
        chat.innerHTML += '<div class="mensagem"><b>' + data.user + ' - </b>' + data.message + '</div>';
    }
    //console.log(chat);
});

socket.on('messageConnected', (data) => { // messagem usuário conectado
    var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<p class="estado-usuario">${data} conectou-se no chat</p>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;

    initReactiveProperties(data);
    this.users.push(data);

    socket.emit('list', data);

});

socket.on('messageDisconnected', (data) => { // messagem usuário desconectado
    var chat = document.getElementById('corpo-mensagens').innerHTML;
    chat += `<p class="estado-usuario">${data}</p>`;
    document.getElementById('corpo-mensagens').innerHTML = chat;
});

socket.on("typing", (data) => {
    document.getElementById('digitando-mensagens').innerHTML = `<p id="digitando">${data} está digitando...</p>`;
    setTimeout(() => {
        document.getElementById('digitando').innerHTML = "";
    }, 3000);
});
