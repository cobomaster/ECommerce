import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Products from './pages/Productos.jsx'
import Carrito from './pages/Carrito.jsx'
import './App.css'

function App() {

  return (
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/carrito" element={<Carrito />} />
   </Routes>
  );
}
export default App;
