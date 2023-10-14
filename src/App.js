import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import "./App.css"
import HomePage from './Pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ProductsPage from './Pages/ProductsPage/ProductsPage';
import AllProductsPage from './Pages/AllProductsPage/AllProductsPage';
import ProductsOnSalePage from './Pages/ProductsOnSalePage/ProductsOnSalePage';
import ProductItemPage from './Pages/ProductItemPage/ProductItemPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/categories/all' element={<CategoryPage/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
          <Route path='/categories/:id' element={<ProductsPage/>}/>
          <Route path='/products/all' element={<AllProductsPage/>}/>
          <Route path='/products/sale' element={<ProductsOnSalePage/>}/>
          <Route path='/product/:id' element={<ProductItemPage/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
