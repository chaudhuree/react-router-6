// import React from 'react'
// import { NavLink } from 'react-router-dom'

// export const StyledNavbar = () => {
//   return (
//     <nav className='navbar'>
//       <NavLink to='/' className='btn' style={({ isActive }) => {
//         return { color: isActive ? 'white' : 'red', background: isActive ? 'black' : 'white' }
//       }}>Home</NavLink>

//       <NavLink to='/about' className='btn'
//         style={({ isActive }) => {
//           return { color: isActive ? 'white' : 'red', background: isActive ? 'black' : 'white' }
//         }}>About</NavLink>

//       <NavLink to='/products' className='btn'
//         style={({ isActive }) => {
//           return { color: isActive ? 'white' : 'red', background: isActive ? 'black' : 'white' }
//         }}>Products</NavLink>

//       <NavLink to='/first' className='btn'
//         style={({ isActive }) => {
//           return { color: isActive ? 'white' : 'red', background: isActive ? 'black' : 'white' }
//         }}>First Page</NavLink>
        
//       <NavLink to='/anything' className='link'>Error Page</NavLink>

//     </nav>
//   )
// }

// 4 another way to do it 

import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>
    </nav>
  );
};
export default Navbar;
