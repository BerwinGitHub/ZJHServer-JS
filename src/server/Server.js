var configs = require('../dynamic/configs');

var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

console.log("Server listen on:" + configs.port);
server.listen(configs.port);

/**
 * 用户连接到服务器
 */
io.sockets.on('connection', function (socket) {
    console.log("A user connected.");
    socket.on("event", function (data) {
        console.log("[DATA]-" + JSON.stringify(data));
    });
});

/**
 * 用户断开连接
 */
io.sockets.on("disconnect", function (socket) {
    console.log("A user disconnect.");
});
