import { $, appendChild } from '../../global';

export function CartItem() {
    const cartItemString = `
    <div class="d-md-flex justify-content-between mt-4 pt-1 mb-5">
      <div class="d-flex mb-4 mb-md-0">
        <div class="flex-shrink-0">
          <a href="#!">
            <img class="rounded-5 shadow-4 h-auto"
              src="https://mdbootstrap.com/img/Photos/new-design-blocks/ecommerce/checkout/6.jpg"
              alt="Generic placeholder image" style="width: 120px" />
          </a>
        </div>
        <div class="flex-grow-1 ms-4">
          <p class="mb-1">
            <strong><a href="#!" class="text-reset">JOIN Wilde Perfume Stick</a></strong>
          </p>
          <p class="mb-1">€59,00</p>
          <p class="text-muted mb-1">Vanilla, rose</p>
          <p class="text-muted mb-1">30 ml / 1 fl oz</p>
        </div>
      </div>
      <div>
        <div class="form-outline mb-2" style="width: 75px;">
          <input type="number" id="typeNumber" class="form-control" value="1" min="1" />
          <label class="form-label" for="typeNumber">Quantity</label>
        </div>
        <p class="pt-1"><a href="#!">Remove</a></p>
      </div>
      <div>
        <p>€59,00</p>
      </div>
    </div>
    `;
    appendChild($('.order-list'), cartItemString);
    ($('.order-list') as HTMLElement).innerHTML += '<hr />';
}
