import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
// import { StyledNavbar } from './components/StyledNavbar';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';
import { SharedLayout } from './pages/SharedLayout';
function App() {
  return <Router>
    <Navbar/>
    {/* <StyledNavbar/> */}
    <Routes>
      <Route path='/' element={<SharedLayout />}>
      {/* index page */}
        <Route index element={<Home/>}></Route>
        <Route path='first' element={<div>First page</div>}></Route>
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Route>
      <Route path='*' element={<Error />} />

    </Routes>
  </Router>;
}

export default App;
