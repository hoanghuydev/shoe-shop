import { $, $$, appendChild, getParentElement, updateCountCartItem } from '../../../global';
import './LoginForm.scss';
import { request, API } from '../../../untils/request';
import { User } from '../../../model/model';
import { Navbar } from '../../../Component/Navbar';
export function LoginForm(isLogin: boolean) {
    const loginFormString = `
    <!-- Container for demo purpose -->
    <div class="container my-5 py-5">

      <!-- Section: Login form -->
      <section class="">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-5 col-md-8">
            <div class="card rounded-5">
              <div class="card-body p-4">
                <!-- Pills navs -->
                <ul
                    class="nav nav-pills nav-justified mb-3"
                    id="ex1"
                    role="tablist"
                    >
                  <li class="nav-item" role="presentation">
                    <a
                       class="nav-link ${isLogin ? 'active' : ''}"
                       id="tab-login"
                       data-mdb-toggle="pill"
                       href="#pills-login"
                       role="tab"
                       aria-controls="pills-login"
                       aria-selected="true"
                       >Login</a
                      >
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                       class="nav-link ${isLogin ? '' : 'active'}"
                       id="tab-register"
                       data-mdb-toggle="pill"
                       href="#pills-register"
                       role="tab"
                       aria-controls="pills-register"
                       aria-selected="false"
                       >Register</a
                      >
                  </li>
                </ul>
                <!-- Pills navs -->

                <!-- Pills content -->
                <div class="tab-content">
                  <div
                       class="tab-pane fade${isLogin ? ' show active' : ''}"
                       id="pills-login"
                       role="tabpanel"
                       aria-labelledby="tab-login"
                       >
                    <form class='form-login form row g-1'>
                      <div class="text-center mt-4 mb-2">
                        <p>Sign in with:</p>
                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>

                      <p class="text-center mb-4">or:</p>

                      <!-- Email input -->
                      <div class="form-outline mb-4">
                        <input
                               type="email"
                               id="login-name"
                               class="form-control"
                               name="email"
                               required
                               />
                        <label class="form-label p-0" for="loginName" 
                               >Email or username</label
                          >
                          <div class="invalid-feedback">Please enter your email.</div>
                          <div class="valid-feedback error-login"></div>

                      </div>

                      <!-- Password input -->
                      <div class="form-outline mb-4">
                        <input
                               type="password"
                               id="login-password"
                               class="form-control"
                               name="password"
                               required
                               />
                        <label class="form-label p-0" for="login-password"
                               >Password</label
                          >
                          <div class="invalid-feedback">Please enter your password</div>
                      </div>

                      <!-- 2 column grid layout -->
                      <div class="row mb-4">
                        <div class="col-md-6 d-flex justify-content-center">
                          <!-- Checkbox -->
                          <div class="form-check mb-3 mb-md-0">
                            <input
                                   class="form-check-input"
                                   type="checkbox"
                                   value=""
                                   id="loginCheck"
                                   checked
                                   />
                            <label class="form-check-label" for="loginCheck">
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div class="col-md-6 d-flex justify-content-center">
                          <!-- Simple link -->
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>

                      <!-- Submit button -->
                      <button
                              type="submit"
                              class="btn btn-primary btn-rounded w-100 mb-4 btn-sign-in btn-submit-form"
                              >
                        Sign in
                      </button>

                      <!-- Register buttons -->
                      <div class="text-center">
                        <p>Not a member? <a href="#!">Register</a></p>
                      </div>
                    </form>
                  </div>
                  <div
                       class="tab-pane fade ${isLogin ? '' : 'show active'}"
                       id="pills-register"
                       role="tabpanel"
                       aria-labelledby="tab-register"
                       >
                    <form class="form-register form row g-1">
                      <div class="text-center mt-4 mb-2">
                        <p>Sign up with:</p>
                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-facebook-f"></i>
                        </button>

                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-google"></i>
                        </button>

                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-twitter"></i>
                        </button>

                        <button
                                type="button"
                                class="btn btn-link btn-lg btn-floating"
                                data-ripple-color="primary"
                                >
                          <i class="fab fa-github"></i>
                        </button>
                      </div>

                      <p class="text-center mb-4">or:</p>

                      

                
                      <!-- Email input -->
                      <div class="form-outline mb-4">
                        <input
                               type="email"
                               id="registerEmail"
                               class="form-control"
                               required 
                               />
                        <label class="form-label p-0" for="registerEmail" 
                               >Email</label
                          >
                          <div class="invalid-feedback">Please enter your email</div>
                          <div class="valid-feedback error-register"></div>
                      </div>
                      <!-- OTP Input -->
                      
                      <div class="form-outline mb-4 d-flex" style="
                      height: 36px;
                      ">
                      <input type="number" id="opt-code" class="form-control" 
                      style="
                      height: 36px;
                      "
                      required >
                      <label class="form-label p-0" for="">Otp</label>
                      <button class="btn btn-primary btn-rounded ms-3 btn-get-otp btn-white-sppace" style="
                       height: 36px;
                       white-space: nowrap;
                      ">
                        SEND OTP
                        </button>
                      <div class="invalid-feedback" style="
                      margin-top: 37px;
                  ">Please enter your otp code</div>

                      </div>
                      <!-- Coutdown otp -->
                      <div class="countdown-otp">Mail sent. Otp expire in &nbsp;<p class='otp-count'>60</p></div>
                      <!-- Password input -->
                      <div class="form-outline mb-4">
                        <input
                               type="password"
                               id="registerPassword"
                               class="form-control"
                               required 
                               />
                        <label class="form-label p-0" for="registerPassword" 
                               >Password</label
                          >
                          <div class="invalid-feedback">Please enter your password</div>
                      </div>

                      <!-- Checkbox -->
                      <div
                           class="form-check d-flex justify-content-center mb-4"
                           >
                        <input
                               class="form-check-input me-2"
                               type="checkbox"
                               value=""
                               id="registerCheck"
                               checked
                               aria-describedby="registerCheckHelpText"
                               required
                               />
                        <label class="form-check-label" for="registerCheck">
                          I have read and agree to the terms
                        </label>
                      </div>

                      <!-- Submit button -->
                      <button
                              class="btn btn-primary btn-rounded w-100 mb-3 btn-sign-up btn-submit-form"
                              >
                        Sign up
                      </button>
                    </form>
                  </div>
                </div>
                <!-- Pills content -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Section: Login form -->
    </div>
    <!-- Container for demo purpose -->
        `;

    appendChild($('.root'), loginFormString);
    function addEventListenerElement() {
        // Check valid form
        const listBtnSubmit = $$('.btn-submit-form');
        for (let btnSubmit of listBtnSubmit) {
            btnSubmit.addEventListener('click', function (e) {
                const form = getParentElement(btnSubmit, 'form');
                form.classList.add('was-validated');
            });
        }
        // Set border input when focus
        $('.form-outline > input')?.addEventListener('focus', function (e) {
            (e.target as HTMLElement).style.boxShadow = 'inset 0 0 0 1.2px #3b71ca !important';
        });
        //  Login action
        $('.btn-sign-in')?.addEventListener('click', async function (e) {
            // Fetch info user
            e.preventDefault();
            const form = getParentElement($('.btn-sign-in'), 'form');
            if (!form.checkValidity()) {
                return; // Dừng thực hiện tiếp các hành động sau nếu form không hợp lệ
            }
            const user: User = await request(API.login, {
                email: ($('#login-name') as HTMLInputElement).value,
                password: ($('#login-password') as HTMLInputElement).value,
            });
            const userOtherType: any = user;
            if (userOtherType?.message) {
                ($('.error-login') as HTMLDivElement).innerText = userOtherType.message;
                return;
            }
            localStorage.setItem('userInfo', JSON.stringify(user));
            localStorage.setItem('isLogged', 'true');
            window.location.href = 'design.html';
        });

        // Send otp action
        const btnSendMail = $('.btn-get-otp') as HTMLButtonElement;
        let interval: any;
        btnSendMail.addEventListener('click', async function (e) {
            e.preventDefault();
            clearInterval(interval);
            console.log('get parent form');
            const email = ($('#registerEmail') as HTMLInputElement).value;
            if (
                email === '' ||
                !/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/.test(email)
            ) {
                return;
            }
            // func countdown from 60 - 0
            function countdown(): void {
                ($('.countdown-otp') as HTMLDivElement).style.display = 'flex';
                const countdown = $('.otp-count') as HTMLDivElement;
                let count = 60;
                interval = setInterval(() => {
                    count--;
                    if (count === 0) {
                        clearInterval(interval);
                    }
                    countdown.innerText = count.toString();
                }, 1000);
            }
            btnSendMail.innerText = 'Resend OTP';
            countdown();
            const OTP = await request(API.registerOtp, {
                email: ($('#registerEmail') as HTMLInputElement).value,
            });
            if (OTP.message) {
                ($('.error-register') as HTMLDivElement).innerText = OTP.message;
            }
        });
        $('.btn-sign-up')?.addEventListener('click', async (e) => {
            e.preventDefault();
            const form = getParentElement($('.btn-sign-up'), 'form');
            if (!form.checkValidity()) {
                return; // Dừng thực hiện tiếp các hành động sau nếu form không hợp lệ
            }
            const email = ($('#registerEmail') as HTMLInputElement).value;
            const otp = ($('#opt-code') as HTMLInputElement).value;
            const password = ($('#registerPassword') as HTMLInputElement).value;
            const register = await request(API.register, { email, otp, password });
            if (register.message) {
                ($('.error-register') as HTMLDivElement).innerText = register.message;
                return;
            }
            window.location.href = 'login.html';
        });
    }
    addEventListenerElement();
    // Example starter JavaScript for disabling form submissions if there are invalid fields
}
