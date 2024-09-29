const express = require('express');
const app = express();
app.use(express.json());

let orders = [];

app.post('/orders', (req, res) => {
    const order = { id: orders.length + 1, productId: req.body.productId, quantity: req.body.quantity };
    orders.push(order);
    res.status(201).send(order);
});

app.get('/orders', (req, res) => {
    res.send(orders);
});

app.listen(4000, () => console.log('Order Service running on port 4000'));
