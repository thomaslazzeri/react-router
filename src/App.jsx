import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import { useState } from 'react';
import './App.css'

function App() {

  const [state, setState] = useState(0);

  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Prodotti</NavLink>
          <NavLink to="/us">Chi siamo</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={(
          <>
            <button onClick={() => setState(state => state + 1)}>Incrementa {state}</button>
          </>)} />
        <Route path="products" element={<>Prodotti</>} />
        <Route path="us" element={<>Chi siamo</>} />
      </Routes>
    </>
  );
}

export default App
