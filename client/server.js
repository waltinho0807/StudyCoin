const express = require("express");
const bodyParser = require("body-parser");
//const request = require('request')
const cors = require('cors');
const Seller = require('./src/models/Seller')
const mongoose = require("mongoose");

//const connectDb = require('./src/utils/connectDb');
//import Seller from './src/models/Seller';
//import connectDb from './src/utils/connectDb';

//connectDb();

mongoose.connect(
    process.env.MONGODB_URL || "mongodb+srv://waltinhocalegari:andrezaamor4@cluster0.mf0st.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }
).then(item => {
    console.log('conectado com o banco')
}).catch((err)=>{
    console.log(err)
});
    



const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    app.use(cors());
    next();

})

app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));
app.get("/vender", (req, res) => res.sendFile(__dirname + "/build/index.html"));
app.get("/comprar", (req, res) => res.sendFile(__dirname + "/build/index.html"));
app.get("/sobre", (req, res) => res.sendFile(__dirname + "/build/index.html"));



app.get('/api/seller', async (req, res) => {
    try {
        // const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        const seller = await Seller.find()
            .sort({ createdAt: 'desc' })

        res.status(200).json({ seller });
    } catch (error) {
        // console.error(error);
        res.status(403).send("só Admin por favor");
    }
})

app.post('/api/seller', async (req, res) => {
    const { address, tokens, hash } = req.body;

    try {

        const seller = await new Seller({
            address: address,
            tokens: tokens,
            hash: hash
        }).save();

        res.status(200).json(seller);
    } catch (error) {
        // console.error(error)
        res.status(500).send("Error ao vender seus tokens");
    }
})



app.put('/api/seller', async (req, res) => {
    const { _id, status } = req.body;
    await Seller.findOneAndUpdate(
        { _id },
        { status }
    )
    res.status(203).send('Hash adicionada');

})



const port =  5000;
app.listen(port, () => console.log("serve at http://localhost:5000"));




