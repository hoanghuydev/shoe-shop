import { appendChild, $, $$ } from '../../../global';
import './HeaderLanding.scss';
export function HeaderLanding() {
    const headerString = `
    <div
    class="p-5 text-center bg-image"
    style="
      background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp');
    "
    >
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.6);">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="text-white">
            <h1 class="mb-3">Design Your Shoes</h1>
            <h4 class="mb-3">Create your own design with premium materials</h4>
            <a class="btn btn-outline-light btn-lg" href="index.html" role="button"
            >Start Design</a
            >
          </div>
        </div>
      </div>
    </div>`;
    appendChild($('.root'), headerString);
    function animateNavbar() {
        $<HTMLElement>('.navbar')!.style.cssText = 'background-color : transparent;';
        for (let e of $$('.nav-link')) {
            (e as any).style.cssText = 'color : #fff;';
        }
        $<HTMLImageElement>('.navbar-brand > img')!.setAttribute(
            'src',
            'https://iili.io/HOoHd12.md.png'
        );

        let isTransparent: boolean = true;
        window.addEventListener('scroll', function () {
            function changeNav(navStyle: string, logoUrl: string, textColor: string) {
                $<HTMLElement>('.navbar')!.style.cssText = navStyle;
                $<HTMLElement>('.navbar-brand > img')!.setAttribute('src', logoUrl);
                for (let e of $$('.nav-link')) {
                    (e as any).style.cssText = textColor;
                }
                isTransparent = !isTransparent;
            }
            if (this.window.scrollY < 100 && isTransparent == false) {
                changeNav(
                    'background-color : transparent;',
                    'https://iili.io/HOoHd12.md.png',
                    'color : #fff;'
                );
            } else if (this.window.scrollY > 99 && isTransparent) {
                changeNav(
                    'background-color : white;',
                    'https://iili.io/HO3XD91.md.png',
                    'color : #000;'
                );
            }
        });
    }
    animateNavbar();
}
