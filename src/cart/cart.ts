import { Footer } from '../Component/Footer';
import { Navbar } from '../Component/Navbar';
import { appendChild, $, $$ } from '../global';
import './Cart.scss';
import { CartContainer } from './CartContainer';
import { CartItem } from './CartItem';
import { CartTotal } from './CartTotal';
export function App() {
    Navbar(JSON.parse(localStorage.getItem('isLogged') ?? 'false'));
    CartContainer();
    CartItem();
    CartItem();
    CartTotal();
    Footer();
}
App();
