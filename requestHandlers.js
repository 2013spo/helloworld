var querystring = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable'),
    path = require('path');



function index(req, res, pathname) {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.exists(pathname, function(exists) {
        if (!exists) {
            pathname = __dirname + "/Error.html";
        }
        fs.readFile(pathname, function(err, data) {
            res.end(data);
        })
    })
}

exports.index = index;