//Carrega o modulo server.js
var Server = require('./server'),

    //Carrega o objeto io
    socketServer = Server.socketServer,

    //Carrega o objeto httpServer
    webServer = Server.webServer,

    UserHandling = require('./userhandling'),

    userHandling = new UserHandling(socketServer);

webServer.listen(9000);

