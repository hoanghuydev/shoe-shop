import { $, $$, appendChild, User } from '../global';
import { Navbar } from '../Component/Navbar/index';
import { LoginForm } from './Component/LoginFrom';
function App() {
    //Render Header
    Navbar(JSON.parse(localStorage.getItem('isLogged') ?? 'false'));
    LoginForm(JSON.parse(localStorage.getItem('isLogin') ?? 'false'));
}
App();
