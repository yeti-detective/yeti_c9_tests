var express = require('express');
var app = express();

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

app.get('/:date', function(req, res){
    // res.setRequestHeader(200, 'Content-Type: text/html');
    if(Boolean(Date.parse(req.params.date))){
        var date = new Date(req.params.date);
        var naturalDate = months[date.getMonth()] + ' ' + date.getDate().toString() + ', ' + date.getFullYear().toString();
    }
    res.send(
        `
        <h1>Yeti's Timestamp Generator</h1>
        <p>Add a natural-language date</p>
        <p class="example">ie: "February 14, 1998"</p>
        <p>or a unix timecode</p>
        <p class="example"></p>
        `
    );
});

app.get('*', function(req, res){
    res.send("put a date after the URL");
});

app.listen(8080, function(){
    console.log('Timestamp app listening on port 8080!');
})