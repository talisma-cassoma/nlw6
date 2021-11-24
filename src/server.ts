import express from "express"

const app = express()

app.get("/test", (req ,res)=>{
 return res.send("ola client")
})

app.listen(5000, ()=> console.log("servidor rodando!"))