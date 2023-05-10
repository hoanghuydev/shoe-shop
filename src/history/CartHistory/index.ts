import { $, appendChild, updateCartTotal, updateCountCartItem } from '../../global';
import { CartShoes, User } from '../../model/model';
import { API, request } from '../../untils/request';
export function CartHistory(cartItem: CartShoes) {
    const cartItemString = `
    <div class="d-md-flex justify-content-between mt-4 pt-1 mb-5 cart-item-${cartItem._id}">
      <div class="d-flex mb-4 mb-md-0">
        <div class="flex-shrink-0">
          <a href="#!">
            <img class="rounded-5 shadow-4 h-auto"
              src="${cartItem.imageShoes}"
              alt="Generic placeholder image" style="width: 120px" />
          </a>
        </div>
        <div class="flex-grow-1 ms-4">
          <p class="mb-1">
            <strong><a href="#!" class="text-reset">Shoes Design (Custom)</a></strong>
          </p>
          <p class="mb-1">${cartItem.price} $</p>
          <p class="text-muted mb-1">Bought at ${cartItem.createdAt}</p>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-primary btn-sm btn-rounded btn-repurchase-${cartItem._id}">Repurchase</button>
      </div>
    </div>
    `;
    appendChild($('.order-list'), cartItemString);
    ($('.order-list') as HTMLElement).innerHTML += `<hr class="hr-${cartItem._id}" />`;
}
export function handleRepurchaseItem(cartItem: CartShoes) {
    const repurchaseItem = $(`.btn-repurchase-${cartItem._id}`);
    repurchaseItem?.addEventListener('click', async function (e) {
        const user: User = JSON.parse(localStorage.getItem('userInfo') ?? 'false');
        await request(
            API.repurchaseItemFromCart(user._id, cartItem._id),
            { idItems: [cartItem._id] },
            user.accessToken
        );
        window.location.reload();
    });
}
