
const express = require('express');
const app = express();



const port = 1234;


const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://127.0.0.1:27017/";


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next();
  }); 
  // For the search, if nothing in database, call API. Check database, if user clicks on 
  // search for more, then call API
  


app.get('/getAllStudents', (req, res) => {
    var obj = {};
    var rsp_obj = {};



    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if(err) throw err;

        var dbo = client.db("Gradebook");



        dbo.collection("students").find().toArray(function(err, result) {
            if (err) throw err;
    
            for(var i =0; i<result.length; i++){
                console.log(result[i]);
            }

            rsp_obj.student = result;
            rsp_obj.message = "All Students Found!"
            console.log(rsp_obj)
            return res.status(200).send(rsp_obj);
        })
    }
  )});


  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })