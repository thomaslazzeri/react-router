import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<>Rotta base</>} />
        <Route path="/products" element={<>Prodotti</>} />
        <Route path="products" element={<>Prodotti</>} />
      </Routes>
    </>
  );
}

export default App
