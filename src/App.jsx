import {Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layouts.jsx'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import Carrito from './pages/Carrito.jsx'
import './App.css'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="productos" element={<Productos />} />
                <Route path="carrito" element={<Carrito />} />
            </Route>
        </Routes>
    );
}

export default App;
