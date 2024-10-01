import React, { useState, useEffect } from 'react';
import Card from './Cards';

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  // Fetch products from the backend
  useEffect(() => {
    fetch('http://<your-ec2-public-ip>/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    const product = { name, price: parseFloat(price) };

    fetch('http://<your-ec2-public-ip>/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(() => {
      setName('');
      setPrice('');
      fetch('http://<your-ec2-public-ip>/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    });
  };

  return (
    <div className='mt-20 bg-gray-900'>
      <h1 className="text-4xl font-bold text-white">Products</h1>
      <div className='row flex justify-between p-10'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='row flex justify-between p-10'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className='row flex justify-between p-10'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* <input
        type="text"
        value={name}
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={price}
        placeholder="Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={addProduct}>Add Product</button>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ProductManager;
