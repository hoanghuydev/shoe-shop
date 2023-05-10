import { $, appendChild, listPart } from '../../../global';
import { getCurrentPart, getIndexPart, setPart, setRunAnimate } from '../../../Component/Canvas';
import './TablePart.scss';
export function TablePart(): void {
    function addEventListenerElement() {
        // Active current part
        (
            $(`.table-part__item${getIndexPart(getCurrentPart())} > div`) as HTMLElement
        ).classList.add('d-flex');
        ($(`.table-part__item${getIndexPart(getCurrentPart())}`) as HTMLElement).classList.add(
            'bold'
        );
        listPart.map((part, index) => {
            // addEvent for part element
            $(`.table-part__item${index}`)?.addEventListener('click', function () {
                setPart(part.partItem);
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
                setTimeout(() => {
                    tablePart.style.overflowY = 'visible';
                    tablePartHideButton.disabled = false;
                }, 320);
            } else if (!$('.table-part__content')) {
                tablePart!.innerHTML += tableContentString();
                (
                    $(`.table-part__item${getIndexPart(getCurrentPart())}`) as HTMLElement
                ).classList.add('bold');
                (
                    $(`.table-part__item${getIndexPart(getCurrentPart())} > div`) as HTMLElement
                ).classList.add('d-flex');
                tablePart?.classList.remove('isHideTable');
                tablePart?.classList.remove('isShowTable');

                $('.table-part__hide > i')!.classList.remove('rotateY');
                tablePart.style.overflowY = 'scroll';
                addEventListenerElement();
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
                            <p class="part-item__text">${part.partItem}</p>
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
