import * as THREE from 'three';
import { Navbar } from './Component/Navbar';
import { CartTotal } from './cart/CartTotal';
export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);
export const appendChild = (parentElement: any, elementChildString: string) => {
    parentElement.appendChild(
        new DOMParser().parseFromString(elementChildString, 'text/html').body.lastElementChild
    );
};
export function getParentElement(element: any, stringParent: string) {
    while (element.parentElement) {
        if (
            element.parentElement.classList.contains(stringParent) ||
            element.parentElement.id === stringParent
        )
            return element.parentElement;
        getParentElement(element.parentElement, stringParent);
    }
}
export const listPart = [
    { color: '#fff', partItem: 'Laces' },
    { color: '#fff', partItem: 'Vamp' },
    { color: '#fff', partItem: 'Tongue' },
    { color: '#fff', partItem: 'Heel Strap' },
    { color: '#fff', partItem: 'Heel Counter' },
    { color: '#fff', partItem: 'Eyelet' },
    { color: '#fff', partItem: 'Body' },
    { color: '#fff', partItem: 'Middle' },
    { color: '#fff', partItem: 'Sole' },
];

export const colorList = [
    { id: 1, colorString: '#8b0016' },
    { id: 2, colorString: '#b2001f' },
    { id: 3, colorString: '#df0029' },
    { id: 4, colorString: '#ee7c6b' },
    { id: 5, colorString: '#f19373' },
    { id: 6, colorString: '#945305' },
    { id: 7, colorString: '#d0770b' },
    { id: 8, colorString: '#ec870e' },
    { id: 9, colorString: '#f5b16d' },
    { id: 10, colorString: '#c18c00' },
    { id: 11, colorString: '#f3c246' },
    { id: 12, colorString: '#feebd0' },
    { id: 13, colorString: '#9c9900' },
    { id: 14, colorString: '#dcd800' },
    { id: 15, colorString: '#f9f400' },
    { id: 16, colorString: '#489620' },
    { id: 17, colorString: '#5bbd2b' },
    { id: 18, colorString: '#00a06b' },
    { id: 19, colorString: '#008489' },
    { id: 20, colorString: '#6ec3c9' },
    { id: 21, colorString: '#184785' },
    { id: 22, colorString: '#205aa7' },
    { id: 23, colorString: '#94aad6' },
    { id: 24, colorString: '#211551' },
    { id: 25, colorString: '#511f90' },
    { id: 26, colorString: '#79378b' },
    { id: 27, colorString: '#aa87b8' },
    { id: 28, colorString: '#c57cac' },
    { id: 29, colorString: '#c2c2c2' },
    { id: 30, colorString: '#555555' },
    { id: 31, colorString: '#000000' },
];
export function updateCountCartItem(number: number) {
    const countCartItem = $('.count-cart-item') as HTMLSpanElement;
    if (countCartItem) {
        const currentItem = parseInt(countCartItem.innerText);
        if (!isNaN(currentItem)) {
            countCartItem.innerText = (currentItem + number).toString();
        }
    }
}
export function updateCartTotal(counter: number) {
    const countCartItem = $('.count-cart-total') as HTMLSpanElement;
    if (countCartItem) {
        const currentItem = parseInt(countCartItem.innerText);
        if (!isNaN(currentItem)) {
            countCartItem.innerText = (currentItem + counter).toString();
        }
        if (currentItem + counter === 0) {
            $('.cart-total')?.remove();
            CartTotal(0);
        }
    }
}
