import express from "express";

import "reflect-metadata" ;

import "./database" ;

const app= express();

app.listen(5000, ()=> console.log("servidor rodando!"));