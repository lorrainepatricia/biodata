import React from 'react'
import { Link } from "gatsby"
    
const Menu = () => (
    <div style={{ 
        background: '#f4f4f4',
        paddingTop: '10px'
     }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li> <Link to="/">Beranda</Link> </li>
    <li> <Link to="/">Menu</Link> </li>
    <li> <Link to="/">Gallery</Link> </li>
            <li><Link to="/biodata">Biodata</Link></li>
        </ul>
    </div>
)
    
export default Menu
