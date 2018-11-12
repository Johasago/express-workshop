var express = require('express');
var formidable = require('express-formidable');
var fs = require('fs');
var app = express();

app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});

app.use(express.static("public"));

app.use(formidable());

app.post('/create-post', function(req, res) {
    var timestamp = Date.now();
    var newPost = req.fields.blogpost;

    var postsFile = __dirname + '/data/posts.json';

    fs.readFile(postsFile, function(error, file) {
        var parsedFile = JSON.parse(file);
        parsedFile[timestamp] = newPost;
        console.log(parsedFile);
        fs.writeFile(postsFile, JSON.stringify(parsedFile, null, 2), function(error){
    });;
});
});

app.get('/get-posts', function(req, res){
    var postsFile = __dirname + '/data/posts.json';
        res.sendFile(postsFile);
})