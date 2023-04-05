import { Footer } from '../Component/Footer';
import { Navbar } from '../Component/Navbar';
import { FAQ } from './Component/FAQ';
import { HeaderLanding } from './Component/HeaderLanding';

function App() {
    Navbar(JSON.parse(localStorage.getItem('isLogged') ?? 'false'));
    HeaderLanding();
    FAQ();
    Footer();
}
App();
