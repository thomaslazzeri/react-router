import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import { ShellLayout } from './components/ShellLayout';

function App() {

  const [state, setState] = useState(0);

  return (
    <Routes>
      <Route path='/' Component={ShellLayout}>
        <Route index element={(
          <>
            <button onClick={() => setState(state => state + 1)}>Incrementa {state}</button>
          </>)} />
        <Route path="products" element={<>Prodotti</>} />

      </Route>

      <Route path="us" element={<>Chi siamo</>} />
    </Routes>
  );
}

export default App
