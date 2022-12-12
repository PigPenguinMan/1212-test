import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Pages/layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/product';
import ProductPage from './Pages/Productpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:productName' element={<ProductPage/>}/>
      </Route>
    </Routes>
  
  );
}

export default App;
