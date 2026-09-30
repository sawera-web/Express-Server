const express = require("express");
const app = express();
const PORT = 3000;
// middleware to read JSON date
app.use(express.json());
// POST route
app.post("/user" , (req,res) =>{
    console.log(req.body);
    res.send("User data recived!");
});
// start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});