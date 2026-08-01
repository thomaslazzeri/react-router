import { NavLink } from 'react-router-dom';

export const Header = () => (
    <header>
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/products'>Prodotti</NavLink>
            <NavLink to='/us'>Chi siamo</NavLink>
        </nav>
    </header>
);