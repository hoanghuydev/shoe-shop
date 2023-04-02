import { $, appendChild, listPart } from '../../../global';
import { getPart, setPart, setRunAnimate } from '../../../Component/Canvas';
import './TablePart.scss';
export function TablePart(): void {
    function addEventListenerElement() {
        listPart.map((part, index) => {
            // Active current part
            ($(`.table-part__item${listPart.indexOf(getPart())}`) as HTMLElement).classList.add(
                'bold'
            );
            (
                $(`.table-part__item${listPart.indexOf(getPart())} > div`) as HTMLElement
            ).classList.add('d-flex');
            // addEvent for part element
            $(`.table-part__item${index}`)?.addEventListener('click', function () {
                setPart(part);
            });
        });

        // hide button part
        const tablePartHideButton = $('.table-part__hide') as HTMLButtonElement;
        const tablePart = $('.table-part') as HTMLElement;
        tablePartHideButton?.addEventListener('click', function () {
            if ($('.table-part__content')) {
                tablePartHideButton.disabled = true;
                tablePart?.classList.add('isHideTable');
                $('.table-part__hide > i')!.classList.add('rotateY');
                ($('.table-part__content') as HTMLElement).remove();
                tablePart.style.overflowY = 'visible';
                setTimeout(() => {
                    tablePartHideButton.disabled = false;
                }, 320);
            } else if ($('.table-part__content') == null) {
                tablePart!.innerHTML += tableContentString();
                ($(`.table-part__item${listPart.indexOf(getPart())}`) as HTMLElement).classList.add(
                    'bold'
                );
                (
                    $(`.table-part__item${listPart.indexOf(getPart())} > div`) as HTMLElement
                ).classList.add('d-flex');
                tablePart?.classList.remove('isHideTable');
                $('.table-part__hide > i')!.classList.remove('rotateY');
                addEventListenerElement();
                tablePart.style.overflowY = 'scroll';
            }
        });
    }
    function tableContentString() {
        return ` 
        <div class="table-part__content">
            ${listPart
                .map((part, index) => {
                    return `
                        <div class="table-part__item table-part__item${index} p-1 ps-3">
                            <div class="item-active"></div>
                            <p class="part-item__text">${part}</p>
                        </div>
                        `;
                })
                .join('')}
        </div>`;
    }
    const tablePartString = `
    <div class="table-part">
        <div class="table-part__hide">
            <i class="fa-solid fa-arrow-left" style="color: #368bc0"></i>
        </div>
       ${tableContentString()}
    </div>
    `;
    appendChild($('.root'), tablePartString);

    addEventListenerElement();
}
