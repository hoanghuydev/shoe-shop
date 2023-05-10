import { $, $$, appendChild, colorList } from '../global';
import { Navbar } from '../Component/Navbar/index';
import { Canvas, handleColor } from '../Component/Canvas';
import { DesignTable } from './Component/DesignTable';
import './design.scss';
import { TablePart } from './Component/TablePart';
import { Options } from './Component/Options';
import { User } from '../model/model';

function App() {
    let huy: User = {
        accessToken: 'huylat579',
        email: 'huylat579@gmail.com',
        __v: 0,
        address: 'Đường số 17 Thủ Đức',
        avatarUrl:
            'https://afamilycdn.com/150157425591193600/2020/9/1/base64-1598971047666775016752.png',
        age: 18,

        name: 'Hoang Huy',
        updatedAt: '2023-05-07T13:24:53.411Z',

        createdAt: '2023-05-07T13:24:53.411Z',
        _id: '2341240924052',
    };
    //Render Header
    Navbar(
        JSON.parse(localStorage.getItem('isLogged') ?? 'false'),
        JSON.parse(localStorage.getItem('userInfo') ?? 'false')
    );
    Canvas('Laces', false);
    DesignTable();
    TablePart();
    Options();
}
App();
