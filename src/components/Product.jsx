import React from 'react';
import styles from '../Product.module.css';
import { Link } from 'react-router-dom';
function Product(props) {
    const { product } = props;
    return (
        <div className="card p-3 text-center h-100 ">
            <img src={product.image} className={`card-img-top mx-auto object-fit-contain ${styles.caard_img} `}  alt={product.title} style={{ height: '220px', width: '220px' }} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center">{product.title}</h5>
                <p className='text-black-50 text-center'>${product.price}</p>
                <Link className="btn btn-outline-dark mt-auto" to={`/product/${product.id}`}>Buy Now</Link>
             
            </div>
        </div>
    );
}

export default Product;
