var reqHand = require("./requestHandlers");

function route(handle, req, res, pathname) {
    console.log("About to route a request for " + pathname);
    switch (handle) {
        case "html":
            reqHand.index(req, res, pathname);
            break;
        default:
            break;
    }

}

exports.route = route;