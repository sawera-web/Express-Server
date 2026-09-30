// delete route
App.delete("/user", (req,res) =>{
    console.log("Delete request received");
    // handle the delete logic here
    res.json({
        message: "User deleted successfully"
    });
});