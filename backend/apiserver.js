const express = require('express');
const app = express();
const port = 3000;


const MongoClient = require('mongodb').MongoClient;
const uri = MongoClient("mongodb://127.0.0.1:27017/:27017")






app.get('/getAllStudents', (req, res) => {
    var obj = {};
    var rsp_obj = {};



    MongoClient.connect(uri, {useUnifiedTopology: trure}, function(err, res){
        if(err) throw err;

        var dbo = client.db("Gradebook");
        

        var query = {"Name": "Jeffrey"}


        dbo.collection(Students).find(query).toArray(function(err, result) {
            if (err) throw err;
    
            for(var i =0; i<result.length; i++){
                console.log(result[i]);
            }
    
            rsp_obj.student = result;
            rsp_obj.message = "All Students Found!"
            return res.status(200).send(rsp_obj);
            client.close()
    
    
        })
    }
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })