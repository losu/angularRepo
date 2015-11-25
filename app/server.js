var express = require('express');
var path = require('path');

var app = express();
var rootPath = path.resolve(__dirname);

app.use(express.static(rootPath));

app.all('/*', function (req, res) {
    res.status(200)
        .set({
            'content-type': 'text/html; charset=utf-8'
        })
        .sendFile(rootPath + '/index.html');
});

app.listen(8000);