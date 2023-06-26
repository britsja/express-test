const express = require('express');

const app = express();

app.listen(3000, function() {
    console.log("Server started and listening on port 3000");
});

app.get("/", function(req, res) {
    res.send('<h1>Hello Expresssss</h1>');
})

app.get("/contact", function(req, res) {
    res.send('<h1>Contact Page</h1>');
})

app.get("/about", function(req, res) {
    res.send('<h1>About Page</h1><p>I am me</p>');
    
})