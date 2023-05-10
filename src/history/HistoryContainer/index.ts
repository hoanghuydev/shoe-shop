import { appendChild, $ } from '../../global';
export function HistoryContainer() {
    const cartString = `
    <!-- Container for demo purpose -->
    <div class="container cart-container" style="margin-top : 100px">
    
      <!--Section: Design Block-->
      <section class="mb-10">
        <div class="row">
          <div class="col-xl-9 mx-auto order-list">
            <h5 class="mb-4">Your purchase history</h5>
            <hr />
          </div>
        </div>
      </section>
      <!--Section: Design Block-->
    
    </div>
    <!-- Container for demo purpose -->
`;
    appendChild($('.root'), cartString);
}
