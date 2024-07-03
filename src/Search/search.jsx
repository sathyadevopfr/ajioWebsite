import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import '../Styles/products.css';
import axios from 'axios'


const Search = () => {
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const query = searchParam.get('query');

    const [product, updateProduct] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                updateProduct(data);
            });
    }, [query]);
const {id }=useParams()
    const navigate = useNavigate();

    const carts = (productId) => {
        const selectedProduct= product.find(it=> it.id === productId)
        axios.post('http://localhost:2020/items',{
            title: selectedProduct.title,
            price: selectedProduct.price,
            category:selectedProduct.category,
            image: selectedProduct.image,
            rating: {
                rate: selectedProduct.rate,
                 count: selectedProduct.count,
            }
            
        }).then(response => {
            console.log(response.data)
            navigate(`/cart`)
        })  .catch(error => {
        console.error('Error updating cart:', error);
        
    });
        
    };

    const wishlists = (productId) => {
        const wishItems = product.find(it => it.id === productId )
        
        axios.post(`http://localhost:4040/wishItems`, {
            title: wishItems.title,
            category: wishItems.category,
            image: wishItems.image,
            price: wishItems.price,
            rating: {
                rate: wishItems.rate,
                count:wishItems.count
            }
            
        }).then(res => {
            // navigate(`/wishlist`)
        }).catch(error => {
             console.error('Error updating wishlist:', error);
        })
    };

    return (
        <>
            <Navbar />
            <div className='hea'>
                <h1>Results for {query}</h1>
            </div>
            <div id='prod-main'>
                {
                    product.filter(prod => prod.title.toLowerCase().includes(query.toLowerCase())).map(val => {
                        return (
                            <div key={val.id} className='mak-ali'>
                                <img src={val.image} alt="" />
                                <p>{val.category}</p>
                                <h4>{val.title}</h4>
                                <p className='green'>{val.rating.rate} | {val.rating.count}</p>
                                <p>Price <h5> {val.price}</h5></p>
                                <div className='spa'>
         <button onClick={()=>{carts(val.id)}}  className='b1'>Cart</button>
         <button onClick={()=>{wishlists(val.id)}} className='b2'>Wishlist</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Search;

