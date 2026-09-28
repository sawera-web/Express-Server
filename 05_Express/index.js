const express = require("express");

const app = express();
// lisnting to the port
const PORT = 3000;

//define the route
app.get("/",(req, res) =>{
    res.send("Wellcome Everyone")
});
// Start the server
app.listen(PORT, () => {
    console.log(`server in running on http:localhost:${PORT}`)
});