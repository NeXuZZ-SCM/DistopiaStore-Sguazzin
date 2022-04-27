import React from 'react'
require('./NavegationBar.css');

export default function NavegationBar() {
  return (
    <header>
        <div className="logo">DistopiaStore</div>
        <div className="menuItems">
            <li>Home</li>
            <li>Contacto</li>
            <li>Carrito</li>
        </div>
    </header>
  )
}

