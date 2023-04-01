import { $, $$, appendChild, User } from '../global';
import { Navbar } from '../Component/Navbar/index';
function App() {
    //Render Header
    appendChild($('.root'), Navbar(false));
}
App();
