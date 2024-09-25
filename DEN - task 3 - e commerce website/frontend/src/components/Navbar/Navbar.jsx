import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/cart_icon.png'
import cart_icon from '../assets/cart_cross.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>DIGISHOP</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("home")}}><Link to="/">Home</Link> {menu==="home"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("mobile")}}><Link to ="/mobile">Mobile Phones</Link>{menu==="mobile"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("tablets")}}><Link to="/tablets">Tablets</Link> {menu==="tablets"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("accessories")}}><Link to="/accessories">Accessories</Link> {menu==="accessories"?<hr/>:<></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/cart"><img src={cart_icon} alt=''/></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar