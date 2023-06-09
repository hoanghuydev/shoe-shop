import { appendChild, $, $$ } from '../../global';
import { User } from '../../model/model';
import { API, request } from '../../untils/request';
import './Navbar.scss';
export async function Navbar(isLogged: boolean, profileInfo?: User) {
    const urlLogo = 'https://iili.io/HO3XD91.md.png';
    let navbarString;
    if (isLogged && profileInfo) {
        navbarString = `
        <!-- Navbar -->
<nav class="navbar navbar-expand-lg">
  <!-- Container wrapper -->
  <div class="container-xxl">
    <!-- Toggle button -->
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <!-- Collapsible wrapper -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Navbar brand -->
         
      <a class="navbar-brand mt-2 mt-lg-0" href="index.html" >
        <img
          src=${urlLogo}
          height="40"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <!-- Left links -->
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="design.html">Design</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="cart.html">Cart</a>
        </li>
      </ul>
      <!-- Left links -->
    </div>
    <!-- Collapsible wrapper -->

    <!-- Right elements -->
    <div class="d-flex align-items-center">
      <!-- Icon -->
      <a class="text-reset me-3" href="cart.html">
        <i class="fas fa-shopping-cart"></i>
        <span class="badge rounded-pill badge-notification bg-danger count-cart-item">0</span>
      </a>

      <!-- Notifications -->
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <!-- New Notify -->
          <!-- <span class="badge rounded-pill badge-notification bg-danger">1</span> -->
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <!-- Avatar -->
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src=${profileInfo.avatarUrl}
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="history.html">Purchase history</a>
          </li>
          <li>
            <div class="dropdown-item logout-btn" onclick="
              localStorage.setItem('isLogged', 'false');
              localStorage.setItem('userInfo', 'false');
              window.location.reload();
            ">Logout</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Right elements -->
  </div>
  <!-- Container wrapper -->
</nav>
<!-- Navbar -->
        `;
    } else {
        navbarString = `<!-- Navbar -->
        <nav class="navbar navbar-expand-lg">
          <!-- Container wrapper -->
          <div class="container-xxl">
            <!-- Navbar brand -->
            <a class="navbar-brand me-2" href="index.html">
              <img
                src =${urlLogo}
                height="40"
                alt="MDB Logo"
                loading="lazy"
                style="margin-top: -1px;"
              />
            </a>
        
            <!-- Toggle button -->
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
        
            <!-- Collapsible wrapper -->
            <div class="collapse navbar-collapse" id="navbarButtonsExample">
              <!-- Left links -->
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="design.html">Design</a>
                </li>
              
              </ul>
              <!-- Left links -->
        
              <div class="d-flex align-items-center">
                <button type="button" class="btn btn-link px-3 me-2" onclick="localStorage.setItem('isLogin', JSON.stringify(true));
                window.location.href = './login.html';"
                }>
                  Login
                </button>
                <button type="button" class="btn btn-primary me-3" onclick="localStorage.setItem('isLogin', JSON.stringify(false));
                window.location.href = './login.html';"
                }>
                  Sign up
                </button>
                <a
                  class="btn btn-dark px-3"
                  href="https://github.com/hoanghuydev/shoe-shop"
                  role="button"
                  ><i class="fab fa-github"></i
                ></a>
              </div>
            </div>
            <!-- Collapsible wrapper -->
          </div>
          <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->`;
    }
    appendChild($('.root'), navbarString);
    addEventListenerElement();
    async function addEventListenerElement() {
        if (isLogged && profileInfo) {
            const user: User = JSON.parse(localStorage.getItem('userInfo') ?? 'false');
            let listCartItem = await request(
                API.getUserCart(user._id),
                undefined,
                user.accessToken
            );
            const countCartItem = $('.count-cart-item') as HTMLSpanElement;
            if (countCartItem) {
                const currentItem = parseInt(countCartItem.innerText);
                if (!isNaN(currentItem)) {
                    countCartItem.innerText = listCartItem.shoesList.length.toString();
                }
            }
        }
    }
}
