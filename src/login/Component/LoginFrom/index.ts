import { $, $$, appendChild, getParentElement } from '../../../global';
import './LoginForm.scss';
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
                    <form>
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
                               />
                        <label class="form-label p-0" for="loginName" 
                               >Email or username</label
                          >
                      </div>

                      <!-- Password input -->
                      <div class="form-outline mb-4">
                        <input
                               type="password"
                               id="login-password"
                               class="form-control"
                               />
                        <label class="form-label p-0" for="login-password"
                               >Password</label
                          >
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
                              class="btn btn-primary btn-rounded w-100 mb-4"
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
                    <form>
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

                      <!-- Name input -->
                      <div class="form-outline mb-4">
                        <input
                               type="text"
                               id="registerName"
                               class="form-control"

                               />
                        <label class="form-label p-0" for="registerName" 
                               >Name</label
                          >
                      </div>

                      <!-- Username input -->
                      <div class="form-outline mb-4">
                        <input
                               type="text"
                               id="registerUsername"
                               class="form-control"

                               />
                        <label class="form-label p-0" for="registerUsername" 
                               >Username</label
                          >
                      </div>

                      <!-- Email input -->
                      <div class="form-outline mb-4">
                        <input
                               type="email"
                               id="registerEmail"
                               class="form-control"

                               />
                        <label class="form-label p-0" for="registerEmail" 
                               >Email</label
                          >
                      </div>

                      <!-- Password input -->
                      <div class="form-outline mb-4">
                        <input
                               type="password"
                               id="registerPassword"
                               class="form-control"

                               />
                        <label class="form-label p-0" for="registerPassword" 
                               >Password</label
                          >
                      </div>

                      <!-- Repeat Password input -->
                      <div class="form-outline mb-4">
                        <input
                               type="password"
                               id="registerRepeatPassword"
                               class="form-control"

                               />
                        <label class="form-label p-0" for="registerRepeatPassword" 
                               >Repeat password</label
                          >
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
                               />
                        <label class="form-check-label" for="registerCheck">
                          I have read and agree to the terms
                        </label>
                      </div>

                      <!-- Submit button -->
                      <button
                              type="submit"
                              class="btn btn-primary btn-rounded w-100 mb-3"
                              >
                        Sign in
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
        $('.form-outline > input')?.addEventListener('focus', function (e) {
            console.log(1);

            (e.target as HTMLElement).style.boxShadow = 'inset 0 0 0 1.2px #3b71ca !important';
        });
    }
    addEventListenerElement();
}
