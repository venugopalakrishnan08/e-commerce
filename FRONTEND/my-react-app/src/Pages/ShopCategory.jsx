import React, { useContext, useMemo } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

export const ShopCategory = (props) => {
  const { all_product, loading } = useContext(ShopContext);

  const categoryProducts = useMemo(
    () => all_product.filter((item) => item.category === props.category),
    [all_product, props.category]
  );

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{categoryProducts.length}</span> out of {categoryProducts.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt='' />
        </div>
      </div>

      {loading ? (
        <p style={{ textAlign: 'center', margin: '60px 0' }}>Loading products...</p>
      ) : categoryProducts.length === 0 ? (
        <p style={{ textAlign: 'center', margin: '60px 0' }}>No products in this category yet.</p>
      ) : (
        <div className="shopcategory-products">
          {categoryProducts.map((item, i) => (
            <Item
              key={item._id || item.id || i}
              id={item.id || item._id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};