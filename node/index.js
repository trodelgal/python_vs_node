const express = require('express');
const app = express();
app.use(express.json());
const { UserNode } = require('./models');

app.get('/users',async (req,res)=>{
    try{
        const users = await UserNode.findAll()
        res.json(users) 
    }catch(err){
        res.json(err)
    }
})

app.post('/users',async (req,res)=>{
    try{
        const newUser = await UserNode.create(req.body);
        res.json(newUser)
    }catch(err){
        res.json(err)
    }
})

app.get('/user/:id',async (req,res)=>{
    try{
        const user = await UserNode.findById(req.params.id)
        res.json(user)
    }catch (err){
        res.json(err)
    }
    
})


app.put('/user/:id',async (req,res)=>{
    try{
        const user = await UserNode.findByPk(req.params.id);
        await user.update(req.body)
        res.json(user)
    }catch(err){
        res.json(err)
    }
})

app.delete('/user/:id',async (req,res)=>{
    try{
        const delUser = await UserNode.destroy({
            where: {
              id: req.params.id,
            },
          });
          res.json(delUser);
    }catch(err){
        res.json(err)
    }
})

const port = 8080;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));