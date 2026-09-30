const express = require("express");
const app = express();
const PORT = 5000;
app.use(express.json());

app.post("/user",(req,res) =>{
    console.log("POST data:", req.body);
    res.send("User Created")
});
app.put("/user", (req,res) =>{
    const { name,email } = req.body;
    res.json({message:"user updated",name,email})
});
// 404 route
app.use((req,res) =>{
    res.status(404).send("Poute not found")
});
// start server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});