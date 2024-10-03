//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import CategoryPage from "./pages/CategoryPage"
import ProductPage from './pages/ProductPage';
import Cart from "./pages/Cart"
import Home from "./pages/Home";
import Footer from './components/footer/Footer';
import HomeCategory from './pages/HomeCategory';
import banner1 from './components/assets/banner1.png';
import Loginsignup from './pages/LoginSignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/mobile" element={<HomeCategory banner={banner1} category="mobile" />}/>
          <Route path="/tablets" element={<HomeCategory banner={banner1} category="tablet" />}/>
          <Route path="/accessories" element={<HomeCategory banner={banner1} category="accessory" />}/>
          <Route path="/product" element={<ProductPage/>}>
            <Route path=':productId' element={<ProductPage/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Loginsignup />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
