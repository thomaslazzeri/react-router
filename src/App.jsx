import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Prodotti</NavLink>
        </>} />
        <Route path="/products" element={<>Prodotti</>} />
        <Route path="products" element={<>Prodotti</>} />
      </Routes>
    </>
  );
}

export default App
