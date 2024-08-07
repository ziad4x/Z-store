import React, { useEffect, useState } from 'react';
import Product from './Product';

function ProductList() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [visibleProducts, setVisibleProducts] = useState(6);
    const api_link = 'https://fakestoreapi.com/products';

    const getCategories = () => {
        fetch(`${api_link}/categories`)
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
    };

    const getProducts = () => {
        fetch(api_link)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    };

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setVisibleProducts(6); 
    };

    const handleShowMore = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 6);
    };

    const filteredProducts = selectedCategory === 'all'
        ? products: products.filter(product => product.category === selectedCategory);

    const productsToShow = filteredProducts.slice(0, visibleProducts);

    return (
        <div className='container py-4'>
            <h2 className='text-center'>Our Products</h2>
            <hr />
            <div className='d-flex justify-content-center flex-wrap mb-4'>
                <button onClick={() => handleCategoryClick('all')} className='btn btn-outline-dark m-2'>
                    All
                </button>
                {categories.map((cat, index) => (
                    <button key={index} onClick={() => handleCategoryClick(cat)} className='btn btn-outline-dark m-2'>
                        {cat}
                    </button>
                ))}
            </div>
            <div className="row">
                {productsToShow.map((product) => (
                    <div className="col-md-4 col-sm-6 col-lg-4 mb-4 " key={product.id}>
                        <Product product={product} />
                    </div>
                ))}
            </div>
            {visibleProducts < filteredProducts.length && (
                <div className="text-center mt-4">
                    <button onClick={handleShowMore} className="btn btn-dark">
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductList;
