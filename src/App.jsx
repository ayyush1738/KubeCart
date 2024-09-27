import React from 'react';
import ProductManager from './components/ProductManager';
import OrderManager from './components/OrderManager';

const App = () => {
  return (
    <div>
      <h1>E-commerce Order Management System</h1>
      <ProductManager />
      <OrderManager />
    </div>
  );
};

export default App;
