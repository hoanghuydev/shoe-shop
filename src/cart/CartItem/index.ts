import { $, appendChild, updateCartTotal, updateCountCartItem } from '../../global';
import { CartShoes, User } from '../../model/model';
import { API, request } from '../../untils/request';
import './CartItem.scss';
export function CartItem(cartItem: CartShoes) {
    const cartItemString = `
    <div class="d-md-flex justify-content-between mt-4 pt-1 mb-5 cart-item-${cartItem._id} cart-item">
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
          <p class="text-muted mb-1">Leather</p>
        </div>
      </div>
      <div>
        
        <p class="pt-1"><a class=" remove-cart-item remove-${cartItem._id}" href="#!">Remove</a></p>
      </div>
      <div>
        <p>${cartItem.price} $</p>
      </div>
    </div>
    `;
    appendChild($('.order-list'), cartItemString);
    ($('.order-list') as HTMLElement).innerHTML += `<hr class="hr-${cartItem._id}" />`;
}
export function handleRemoveItem(cartItem: CartShoes) {
    const cartItemElement = $(`.cart-item-${cartItem._id}`);
    const removeCartItem = $(`.remove-${cartItem._id}`);
    removeCartItem?.addEventListener('click', async function (e) {
        e.preventDefault();
        const user: User = JSON.parse(localStorage.getItem('userInfo') ?? 'false');
        cartItemElement?.remove();
        $(`.hr-${cartItem._id}`)?.remove();
        updateCountCartItem(-1);
        updateCartTotal(-50);
        await request(
            API.removeItemFromCart(user._id),
            { idItems: [cartItem._id] },
            user.accessToken
        );
    });
}
