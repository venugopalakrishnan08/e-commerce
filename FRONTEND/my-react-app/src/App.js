import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

// Correct local assets path mapping inside FRONTEND src folder
import men_banner from './Components/Components/Assets/banner_mens.png';
import women_banner from './Components/Components/Assets/banner_women.png';
import kid_banner from './Components/Components/Assets/banner_kids.png';

const Shop = lazy(() => import('./Pages/Shop').then((m) => ({ default: m.Shop })));
const ShopCategory = lazy(() => import('./Pages/ShopCategory').then((m) => ({ default: m.ShopCategory })));
const LoginSignup = lazy(() => import('./Pages/LoginSignup').then((m) => ({ default: m.LoginSignup })));
const Cart = lazy(() => import('./Pages/Cart').then((m) => ({ default: m.Cart })));
const Product = lazy(() => import('./Pages/Product').then((m) => ({ default: m.Product })));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '100px' }}>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
            <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
            <Route path='/product/:productId' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<LoginSignup />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;