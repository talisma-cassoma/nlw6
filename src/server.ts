import express from "express"

const app = express()

app.get("/", (req ,res)=>{
 return res.send("ola client amado")
})

app.listen(5000, ()=> console.log("servidor rodando!"))