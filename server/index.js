const express = require('express')

const app = express()

app.get("/api", ()=>{
    console.log("the server has received the req")
})

app.listen(3001, ()=> {console.log('listening on port 3001')})