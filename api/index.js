const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://oliviahe0111:GI85DK5XgvdgJLId@cluster0.wsfnpkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// app.post('/register', (req, res) => {
//     res.json({requestData:{username, password}});
// });

app.post('/register', async (req,res) =>{
    const {username, password} = req.body;
    try{
        const UserDoc = await User.create({
            username,
            password
        });
        res.json(UserDoc);
    } catch(e){
        res.status(400).json(e);
    }
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    //mongodb+srv://oliviahe0111:GI85DK5XgvdgJLId@cluster0.wsfnpkx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
});