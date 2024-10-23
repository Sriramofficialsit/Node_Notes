const Express = require("express");

// create a api server
const API_SERVER = Express();
//ROUTE /todos
//static files
API_SERVER.use(Express.static('public'))


API_SERVER.get("./products",function(request,response){
    console.log("HIT");
    console.log(request);
    // return response.send("/ -Request Received")
    const products = require("./products.json")
    console.log(products);
    return response.json({message:"Hello products fetched",sucess:true,data:products})
})

//ROUTE 2 
//PATH =/products


//start and listen incoming request to the server
API_SERVER.listen(3000,"localhost",function(){
    console.log("Server is running on port 3000");
    console.log(`http://localhost:3000`);
})

