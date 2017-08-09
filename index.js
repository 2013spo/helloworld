var server = require("./sever");
var route = require("./router");

server.serverStart(route.route);

console.log('index');