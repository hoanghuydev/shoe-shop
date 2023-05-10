import { $, $$, appendChild } from '../global';
import { Navbar } from '../Component/Navbar/index';
import { LoginForm } from './Component/LoginFrom';
function App() {
    //Render Header
    Navbar(
        JSON.parse(localStorage.getItem('isLogged') ?? 'false'),
        JSON.parse(localStorage.getItem('userInfo') ?? 'false')
    );
    LoginForm(JSON.parse(localStorage.getItem('isLogin') ?? 'false'));
}
App();
