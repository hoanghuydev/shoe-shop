import { colorList, $, $$, appendChild } from '../../../global';
import { handleColor, setPart } from '../../../Component/Canvas';
import './DesignTable.scss';
import * as THREE from 'three';
export function DesignTable(): void {
    function renderColor(): string {
        return colorList
            .map(
                (color) => `
            <div class="color-pick" for=".color-pick--input">
                <label class="
                color-pick--label${color.id}
                color-pick--label
                "
                for="color-pick--input${color.id}"
                style="background-color : ${color.colorString}"
                "></label>
                <input
                    type="radio"
                    class="d-none"
                    id="color-pick--input${color.id}"
                    name="color"
                />
            </div>
    `
            )
            .join('');
    }
    const designTableString = `
    <div class="design-table">
        <div class="toggle-select-color">
            <i class="fa-solid fa-chevron-down" style="color: #386bc0;"></i>
        </div>
        <div class="design-table__fix-hide"></div>
        <div class="select-color">
            <div class ="color-picker">
                <input type="color" name="color" class="color-picker--input" value="#ffffff" />
                <img src="./assest/sliders-solid.svg" class="fa-sliders-up"  onclick="document.querySelector('.color-picker--input').click()"/>
            </div>
            ${renderColor()}
        </div>
    </div>
    
    `;
    appendChild($('.root'), designTableString);
    function addEventListenerElement(): void {
        // Listen set color
        colorList.map((color) => {
            $(`#color-pick--input${color.id}`)?.addEventListener('change', function () {
                handleColor(color.colorString);
            });
        });
        // Listen color input change
        $('.color-picker--input')?.addEventListener('input', function (e) {
            const element = e.currentTarget as HTMLInputElement;
            const value = element.value;
            handleColor(value);
        });
        // Listen hide design table animate
        const toggleDesignTable = $<HTMLElement>('.toggle-select-color');
        if (toggleDesignTable) {
            toggleDesignTable.addEventListener('click', function () {
                (toggleDesignTable as HTMLButtonElement).disabled = true;
                setTimeout(() => {
                    (toggleDesignTable as HTMLButtonElement).disabled = false;
                }, 350);
                $<HTMLElement>('.design-table')?.classList.toggle('isHide');
                $<HTMLElement>('.toggle-select-color > i')?.classList.toggle('rotateHide');
            });
        }
    }
    addEventListenerElement();
}
