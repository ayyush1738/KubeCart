import React from 'react';
import ProductManager from './components/ProductManager';
import OrderManager from './components/OrderManager';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="bg-gray-900 h-full p-10">
      <Navbar />
      <ProductManager />
      {/* <OrderManager /> */}
    </div>
  );
};

export default App;
