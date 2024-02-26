import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import baseUrl from '../../../Api';
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";
import { LuShoppingBag } from "react-icons/lu";

import LoadingIcons from 'react-loading-icons';
import Flexdraw from '../Userhome/Flexdraw';
import Footer from '../Userfooter/Footer';

const CategoryPage = () => {
  
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios.get(`${baseUrl}/product/productview`)
      .then(response => {
        const filteredProducts = response.data.filter(item =>
          item.prod && item.prod[0]?.Categoryname.toLowerCase() === category.toLowerCase()
        );
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <Flexdraw />
      {loading ? (
        <div className="loading-animation">
          <LoadingIcons.BallTriangle stroke='green' />
        </div>
      ) : (
        <div>
          <h1 className='headcate'>
            {category}
          </h1>
          <div className='bodyproduct'>
            <div className='grid'>
              {products.map((value, index) => (
                <div className="cardproduct" key={index}>
                  <div className="image-container">
                    <img src={`data:image/jpeg;base64,${value.Photo.data}`} alt='Error' />
                  </div>
                  <div className="content">
                    <h2 className="profile-name">{value.Productname}</h2>
                    <p className="price">Price:&nbsp;&nbsp;{value.Productprice}</p>
                    <p className="description">Quantity:&nbsp;&nbsp;{value.Quantity}&nbsp;&nbsp;&nbsp;&nbsp;Category: {value.prod[0]?.Categoryname}</p>
                  </div>
                  <div className="cart">
                    <a className="favour">
                      <MdOutlineFavorite />
                    </a>
                    <a className="tocart">
                      <FaCartPlus />
                    </a>
                    <a className="buynow">
                      <LuShoppingBag />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
