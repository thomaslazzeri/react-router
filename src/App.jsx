import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ShellLayout } from './components/ShellLayout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShellLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="us" element={<>Chi siamo</>} />
      </Route>
    </Routes>
  );
}

export default App;
