import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './pages/Products/Products';
import SignUpPage from './pages/SingUpPage/SingUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import "@fontsource/red-hat-display/500.css";
import "@fontsource/red-hat-display/700.css";


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/sign_up" element={<SignUpPage/>} /> 
        <Route path="/log_in" element={<LogInPage/>} />     
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
