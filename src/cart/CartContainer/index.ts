import { appendChild, $ } from '../../global';
import './CartContainer.scss';
export function CartContainer() {
    const cartString = `
    <!-- Container for demo purpose -->
    <div class="container cart-container">
    
      <!--Section: Design Block-->
      <section class="mb-10">
        <div class="row">
          <div class="col-xl-9 mx-auto order-list">
            <h5 class="mb-4">Your cart</h5>
            <hr />
          </div>
        </div>
      </section>
      <!--Section: Design Block-->
    
    </div>
    <!-- Container for demo purpose -->
`;
    appendChild($('.root'), cartString);
}
