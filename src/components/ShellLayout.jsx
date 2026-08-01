import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export const ShellLayout = () => (
    <div className="shell-layout">
        <Header />
        <Outlet />
        <Footer />
    </div>
);