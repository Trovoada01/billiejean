import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/login">Login</Link>  
        <Link to="/sobre">Sobre</Link>
        <Link to="/conteudo">Conteudo</Link> 
    </nav>
  )
}
export default Navbar