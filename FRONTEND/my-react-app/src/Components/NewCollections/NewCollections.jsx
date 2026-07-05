import React, { useContext } from 'react';
import './NewCollections.css';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';

export const NewCollections = () => {
  const { all_product } = useContext(ShopContext);

  // 🤝 Let's mix items explicitly across the entire catalog array
  const mixedCollections = [
    all_product[0],   // Women's item (ID 1)
    all_product[12],  // Men's item   (ID 13)
    all_product[24],  // Kids' item   (ID 25)
    all_product[4],   // Women's item (ID 5)
    all_product[15],  // Men's item   (ID 16)
    all_product[27],  // Kids' item   (ID 28)
    all_product[7],   // Women's item (ID 8)
    all_product[19],  // Men's item   (ID 20)
  ];

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {mixedCollections.map((item, i) => {
          // Add a safety check in case items aren't fully loaded yet
          if (!item) return null; 
          
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