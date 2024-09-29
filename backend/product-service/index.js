const express = require('express');
const app = express();
app.use(express.json());

let products = [];

app.post('/products', (req, res) => {
    const product = { id: products.length + 1, name: req.body.name, price: req.body.price };
    products.push(product);
    res.status(201).send(product);
});

app.get('/products', (req, res) => {
    res.send(products);
});

app.listen(3000, () => console.log('Product Service running on port 3000'));
