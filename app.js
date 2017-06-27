var express = require('express');
var app = express();
app.use(express.static("public"));

var port = process.env.PORT || 8000

 server.listen(port, function () {
   console.log("Example app listening at http://%s:%s", host, port)
})