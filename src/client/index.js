// var http = require('http')
// var fs = require('fs')
// function onRequest(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     fs.readFile('../client/index.html', null, function (err, data) {
//         if (err) {
//             res.writeHead(404)
//             res.write('file not found')
//         } else {
//             res.write(data)
//         }
//         res.end(data)
//     })
// }

// http.createServer(onRequest).listen(3200)

// var http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('Test Server page');
//     r

var http = require('http');
var fs = require('fs');
//var index = fs.readFileSync('./client/index.html');

http.createServer(function (req, response) {
    console.log(req.url);
    response.writeHead(200, { "Content-Type": "text/plain" });
    //response.write("nskdjfgkjs");
    //response.end();
    if (req.url === '/home' || req.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(response);


    }

    // const server = http.createServer((req, res) => {
    //     switch (req.url) {
    //         case "/":
    //             fs.readFile("./index.html", "UTF-8", (error, data) => {
    //                 res.writeHead(200, { "Content-Type": "text/html" });
    //                 res.end(data);
    //             });
    //             break;
    //     }




}).listen(9000);


// //-----------------------------------------------------------------------------------------

// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const port = 3000;
// const server = http.createServer((req, res) => {
//     switch (req.url) {
//         case "/":
//             fs.readFile("./index.html", "UTF-8", (error, data) => {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             });
//             break;
//         case "/highcharts.js":
//             let chartsPath = path.join(__dirname, req.url);
//             let fileStream1 = fs.createReadStream(chartsPath, "UTF-8");
//             res.writeHead(200, { "Content-Type": "text/javascript" });
//             fileStream1.pipe(res);
//             break;
//         case "/totalMatch.json":
//             let jsonPath1 = path.join("../output", req.url);
//             let fileStream2 = fs.createReadStream(jsonPath1, "UTF-8");
//             res.writeHead(200, { "Content-Type": "text/json" });
//             fileStream2.pipe(res);
//             break;
//         case "/matchesPerYear.json":
//             let jsonPath2 = path.join("../output", req.url);
//             let fileStream3 = fs.createReadStream(jsonPath2, "UTF-8");
//             res.writeHead(200, { "Content-Type": "text/json" });
//             fileStream3.pipe(res);
//             break;
//         case "/extraCount.json":
//             let jsonPath3 = path.join("../output", req.url);
//             let fileStream4 = fs.createReadStream(jsonPath3, "UTF-8");
//             res.writeHead(200, { "Content-Type": "text/json" });
//             fileStream4.pipe(res);
//             break;
//         case "/economicalBowlers.json":
//             let jsonPath4 = path.join("../output", req.url);
//             let fileStream5 = fs.createReadStream(jsonPath4, "UTF-8");
//             res.writeHead(200, { "Content-Type": "text/json" });
//             fileStream5.pipe(res);
//             break;
//         case "/app.css":
//             let cssPath = path.join(__dirname, req.url);
//             let fileStream6 = fs.createReadStream(cssPath, "UTF-8");
//             res.writeHead(200, { "Content-Type": "text/css" });
//             fileStream6.pipe(res);
//             break;
//     }
// });
// server.listen(port, error => {
//     if (error) {
//         console.log(`Something went wrong ${error}`);
//     } else {
//         console.log(`Listening on port ${port}`);
//     }
// });
