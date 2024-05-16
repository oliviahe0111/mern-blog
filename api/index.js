const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = "djfsdbalhgdjlshfg"

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://oliviahe0111:GI85DK5XgvdgJLId@cluster0.wsfnpkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


app.post('/register', async (req,res) =>{
    const {username, password} = req.body;
    try{
        const UserDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(UserDoc);
    } catch(e){
        res.status(400).json(e);
    }
});


app.post('/login', async (req,res) =>{
    const {username, password} = req.body;
    const userDoc =await User.findOne({username}); //find user document in DB
    const passwordOk = bcrypt.compareSync(password, userDoc.password);
    if(passwordOk){
        //logged in
        jwt.sign({username, id: userDoc._id}, secret, {}, (err, token)=>{
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username,
            });
        });
    } else{
        res.status(400).json("wrong credentials")
    }

});

app.get('/profile', (req, res)=>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info)=>{
        if (err) throw err;
        res.json(info);

    })
});

app.post('/logout', (req, res)=>{
    res.cookie('token', '').json('ok'); //clears the token

})


app.listen(4000, () => {
    console.log('Server is running on port 4000');
    //mongodb+srv://oliviahe0111:GI85DK5XgvdgJLId@cluster0.wsfnpkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
});