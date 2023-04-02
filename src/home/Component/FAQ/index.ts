import { appendChild, $, $$ } from '../../../global';
import './FAQ.scss';
export function FAQ() {
    const faqString = `
    <div class="container my-5 py-5">
      <!-- Section: Design Block -->
      <section class="mb-10 text-center text-lg-start">
        <style>
          .cascading-right {
            margin-right: -50px;
          }
          @media (max-width: 991.98px) {
            .cascading-right {
              margin-right: 0;
            }
          }
        </style>

        <!-- Jumbotron -->
        <div class="container py-4">
          <div class="row g-0 align-items-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="card cascading-right" style="
                                                       background: hsla(0, 0%, 100%, 0.55);
                                                       backdrop-filter: blur(30px);
                                                       ">
                <div class="card-body py-5 px-md-5 shadow-5">
                  <h3 class="fw-bold">We know how valuable your shoes is</h3>
                  <h5 class="text-primary mb-5">Let us answer your questions</h5>

                  <p class="fw-bold">Anim pariatur cliche reprehenderit?</p>
                  <p class="text-muted mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                    autem numquam dolore molestias aperiam culpa alias veritatis
                    architecto eos, molestiae vitae ex eligendi libero eveniet
                    dolorem, doloremque rem aliquid perferendis.
                  </p>

                  <p class="fw-bold">Non cupidatat skateboard dolor brunch?</p>
                  <p class="text-muted mb-4">
                    Distinctio corporis, iure facere ducimus quos consectetur ipsa ut
                    magnam autem doloremque ex! Id, sequi. Voluptatum magnam sed fugit
                    iusto minus et suscipit? Minima sunt at nulla tenetur, numquam
                    unde quod modi magnam ab deserunt ipsam sint aliquid dolores
                    libero repellendus cupiditate mollitia quidem dolorem odit
                  </p>

                  <p class="fw-bold">
                    Praesentium voluptatibus temporibus consequatur non aspernatur?
                  </p>
                  <p class="text-muted mb-0">
                    Minima sunt at nulla tenetur, numquam unde quod modi magnam ab
                    deserunt ipsam sint aliquid dolores libero repellendus cupiditate
                    mollitia quidem dolorem.
                  </p>

                </div>
              </div>
            </div>

            <div class="col-lg-6 mb-5 mb-lg-0">
              <img src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/g/c/o/9-rockey-9-magnolia-white-original-imaggutpbvcczyhf.jpeg?q=70" class="w-100 rounded-5 shadow-4" alt="">
            </div>
          </div>
        </div>
        <!-- Jumbotron -->
      </section>
      <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->
    `;
    appendChild($('.root'), faqString);
}
