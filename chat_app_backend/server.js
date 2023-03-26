const express = require('express');
const {chats} = require('./data/data');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

app.get('/',(req,res)=> {
    res.send("Hello World");
    console.log(`Server started on port ${port}`)
});

app.get('/api/chat',(req,res)=>{
    res.send(chats);
})

app.get('/api/chat/:id',(req,res)=>{
    console.log(chats.find((c)=> c._id === req.params.id));
    res.send(chats.find((c)=> c._id === req.params.id));
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));  