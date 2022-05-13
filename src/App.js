import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';
function App() {
  return <Router>
  <Link to='/' className='btn'>Home</Link>
  <Link to='/about' className='btn'>About</Link>
  <Link to='/products' className='btn'>Products</Link>
  <Link to='/first' className='btn'>First Page</Link>
  <Link to='/anything' className='btn'>Error Page</Link>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='first' element={<div>First page</div>}></Route>
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
  </Router>;
}

export default App;
