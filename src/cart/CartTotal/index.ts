import { appendChild, $ } from '../../global';

export function CartTotal() {
    const cartTotalString = `
    <div class="d-flex justify-content-end text-end mt-5">
      <div>
        <p class="fs-5">Subtotal <span class="ms-3">€137,00 EUR</span></p>
        <p class="text-muted small mb-4">
          Taxes and <a class="#!">shipping</a> calculated at checkout
        </p>
        <div>
          <button type="button" class="btn btn-link mb-1 mb-md-0" data-mdb-ripple-color="dark">
            Continue shopping
          </button>
          <button type="button" class="btn btn-primary ms-md-1 mb-1 mb-md-0">Checkout</button>
        </div>
      </div>
    </div>
    `;
    ($('.order-list') as HTMLElement).innerHTML += '<hr />';
    // appendChild('.order-list', cartTotalString);
}
