import React from 'react';
import './Breadcrums.css';
import breadcrum_arrow from '../Assets/breadcrum_arrow.png';

export const Breadcrums = (props) => {
  const { product } = props;
  
  return (
    <div className='breadcrums'>
      HOME <img src={breadcrum_arrow} alt="" /> 
      SHOP <img src={breadcrum_arrow} alt="" /> 
      {product.category} <img src={breadcrum_arrow} alt="" /> 
      {product.name}
    </div>
  );
};