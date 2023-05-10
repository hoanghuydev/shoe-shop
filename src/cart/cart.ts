import { Footer } from '../Component/Footer';
import { Navbar } from '../Component/Navbar';
import { appendChild, $, $$ } from '../global';
import { CartShoes, User } from '../model/model';
import { API, request } from '../untils/request';
import './Cart.scss';
import { CartContainer } from './CartContainer';
import { CartItem, handleRemoveItem } from './CartItem';
import { CartTotal } from './CartTotal';

export async function App() {
    if (!JSON.parse(localStorage.getItem('isLogged') ?? 'false')) {
        window.location.href = 'index.html';
    }
    Navbar(
        JSON.parse(localStorage.getItem('isLogged') ?? 'false'),
        JSON.parse(localStorage.getItem('userInfo') ?? 'false')
    );

    CartContainer();
    Footer();
    const user: User = JSON.parse(localStorage.getItem('userInfo') ?? 'false');
    const listCartItem = await request(API.getUserCart(user._id), undefined, user.accessToken);
    for (let cartItem of listCartItem.shoesList) {
        CartItem(cartItem);
    }
    for (let cartItem of listCartItem.shoesList) {
        handleRemoveItem(cartItem);
    }
    CartTotal(listCartItem);
}

App();
