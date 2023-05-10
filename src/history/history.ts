import { $, $$, appendChild } from '../global';
import { Navbar } from '../Component/Navbar/index';
import { HistoryContainer } from './HistoryContainer';
import { User } from '../model/model';
import { API, request } from '../untils/request';
import { CartHistory, handleRepurchaseItem } from './CartHistory';
async function App() {
    Navbar(
        JSON.parse(localStorage.getItem('isLogged') ?? 'false'),
        JSON.parse(localStorage.getItem('userInfo') ?? 'false')
    );
    HistoryContainer();
    const user: User = JSON.parse(localStorage.getItem('userInfo') ?? 'false');
    const listHistoryItem = await request(
        API.getUserCartPurchaseHistory(user._id),
        undefined,
        user.accessToken
    );
    if (!listHistoryItem.length) {
        const emptyHistory = `<div class='cart-empty d-flex justify-content-center text-center fs-6'>Your purchase history is empty &nbsp;&nbsp;<a href='cart.html'>Go to buy shoes</a></div>`;
        appendChild($('.order-list'), emptyHistory);
        return;
    }
    for (let historyItem of listHistoryItem) {
        CartHistory(historyItem);
    }
    for (let historyItem of listHistoryItem) {
        handleRepurchaseItem(historyItem);
    }
}

App();
