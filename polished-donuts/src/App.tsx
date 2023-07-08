import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import SignUpPage from './pages/SingUpPage/SingUpPage';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/sign_up" element={<SignUpPage/>} />      
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
