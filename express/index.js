const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    const n = req.query.n;
    console.log(n);
})
app.listen(3000)