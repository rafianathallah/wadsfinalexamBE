// ****FOR TESTING****
// const express = require('express');
// const morgan = require("morgan");
// const cors = require('cors');
// const { default: axios } = require('axios');
// const bodyParser = require('body-parser')
// const app = express();
// app.use(cors())
// app.use(bodyParser.json({limit: '50mb'}))
// app.use(bodyParser.urlencoded({extended:true}))
// const PORT = 4000;
// const HOST = "localhost";
// app.use(morgan('dev'));

//Add & show users
let users = [
    {
        "firstName": "Raiden",
        "lastName": "Shogun"
    },
    {
        "firstName": "Yae",
        "lastName": "Miko"
    },
    {
        "firstName": "Kujou",
        "lastName": "Sara"
    },
    {
        "firstName": "Kuki",
        "lastName": "Shinobu"
    },
]

app.get('/users', (req, res) => {
    res.send(users);
})
app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user)
    res.send('added')
})


//Add & show products
app.get("/", (req, res) => res.send("..."));
let products = [
    {
        "name": "Athenaeum",
        "price": 8
    },
    {
        "name": "Foamy Reef",
        "price": 16
    },
    {
        "name": "Golden Eden",
        "price": 24
    },
    {
        "name": "Caramel Pinecone",
        "price": 44
    },
]

app.get('/products', (req, res) => {
    res.send(products);
})
app.post('/products', (req, res) => {
    const product = req.body;
    products.push(product)
    res.send('added')
})

// app.listen(PORT , HOST, () => {});