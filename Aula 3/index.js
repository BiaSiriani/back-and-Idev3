const express = require('express')
const userServer=require ('./userServer')

const app= express();//nome qualquer para express
app.use(express.json());//vou habilitar json no express

//rota para criar user
app.post("/users",(req, res)=>{
    const {nome,email} = req.body;
    if(!nome|| !email){
        return res.status(400).json({error:"nome e email são obrigatorios"})
   }
   const user =userServer.adduser(nome,email);
   res.status(200).json({user});
});

//rota pra listar user
app.get("/users",(req, res) =>{
    res.json(userServer.getusers());
});

const port =3000
app.listen(port,()=>{
    console.log("servidor rodando na porta:",port);
});