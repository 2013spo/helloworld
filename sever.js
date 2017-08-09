var url = require('url');
var http = require('http');
var path = require('path');

function serverStart(route) {
    function onRequest(req, res) {
        var pathname = __dirname + url.parse(req.url).pathname;
        if (path.extname(pathname) === "") {
            pathname += "/";
        }
        if (pathname.charAt(pathname.length - 1) === "/") {
            pathname += "index.html";
        }


        switch (path.extname(pathname)) {
            case ".html":
                route('html', req, res, pathname);
                break;
            default:
                route('default', req, res, pathname);
                break;
        }
    }

    http.createServer(onRequest).listen(8080, '127.0.0.1');
}


console.log("Server running at http://127.0.0.1:8080/");

exports.serverStart = serverStart;