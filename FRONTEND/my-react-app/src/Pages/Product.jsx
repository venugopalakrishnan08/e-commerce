import React, { useContext, useMemo } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { Breadcrums } from '../Components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const { all_product, loading } = useContext(ShopContext);
  const { productId } = useParams();

  const product = useMemo(
    () => all_product.find((e) => e.id === Number(productId) || String(e._id) === String(productId)),
    [all_product, productId]
  );

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '24px' }}>Loading Product...</div>;
  }

  if (!product) {
    return <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '24px' }}>Product not found.</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};