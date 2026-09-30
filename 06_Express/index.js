const express = require("express");

const app = express();

const PORT = 3000;

app.get("/Sawera",(req, res) =>{
    res.send("Sawera Bakhsh")
});

app.get("/MHAK",(req, res) =>{
    res.send("hassnain khan")
});

// Start the server
app.listen(PORT, () => {
    console.log(`server in running on http:localhost:${PORT}`)
});