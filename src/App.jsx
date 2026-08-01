import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import { ShellLayout } from './components/ShellLayout';
import { Home } from './Home';

function App() {

  const [state, setState] = useState(0);

  return (
    <Routes>
      <Route path='/' Component={ShellLayout}>
        <Route index Component={Home} />
        <Route path="products" element={<>Prodotti</>} />
      <Route path="us" element={<>Chi siamo</>} />

      </Route>

    </Routes>
  );
}

export default App
