import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
function App() {
  return <Router>
  <Link to='/home' className='btn'>Home</Link>
  <Link to='/about' className='btn'>About</Link>
  <Link to='/products' className='btn'>Products</Link>
  <Link to='/' className='btn'>First Page</Link>

    <Routes>
      <Route path='/' element={<div>First page</div>}></Route>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
    </Routes>
  </Router>;
}

export default App;
