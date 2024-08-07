import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import Footer from './Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route path="product/:ProductId" element={<ProductDetails />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default Home;
