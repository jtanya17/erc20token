
var express = require("express");
var maincontractscript = require("./web3.js-develop/web3.js-develop/example/node-app1");
var app = express();
var bodyParser = require('body-parser');
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/View'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/Script'));
app.use(express.static('public'));
//Store all JS and CSS in Scripts folder.
var router = express.Router(); // get an instance of the express Router
router.use(function (req, res, next) {
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

app.use('/api', router);
var dummyvar;
var dummyvar1;
var dummyvar3;
var dummyvar4;
var dummyvar5;
var dummyvar7;
function getBody(encoding) {
    if (this.statusCode >= 300) {
        var err = new Error('Server responded with status code ' + this.statusCode + ':\n' + this.body.toString(encoding));
        err.statusCode = this.statusCode;
        err.headers = this.headers;
        err.body = this.body;
        throw err;
    }
    return encoding ? this.body.toString(encoding) : this.body;
}

var request = require('then-request');


app.post("/api/Upload", function (req, res) {

    var gotdata = req.body;
    var brrr = JSON.stringify(gotdata);
    console.log(brrr);
    console.log(gotdata.imageurl);
    console.log('hiiiiii');
    console.log(gotdata.usernamefacet);
    //logger.write(gotdata.imageurl);
    var imagdatat = gotdata.imageurl
    var useridgivenfromFrontend = gotdata.userprovidedtext;
    var data1 = imagdatat.replace(/^data:image\/\w+;base64,/, "");

  
    console.log('done after the new function test2');
})

//var stageobj = checkallowance();
app.get("/api/search", function (req, res) {

    //var gotdata = req.body;
    // console.log("hi");
    // //console.log(req);
    // var brrr = JSON.stringify(gotdata);
    // //console.log(brrr);
    // //console.log(gotdata.imageurl);
    // console.log('hiiiiii');
    // //console.log(gotdata.usernamefacet);
    // //logger.write(gotdata.imageurl);
    // var imagdatat = gotdata.imageurl
    // var data1 = imagdatat.replace(/^data:image\/\w+;base64,/, "");
     var rernfrmstr=  maincontractscript.checkallowance()  ;
    console.log('kar diya--',rernfrmstr)
    res.send(rernfrmstr);

    console.log('done after the new function');

});


app.get("/api/transfer", function (req, res) {

     var rernfrmstr=  maincontractscript.transfer()  ;
    console.log('kar diya transfer --', rernfrmstr )
    res.send(rernfrmstr);

    console.log('done after the new function');

});

app.get("/api/totalsupply", function (req, res) {

    var rernfrmstr=  maincontractscript.totaltokensupply()  ;
   console.log('kar diya totalsupply --', rernfrmstr )
   res.send('totalsupply is --',rernfrmstr);

   console.log('done after the new function');

});

app.get("/api/mainholderbalance", function (req, res) {

    var rernfrmstr=  maincontractscript.getbalanceOfremaingtoken()   ;
   console.log('kar diya mainholderbalance --', rernfrmstr )
   res.send('mainholderbalance is --',rernfrmstr);

   console.log('done after the new function');

});

app.get("/api/getbalanceOfBuyer", function (req, res) {

    maincontractscript.getbalanceOfBuyer(function(result){
        res.send('getbalanceOfBuyer is --',result);
    
       })  ;
   //console.log('kar diya getbalanceOfBuyer --', rernfrmstr );
  
   console.log('done after the new function');

});


app.get('/', function (req, res) {

    res.sendFile(__dirname + '/index.html');
    //It will find and locate index.html from View or Scripts
});
// app.get('/about', function (req, res) {
// res.sendFile('/about.html');
// });
app.listen(3033);
console.log("Running at Port 3033");


