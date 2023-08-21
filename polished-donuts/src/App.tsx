import './App.scss';
import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
   } 
  from 'react-router-dom';
import { Layout } from './layouts/Layout';
import HomePage from './pages/HomePage/HomePage';
import Products from './pages/Products/Products';
import { productLoader } from './loaders/ProductLoader';
import SignUpPage from './pages/SingUpPage/SingUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import "@fontsource/red-hat-display/500.css";
import "@fontsource/red-hat-display/700.css";


const router = createBrowserRouter( createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<PageNotFound />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<Products />} loader={productLoader}></Route>
      <Route path="/sign_up" element={<SignUpPage />}></Route> 
      <Route path="/log_in" element={<LogInPage />}></Route> 
    </Route>
))

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
