import { $, $$, appendChild, User, colorList } from '../global';
import { Navbar } from '../Component/Navbar/index';
import { Canvas, handleColor } from '../Component/Canvas';
import { DesignTable } from './Component/DesignTable';
import './index.scss';
import { TablePart } from './Component/TablePart';
import { Options } from './Component/Options';

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
    Navbar(JSON.parse(localStorage.getItem('isLogged') ?? 'false'), huy);
    Canvas('Laces', false);
    DesignTable();
    TablePart();
    Options();
}
App();
