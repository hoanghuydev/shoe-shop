import { appendChild, $, $$, updateCartTotal, updateCountCartItem } from '../../global';
import { CartShoes } from '../../model/model';
import { Shoes, User } from '../../model/model';
import { API, request } from '../../untils/request';

export function CartTotal(listCartItems: any) {
    let cartTotalString;
    if (listCartItems.total) {
        cartTotalString = `
    <div class="d-flex justify-content-end text-end mt-5 cart-total">
      <div>
        <p class="fs-5">Subtotal <span class="ms-3 count-cart-total">${listCartItems.total} $</span></p>
        <p class="text-muted small mb-4">
          Taxes and <a class="#!">shipping</a> calculated at checkout
        </p>
        <div>
          <button type="button" class="btn btn-link mb-1 mb-md-0" data-mdb-ripple-color="dark" onclick="window.location.href = 'design.html'"> 
            Continue designer
          </button>
          <button type="button" class="btn btn-primary ms-md-1 mb-1 mb-md-0 btn-buy-cart">Checkout</button>
        </div>
      </div>
    </div>
    `;
    } else {
        cartTotalString = `<div class='cart-empty d-flex justify-content-center text-center fs-6'>Cart is empty &nbsp;&nbsp;<a href='design.html'>Go to design</a></div>`;
    }
    appendChild($('.order-list'), cartTotalString);
    function addEventListenerElement() {
        $('.btn-buy-cart')?.addEventListener('click', async (e) => {
            e.preventDefault();
            const user: User = JSON.parse(localStorage.getItem('userInfo') ?? 'false');
            const listCartItem = await request(
                API.getUserCart(user._id),
                undefined,
                user.accessToken
            );
            const idItems = listCartItem.shoesList.map((item: CartShoes) => item._id);
            const buyItemRequest = await request(
                API.buyItemsFromCart(user._id),
                { idItems },
                user.accessToken
            );
            if (buyItemRequest.message) {
                alert(buyItemRequest.message);
                return;
            }
            window.location.reload();
        });
    }
    addEventListenerElement();
}
