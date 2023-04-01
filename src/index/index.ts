import { $, $$, appendChild, User } from '../global';
import { Navbar } from '../Component/Navbar/index';
function App() {
    let huy = new User(
        'huylat579',
        'huylat579',
        'Hoang',
        'Huy',
        new Date(20031021),
        'https://iili.io/HO3XD91.md.png',
        'Đường số 17 Thủ Đức',
        838463061
    );
    //Render Header
    appendChild($('.root'), Navbar(JSON.parse(localStorage.getItem('isLogged') ?? 'false'), huy));
}
App();
