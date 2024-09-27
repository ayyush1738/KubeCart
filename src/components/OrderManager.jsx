import React, { useState, useEffect } from 'react';

const API_URL = 'http://<your-ec2-public-ip>:4000/orders';

const OrderManager = () => {
  const [orders, setOrders] = useState([]);
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');

  // Fetch orders on component mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setOrders(data);
  };

  const addOrder = async () => {
    const newOrder = { productId: parseInt(productId), quantity: parseInt(quantity) };
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder),
    });
    if (response.ok) {
      fetchOrders();
      setProductId('');
      setQuantity('');
    }
  };

  return (
    <div>
      <h2>Order Manager</h2>
      <input
        type="number"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={addOrder}>Add Order</button>

      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order #{order.id} - Product ID: {order.productId}, Quantity: {order.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderManager;
