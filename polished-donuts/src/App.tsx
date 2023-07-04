import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
