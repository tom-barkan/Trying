const express = require('express');
const app = express();
const port = 3000;


app.get("/", (req,res) => {
  
  res.send("Hello World again");
  
})

app.get("/server", (req,res) =>{
  
  res.write("server test body respose");
  res.end(); 
  
})

app.listen(port, () => {
  
  console.log(port);
})