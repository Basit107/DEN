//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, route, Route } from 'react-router-dom'
import categoryPage from "./pages/categoryPage"
import loginSignUp from "./pages/loginSignUp"
import cart from "./pages/cart"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<home/>}/>
          <Route path="/mobile" element={<categoryPage category="mobile" />}/>
          <Route path="/tablets" element={<categoryPage category="tablet" />}/>
          <Route path="/accessories" element={<categoryPage category="accessory" />}/>
          <Route path="/product" element={<productPage/>}>
            <Route path=':productId' element={<productPage/>}/>
          </Route>
          <Route path='/cart' element={<cart/>}/>
          <Route path='/login' element={<loginSignUp/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
