import React, { useContext } from 'react';
import './Popular.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

export const Popular = () => {
  const { all_product } = useContext(ShopContext);

  // Get ONLY the first 4 products from the women's category (IDs 1 to 4)
  const popularInWomen = all_product.filter(item => item.category === "women").slice(0, 4);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularInWomen.map((item, i) => {
          return (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        })}
      </div>
    </div>
  );
};