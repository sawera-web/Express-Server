// importing express library from express modules
import express from "express";
// developing on express application
const app = express();
// listening to the port 3000
const PORT = 3000;
// defining a route for the root URL
app.get("/",(req,res)=>{
    res.send("Hello,World");
});
// starting the server and listning on the specfied port
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


