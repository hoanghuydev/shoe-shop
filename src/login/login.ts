import { $, $$, appendChild, User } from '../global';
import { Navbar } from '../Component/Navbar/index';
function App() {
    //Render Header
    Navbar(JSON.parse(localStorage.getItem('isLogged') ?? 'false'));
}
App();
