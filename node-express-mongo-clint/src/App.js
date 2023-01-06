import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Components/AddProducts/AddProducts';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NothigFound from './Components/NothingFound/NothigFound';
import Products from './Components/Products/Products';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/add' element={<AddProduct />} />
          <Route path='/products/update/:id' element={<UpdateProduct />} />
          <Route path='*' element={<NothigFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
