import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { ProductId } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1); 
  const api_link = 'https://fakestoreapi.com/products';

  const getProductDetails = () => {
    fetch(`${api_link}/${ProductId}`)
      .then((res) => res.json())
      .then((pro) => setProduct(pro))
      .catch((error) => console.error('Error fetching product details:', error));
  };

  useEffect(() => {
    getProductDetails();
  }, [ProductId]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)); 
  };

  return (
    <div className='container'>
      <div className="row d-flex flex-lg-row flex-column gap-4 p-5 justify-content-center ">
        <div className='col-lg-4 col-12'>
          <img 
            src={product.image} 
            alt={product.title} 
            className='w-100 h-auto object-fit-cover rounded' />
        </div>
        <div className='col-lg-6 col-12'>
          <h2 className='mb-3'>{product.title}</h2>
          <p className='text-muted mb-3'>{product.description}</p>
          <p className='fs-4 fw-bold mb-4'>${product.price}</p>

          <button className='btn btn-dark btn-lg mb-3'>
            Buy Now
          </button>
          <div className='d-flex align-items-center gap-3'>
            <button className='btn btn-outline-dark btn-lg' onClick={handleIncrement}>+</button>
            <p className='fs-4 fw-bold mb-0'>{count}</p>
            <button className='btn btn-outline-dark btn-lg' onClick={handleDecrement}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
