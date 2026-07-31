import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import { useState } from 'react';
import './App.css'

function App() {

  const [state, setState] = useState(0);

  return (
    <Routes>
      <Route path="/" element={(<>
        <button onClick={() => setState(state => state + 1)}>Incrementa {state}</button>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Prodotti</NavLink>
      </>)} />
      <Route path="/products" element={<>Prodotti</>} />
      <Route path="products" element={<>Prodotti</>} />
    </Routes>
  );
}

export default App
