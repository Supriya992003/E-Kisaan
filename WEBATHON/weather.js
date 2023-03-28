const express= require("express");
const https= require("https");

const app= express();

app.get("/",function(req,res){
  const url="https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=0a9a3b9c257b368c08905c6d74194bc1&units=metric"
  https.get(url, function(response))
  console.log(response.statusCode);

 res.send("server is up and running")
})




app.listen(3000,function()){
  console.log("server is running on port 3000");
}
