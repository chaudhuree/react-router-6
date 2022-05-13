import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='btn'>Home</Link>
      <Link to='/about' className='btn'>About</Link>
      <Link to='/products' className='btn'>Products</Link>
      <Link to='/first' className='btn'>First Page</Link>
      <Link to='/login' className='btn'>login</Link>
      {/* <Link to='/dashboard' className='btn'>First Page</Link> */}
      <Link to='/anything' className='btn'>Error Page</Link>

    </nav>
  )
}
