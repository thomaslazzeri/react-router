import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ShellLayout } from './components/ShellLayout';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Us } from './pages/Us';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShellLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="us" element={<Us />} />
      </Route>
    </Routes>
  );
}

export default App;
