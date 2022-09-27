import './App.css';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Wish from './pages/Wish';
import Cart from './pages/Cart';
import ProductScreen from './pages/ProductScreen';
import Shipping from './components/Shipping';
import SignUp from './pages/SignUp';
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/product/:slug' element={<ProductScreen/>} />
      <Route path='/Login' element={<Login />}/>
      <Route path='/Signup' element={<SignUp />}/>
      <Route path='/Wish' element={<Wish />}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/Shipping' element={<Shipping />}/>
      <Route path='/Shop' element={<Shop />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </div>
    </Router>
  );
}

export default App;
