import express from "express";

const app = express();
// lisnting to the port
const PORT = 5000;

//define the route
app.get("/",(req, res) =>{
    res.send("Sawera Bakhsh")
});
// Start the server
app.listen(PORT, () => {
    console.log(`server in running on http:localhost:${PORT}`)
});