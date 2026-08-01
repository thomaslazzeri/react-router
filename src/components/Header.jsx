import { NavLink } from 'react-router-dom';

export const Header = () => (
    <header>
        <nav>
            <NavLink path='/'>Home</NavLink>
            <NavLink path='/products'>Prodotti</NavLink>
            <NavLink path='/us'>Chi siamo</NavLink>
        </nav>
    </header>
);