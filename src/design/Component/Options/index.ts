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
        // $('.btn-add-cart')?.addEventListener('click', function () {
        //     ($('.toast-container') as HTMLElement).innerHTML = `
        //     <div class="col-8 me-2 mb-2">
        //         <div
        //         class="toast show toast-danger"
        //         role="alert"
        //         >
        //             <div class="toast-header toast-danger">
        //               <i class="fas fa-exclamation-circle fa-lg me-2"></i>
        //               <strong class="me-auto">Waring</strong>
        //             </div>
        //             <div class="toast-body">You need login to buy this item.</div>
        //           </div>
        //         </div>
        //     </div>
        //     `;
        // });
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
