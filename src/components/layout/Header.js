import React from 'react'
import {Link} from 'react-router-dom';

 function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>New York Times Best-Selling Books List</h1>
            <Link style={linkStyle} to="/">Home</Link> | 
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle={
    background:'#333',
    color: '#fff',
    textAlign: 'center',
    paddingTop: '1px',
    paddingBottom: '1px'
}

const linkStyle={
    color:'#fff',
    textDecoration: 'none',
    padding: '50px',
    fontSize: '20px'
}

const titleStyle={
    fontSize: '30px'
}
export default Header;