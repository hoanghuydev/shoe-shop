import './Options.scss';
import { $, appendChild, listPart } from '../../../global';
import { setRunAnimate } from '../../../Component/Canvas';
export function Options() {
    function addEventListener() {
        // run animation
        $('#run-animate__checkbox')?.addEventListener('change', function (e) {
            const element = e.currentTarget as HTMLInputElement;
            setRunAnimate(element.checked);
        });
        // Add to cart
    }
    appendChild(
        $('.root'),
        `
        <div class='options'>
            <div class='run-animate' for='run-animate__checkbox'>
                <label for='run-animate__checkbox'>Run Animation</label>
                <input type="checkbox" id="run-animate__checkbox">
            </div>
           
        </div>
       `
    );
    appendChild(
        $('.root'),
        `
    <div class="toast-container">

    </div>
    `
    );
    addEventListener();
}
