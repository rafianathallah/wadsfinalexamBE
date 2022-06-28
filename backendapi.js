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

//Add & show customers
let customers = [
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
    }
]

app.get('/customers', (req, res) => {
    res.send(customers);
})
app.post('/customers', (req, res) => {
    const customer = req.body;
    customers.push(customer)
    res.send('Successfully added')
})

//Add & show coffees
app.get("/", (req, res) => res.send("..."));
let coffees = [
    {
        "coffeeName": "Athenaeum",
        "price": 8
    },
    {
        "coffeeName": "Foamy Reef",
        "price": 16
    },
    {
        "coffeeName": "Golden Eden",
        "price": 24
    },
    {
        "coffeeName": "Caramel Pinecone",
        "price": 44
    }
]

app.get('/coffees', (req, res) => {
    res.send(coffees);
})
app.post('/coffees', (req, res) => {
    const coffee = req.body;
    coffees.push(coffee)
    res.send('Succesfully added')   
})

// app.listen(PORT , HOST, () => {});
