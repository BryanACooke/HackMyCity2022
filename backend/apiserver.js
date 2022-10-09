
const express = require('express');
const app = express();



const port = 3000;


const MongoClient = require('mongodb').MongoClient;
var uri = "mongodb://127.0.0.1:27017/";





app.get('/getAllStudents', (req, res) => {
    var obj = {};
    var rsp_obj = {};



    MongoClient.connect(uri, {useUnifiedTopology: true}, function(err, client){
        if(err) throw err;

        var dbo = client.db("Gradebook");
         var query = {"Name": "Jeffrey"}


        dbo.collection("students").find(query).toArray(function(err, result) {
            if (err) throw err;
    
            for(var i =0; i<result.length; i++){
                console.log(result[i]);
            }
    
            rsp_obj.student = result;
            rsp_obj.message = "All Students Found!"
    
         var queryTwo = {"StudentID": rsp_obj.student[0].StudentID}


        dbo.collection("grades").find(queryTwo).toArray(function(err, resL) {
            if (err) throw err;
    
            for(var i =0; i<resL.length; i++){
                console.log(result[i]);
            }
    
            rsp_obj.studentData = resL;
            rsp_obj.messageData = "All Students Found!";

            for(let z=0; z < rsp_obj.studentData.length; z++)
            {
                console.log(rsp_obj.studentData[z].Score);
            }

            return res.status(200).send(rsp_obj);
            client.close()
    

            }

        
        
        )})
    }
  )});
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })