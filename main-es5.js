function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/login/login.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/login/login.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularTemplatesBootstrap4SrcLibLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"hero mt-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-8 mx-auto\">\n\n        <div class=\"card border-none\">\n          <div class=\"card-body\">\n            <div class=\"mt-2\">\n              <img\n                *ngIf=\"profileImage\"\n                [src]=\"profileImage\"\n                alt=\"Profile Image\"\n                class=\"brand-logo mx-auto d-block img-fluid rounded-circle\"\n              />\n            </div>\n            <p\n              *ngIf=\"introText\"\n              class=\"mt-4 text-white lead text-center\"\n            >\n              {{introText}}\n            </p>\n            <div class=\"mt-2\">\n              <authumn-login></authumn-login>\n              <div class=\"clearfix\"></div>\n            </div>\n            <authumn-bs4-social\n              *ngIf=\"socialButtons\"\n            ></authumn-bs4-social>\n            <div class=\"text-center text-light mt-3\">\n              Don't have an account yet? <a [routerLink]=\"['/user/register']\">Sign Up Now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/register/register.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/register/register.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularTemplatesBootstrap4SrcLibRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"hero mt-3\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-6 col-sm-8 mx-auto\">\n\n        <div class=\"card border-none\">\n          <div class=\"card-body\">\n            <div class=\"mt-2 text-center text-light\">\n              <h2>Create Your Account</h2>\n            </div>\n            <p\n              *ngIf=\"introText\"\n              class=\"mt-4 text-white lead text-center\"\n            >\n              {{introText}}\n            </p>\n            <div class=\"mt-0\">\n              <authumn-register></authumn-register>\n              <div class=\"clearfix\"></div>\n            </div>\n            <authumn-bs4-social\n              *ngIf=\"socialButtons\"\n            ></authumn-bs4-social>\n            <div class=\"text-center text-light mt-3\">\n              Already have an account? <a [routerLink]=\"['/user/login']\">Login Now</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/social/social.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/social/social.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularTemplatesBootstrap4SrcLibSocialSocialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"content-divider center mt-3\"><span class=\"bg-dark text-light\">or</span></p>\n<p class=\"mt-4 social-login text-center\">\n  <a href=\"#\" class=\"btn btn-twitter\"><i class=\"icon ion-logo-twitter\"></i></a>\n  <a href=\"#\" class=\"btn btn-facebook\"><i class=\"icon ion-logo-facebook\"></i></a>\n  <a href=\"#\" class=\"btn btn-linkedin\"><i class=\"ion-logo-linkedin\"></i></a>\n  <a href=\"#\" class=\"btn btn-google\"><i class=\"ion-logo-googleplus\"></i></a>\n  <a href=\"#\" class=\"btn btn-github\"><i class=\"ion-logo-octocat\"></i></a>\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/login/login.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/login/login.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularUserSrcLibLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<json-schema-form\n  *ngIf=\"formActive\"\n  [loadExternalAssets]=\"false\"\n  [(ngModel)]=\"model\"\n  [form]=\"formObject\"\n  [options]=\"formOptions\"\n  [framework]=\"userTemplates.formFramework\"\n  (onChanges)=\"onChanges($event)\"\n  (onSubmit)=\"onSubmit($event)\"\n  (isValid)=\"isValid($event)\"\n  (validationErrors)=\"validationErrors($event)\">\n</json-schema-form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/lost-password/lost-password.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/lost-password/lost-password.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularUserSrcLibLostPasswordLostPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<json-schema-form\n  *ngIf=\"formActive\"\n  [loadExternalAssets]=\"false\"\n  [(ngModel)]=\"model\"\n  [form]=\"formObject\"\n  [options]=\"formOptions\"\n  [framework]=\"userTemplates.formFramework\"\n  (onChanges)=\"onChanges($event)\"\n  (onSubmit)=\"onSubmit($event)\"\n  (isValid)=\"isValid($event)\"\n  (validationErrors)=\"validationErrors($event)\">\n</json-schema-form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/register/register.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/register/register.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularUserSrcLibRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<json-schema-form\n  *ngIf=\"formActive\"\n  [ngClass]=\"{\n    'invalid': !valid\n  }\"\n  [loadExternalAssets]=\"false\"\n  [(ngModel)]=\"model\"\n  [form]=\"formObject\"\n  [options]=\"formOptions\"\n  framework=\"userTemplates.formFramework\"\n  (onChanges)=\"onChanges($event)\"\n  (onSubmit)=\"onSubmit($event)\"\n  (isValid)=\"isValid($event)\"\n  (validationErrors)=\"validationErrors($event)\">\n</json-schema-form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/user.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/user.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsProjectsAngularUserSrcLibUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "All user options..\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/bootstrap4/app/app.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/bootstrap4/app/app.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcBootstrap4AppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-dark border-bottom box-shadow\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal text-light\">Authumn Angular Bootstrap 4</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a\n      class=\"p-2 text-light\"\n      href=\"#\"\n      [routerLink]=\"['user/login']\"\n    >Login</a>\n    <em class=\"text-muted\">or</em>\n    <a\n      class=\"p-2 text-light\"\n      href=\"#\"\n      [routerLink]=\"['user/register']\"\n    >Sign up</a>\n    <a\n      class=\"p-2 text-light\"\n      [routerLink]=\"['user/lost_password']\"\n    >\n      Lost Password?\n    </a>\n  </nav>\n</div>\n<div class=\"hero\">\n  <router-outlet></router-outlet>\n</div>\n\n";
    /***/
  },

  /***/
  "./projects/angular-auth/src/lib/auth.actions.ts":
  /*!*******************************************************!*\
    !*** ./projects/angular-auth/src/lib/auth.actions.ts ***!
    \*******************************************************/

  /*! exports provided: AuthActions, AuthAuthenticationErrorAction, AuthAuthenticationRedirectAction, AuthAuthenticatedAction, AuthLogoutAction */

  /***/
  function projectsAngularAuthSrcLibAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthActions", function () {
      return AuthActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthAuthenticationErrorAction", function () {
      return AuthAuthenticationErrorAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthAuthenticationRedirectAction", function () {
      return AuthAuthenticationRedirectAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthAuthenticatedAction", function () {
      return AuthAuthenticatedAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthLogoutAction", function () {
      return AuthLogoutAction;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthActions = function AuthActions() {
      _classCallCheck(this, AuthActions);
    };

    AuthActions.AUTHENTICATED = '[Auth] AUTHENTICATED';
    AuthActions.AUTHENTICATION_REDIRECT = '[Auth] AUTHENTICATION REDIRECT';
    AuthActions.LOGOUT = '[Auth] LOGOUT';
    AuthActions.ERROR = '[Auth] ERROR';

    var AuthAuthenticationErrorAction = function AuthAuthenticationErrorAction(payload) {
      _classCallCheck(this, AuthAuthenticationErrorAction);

      this.payload = payload;
    };

    AuthAuthenticationErrorAction.type = AuthActions.ERROR;

    var AuthAuthenticationRedirectAction = function AuthAuthenticationRedirectAction(payload) {
      _classCallCheck(this, AuthAuthenticationRedirectAction);

      this.payload = payload;
    };

    AuthAuthenticationRedirectAction.type = AuthActions.AUTHENTICATION_REDIRECT;

    var AuthAuthenticatedAction = function AuthAuthenticatedAction(payload) {
      _classCallCheck(this, AuthAuthenticatedAction);

      this.payload = payload;
    };

    AuthAuthenticatedAction.type = AuthActions.AUTHENTICATED;

    var AuthLogoutAction = function AuthLogoutAction() {
      _classCallCheck(this, AuthLogoutAction);
    };

    AuthLogoutAction.type = AuthActions.LOGOUT;
    /***/
  },

  /***/
  "./projects/angular-auth/src/lib/auth.config.ts":
  /*!******************************************************!*\
    !*** ./projects/angular-auth/src/lib/auth.config.ts ***!
    \******************************************************/

  /*! exports provided: AuthConfig */

  /***/
  function projectsAngularAuthSrcLibAuthConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthConfig", function () {
      return AuthConfig;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthConfig = function AuthConfig() {
      _classCallCheck(this, AuthConfig);

      this.api = {
        loginUrl: '',
        registerUrl: ''
      };
      this.resourceServers = [];
      this.routes = {
        login: ['/user', 'login'],
        "return": ['/']
      };
    };
    /***/

  },

  /***/
  "./projects/angular-auth/src/lib/auth.guard.ts":
  /*!*****************************************************!*\
    !*** ./projects/angular-auth/src/lib/auth.guard.ts ***!
    \*****************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function projectsAngularAuthSrcLibAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./projects/angular-auth/src/lib/auth.service.ts");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.actions */
    "./projects/angular-auth/src/lib/auth.actions.ts");
    /* harmony import */


    var _auth_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.config */
    "./projects/angular-auth/src/lib/auth.config.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, authConfig, store) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.authConfig = authConfig;
        this.store = store;
      }

      _createClass(AuthGuard, [{
        key: "protectedRoute",
        value: function protectedRoute(url) {
          if (this.authService.isAuthenticated()) {
            return true;
          }

          this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthAuthenticationRedirectAction"]({
            returnUrl: url || this.authConfig.routes["return"]
          }));
          return false;
        }
      }, {
        key: "canActivate",
        value: function canActivate(_route, state) {
          return this.protectedRoute(state.url);
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(_route, state) {
          return this.protectedRoute(state.url);
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AuthConfig"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
      }];
    };

    AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./projects/angular-auth/src/lib/auth.interceptor.ts":
  /*!***********************************************************!*\
    !*** ./projects/angular-auth/src/lib/auth.interceptor.ts ***!
    \***********************************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function projectsAngularAuthSrcLibAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./projects/angular-auth/src/lib/auth.service.ts");
    /* harmony import */


    var _auth_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.config */
    "./projects/angular-auth/src/lib/auth.config.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthInterceptor =
    /*#__PURE__*/
    function () {
      function AuthInterceptor(injector, authConfig) {
        _classCallCheck(this, AuthInterceptor);

        this.injector = injector;
        this.authConfig = authConfig;
      }

      _createClass(AuthInterceptor, [{
        key: "isResourceUrl",
        value: function isResourceUrl(url) {
          return Boolean(this.authConfig.resourceServers.find(function (server) {
            return url.startsWith(server);
          }));
        }
      }, {
        key: "intercept",
        value: function intercept(request, next) {
          this.authService = this.injector.get(_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]);
          var url = request.url.toLowerCase();

          if (this.isResourceUrl(url)) {
            var authHeader = this.authService.getAuthorizationHeader();

            if (authHeader) {
              var authHeaders = request.headers.set('Authorization', authHeader);
              var authRequest = request.clone({
                headers: authHeaders
              });
              return next.handle(authRequest);
            }
          }

          return next.handle(request);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _auth_config__WEBPACK_IMPORTED_MODULE_2__["AuthConfig"]
      }];
    };

    AuthInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./projects/angular-auth/src/lib/auth.module.ts":
  /*!******************************************************!*\
    !*** ./projects/angular-auth/src/lib/auth.module.ts ***!
    \******************************************************/

  /*! exports provided: authFeatureModule, AuthModule */

  /***/
  function projectsAngularAuthSrcLibAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "authFeatureModule", function () {
      return authFeatureModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.guard */
    "./projects/angular-auth/src/lib/auth.guard.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.service */
    "./projects/angular-auth/src/lib/auth.service.ts");
    /* harmony import */


    var _auth_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./auth.config */
    "./projects/angular-auth/src/lib/auth.config.ts");
    /* harmony import */


    var _provider_auth_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./provider/auth.provider */
    "./projects/angular-auth/src/lib/provider/auth.provider.ts");
    /* harmony import */


    var _auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth.interceptor */
    "./projects/angular-auth/src/lib/auth.interceptor.ts");
    /* harmony import */


    var _auth_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./auth.state */
    "./projects/angular-auth/src/lib/auth.state.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthModule_1;

    var authFeatureModule = _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["NgxsModule"].forFeature([_auth_state__WEBPACK_IMPORTED_MODULE_9__["AuthState"]]); // @dynamic


    var AuthModule = AuthModule_1 =
    /*#__PURE__*/
    function () {
      function AuthModule(parentModule) {
        _classCallCheck(this, AuthModule);

        if (parentModule) {
          throw new Error('AuthModule is already loaded. Import it in the AppModule only');
        }
      }

      _createClass(AuthModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: AuthModule_1,
            providers: [{
              provide: _auth_config__WEBPACK_IMPORTED_MODULE_6__["AuthConfig"],
              useValue: config
            }]
          };
        }
      }]);

      return AuthModule;
    }();

    AuthModule.ctorParameters = function () {
      return [{
        type: AuthModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }];
    };

    AuthModule = AuthModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], authFeatureModule],
      providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _provider_auth_provider__WEBPACK_IMPORTED_MODULE_7__["AuthProvider"], _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
        useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"],
        multi: true
      }]
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])())], AuthModule);
    /***/
  },

  /***/
  "./projects/angular-auth/src/lib/auth.service.ts":
  /*!*******************************************************!*\
    !*** ./projects/angular-auth/src/lib/auth.service.ts ***!
    \*******************************************************/

  /*! exports provided: AuthService */

  /***/
  function projectsAngularAuthSrcLibAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _provider_auth_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./provider/auth.provider */
    "./projects/angular-auth/src/lib/provider/auth.provider.ts");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./auth.actions */
    "./projects/angular-auth/src/lib/auth.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(authProvider, store) {
        _classCallCheck(this, AuthService);

        this.authProvider = authProvider;
        this.store = store;
      }

      _createClass(AuthService, [{
        key: "getToken",
        value: function getToken() {
          return this.getItem('access_token');
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          var user = this.getUser();

          if (user) {
            return user.id;
          }

          return null;
        }
      }, {
        key: "getUsername",
        value: function getUsername() {
          var user = this.getUser();

          if (user) {
            return user.username;
          }

          return null;
        }
      }, {
        key: "getUser",
        value: function getUser() {
          var user = this.getItem('currentUser');

          if (user) {
            return JSON.parse(user);
          }

          return null;
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var user = this.getUser();

          if (user) {
            this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthAuthenticatedAction"](user));
          }
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var token = this.getToken();

          if (!token || this.isExpired()) {
            this.clear();
            return false;
          }

          return true;
        }
      }, {
        key: "isExpired",
        value: function isExpired() {
          var tokenExpire = Number(this.getItem('tokenExpire'));
          return tokenExpire - Date.now() <= 0;
        }
      }, {
        key: "getAuthorizationHeader",
        value: function getAuthorizationHeader() {
          var accessToken = this.getToken();

          if (accessToken) {
            return "Bearer ".concat(accessToken);
          }

          return null;
        }
      }, {
        key: "login",
        value: function login(username, password) {
          var _this = this;

          return this.authProvider.login(username, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref) {
            var access_token = _ref.access_token,
                expires_in = _ref.expires_in;

            var _this$decode = _this.decode(access_token),
                id = _this$decode.sub,
                email = _this$decode.email,
                userName = _this$decode.username;

            var user = {
              id: id,
              email: email,
              username: userName
            };

            _this.setItem('access_token', access_token);

            _this.setItem('currentUser', JSON.stringify(user));

            _this.setItem('tokenExpire', String(Date.now() + expires_in * 1000));

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthAuthenticatedAction"](user)));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthAuthenticationErrorAction"]({
              message: error.message
            })));
          }));
        }
      }, {
        key: "decode",
        value: function decode(token) {
          return jwt_decode__WEBPACK_IMPORTED_MODULE_1___default()(token);
        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken() {
          var accessToken = this.getToken();

          if (accessToken) {
            return this.decode(accessToken);
          }

          throw Error('Could not decode token.');
        }
      }, {
        key: "clear",
        value: function clear() {
          this.removeItem('accessToken');
          this.removeItem('currentUser');
          this.removeItem('tokenExpire');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.clear();
          this.store.dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthLogoutAction"]());
        }
      }, {
        key: "getItem",
        value: function getItem(key) {
          if (localStorage) {
            return localStorage.getItem(key);
          }

          return null;
        }
      }, {
        key: "setItem",
        value: function setItem(key, value) {
          if (localStorage) {
            localStorage.setItem(key, value);
          }
        }
      }, {
        key: "removeItem",
        value: function removeItem(key) {
          if (localStorage) {
            localStorage.removeItem(key);
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _provider_auth_provider__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    AuthService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./projects/angular-auth/src/lib/auth.state.ts":
  /*!*****************************************************!*\
    !*** ./projects/angular-auth/src/lib/auth.state.ts ***!
    \*****************************************************/

  /*! exports provided: AuthState */

  /***/
  function projectsAngularAuthSrcLibAuthStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthState", function () {
      return AuthState;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.actions */
    "./projects/angular-auth/src/lib/auth.actions.ts");
    /* harmony import */


    var _auth_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.config */
    "./projects/angular-auth/src/lib/auth.config.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthState_1;

    var AuthState = AuthState_1 =
    /*#__PURE__*/
    function () {
      function AuthState(authConfig) {
        _classCallCheck(this, AuthState);

        this.authConfig = authConfig;
      }

      _createClass(AuthState, [{
        key: "logout",
        value: function logout(_ref2) {
          var dispatch = _ref2.dispatch,
              patchState = _ref2.patchState;
          patchState({
            isAuthenticated: false
          });
          dispatch(new _auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthAuthenticationRedirectAction"]({
            returnUrl: ''
          }));
        }
      }, {
        key: "authenticationRedirect",
        value: function authenticationRedirect(_ref3, _ref4) {
          var dispatch = _ref3.dispatch,
              patchState = _ref3.patchState;
          var payload = _ref4.payload;
          patchState({
            returnUrl: payload.returnUrl
          });
          dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["Navigate"](this.authConfig.routes.login));
        }
      }, {
        key: "authenticated",
        value: function authenticated(_ref5, _ref6) {
          var dispatch = _ref5.dispatch,
              getState = _ref5.getState,
              patchState = _ref5.patchState;
          var _ref6$payload = _ref6.payload,
              login = _ref6$payload.username,
              id = _ref6$payload.id;
          var state = getState();
          var returnUrl = AuthState_1.selectorAuthReturnUrl(state);
          var url = returnUrl ? [returnUrl] : this.authConfig.routes["return"];
          patchState({
            isAuthenticated: true,
            user: {
              id: id,
              login: login
            }
          });
          dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["Navigate"](url));
        }
      }], [{
        key: "selectorIsAuthenticated",
        value: function selectorIsAuthenticated(state) {
          return state.isAuthenticated;
        }
      }, {
        key: "getUser",
        value: function getUser(state) {
          return state.user || null;
        }
      }, {
        key: "selectorAuthReturnUrl",
        value: function selectorAuthReturnUrl(state) {
          return state.returnUrl;
        }
      }]);

      return AuthState;
    }();

    AuthState.ctorParameters = function () {
      return [{
        type: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AuthConfig"]
      }];
    };

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthLogoutAction"])], AuthState.prototype, "logout", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthAuthenticationRedirectAction"])], AuthState.prototype, "authenticationRedirect", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_auth_actions__WEBPACK_IMPORTED_MODULE_3__["AuthAuthenticatedAction"])], AuthState.prototype, "authenticated", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], AuthState, "selectorIsAuthenticated", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], AuthState, "getUser", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()], AuthState, "selectorAuthReturnUrl", null);

    AuthState = AuthState_1 = __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'auth',
      defaults: {
        isAuthenticated: false,
        returnUrl: ['/']
      }
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AuthState);
    /***/
  },

  /***/
  "./projects/angular-auth/src/lib/provider/auth.provider.ts":
  /*!*****************************************************************!*\
    !*** ./projects/angular-auth/src/lib/provider/auth.provider.ts ***!
    \*****************************************************************/

  /*! exports provided: AuthProvider */

  /***/
  function projectsAngularAuthSrcLibProviderAuthProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthProvider", function () {
      return AuthProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var qs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! qs */
    "./node_modules/qs/lib/index.js");
    /* harmony import */


    var qs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _auth_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth.config */
    "./projects/angular-auth/src/lib/auth.config.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthProvider =
    /*#__PURE__*/
    function () {
      function AuthProvider(http, authConfig) {
        _classCallCheck(this, AuthProvider);

        this.http = http;
        this.authConfig = authConfig;
      }

      _createClass(AuthProvider, [{
        key: "login",
        value: function login(username, password) {
          return this.http.post(this.authConfig.api.loginUrl, qs__WEBPACK_IMPORTED_MODULE_2__["stringify"]({
            username: username,
            password: password
          }), {
            headers: {
              'Content-type': 'application/x-www-form-urlencoded'
            }
          });
        }
      }, {
        key: "register",
        value: function register(username, password) {
          return this.http.post(this.authConfig.api.registerUrl, {
            username: username,
            password: password
          });
        }
      }]);

      return AuthProvider;
    }();

    AuthProvider.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _auth_config__WEBPACK_IMPORTED_MODULE_4__["AuthConfig"]
      }];
    };

    AuthProvider = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], AuthProvider);
    /***/
  },

  /***/
  "./projects/angular-auth/src/public_api.ts":
  /*!*************************************************!*\
    !*** ./projects/angular-auth/src/public_api.ts ***!
    \*************************************************/

  /*! exports provided: AuthProvider, AuthActions, AuthAuthenticationErrorAction, AuthAuthenticationRedirectAction, AuthAuthenticatedAction, AuthLogoutAction, AuthConfig, AuthGuard, AuthInterceptor, AuthService, AuthState, authFeatureModule, AuthModule */

  /***/
  function projectsAngularAuthSrcPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_provider_auth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/provider/auth.provider */
    "./projects/angular-auth/src/lib/provider/auth.provider.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthProvider", function () {
      return _lib_provider_auth_provider__WEBPACK_IMPORTED_MODULE_0__["AuthProvider"];
    });
    /* harmony import */


    var _lib_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/auth.actions */
    "./projects/angular-auth/src/lib/auth.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthActions", function () {
      return _lib_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthAuthenticationErrorAction", function () {
      return _lib_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthAuthenticationErrorAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthAuthenticationRedirectAction", function () {
      return _lib_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthAuthenticationRedirectAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthAuthenticatedAction", function () {
      return _lib_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthAuthenticatedAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthLogoutAction", function () {
      return _lib_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthLogoutAction"];
    });
    /* harmony import */


    var _lib_auth_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/auth.config */
    "./projects/angular-auth/src/lib/auth.config.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthConfig", function () {
      return _lib_auth_config__WEBPACK_IMPORTED_MODULE_2__["AuthConfig"];
    });
    /* harmony import */


    var _lib_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/auth.guard */
    "./projects/angular-auth/src/lib/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _lib_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"];
    });
    /* harmony import */


    var _lib_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/auth.interceptor */
    "./projects/angular-auth/src/lib/auth.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return _lib_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"];
    });
    /* harmony import */


    var _lib_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/auth.service */
    "./projects/angular-auth/src/lib/auth.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return _lib_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
    });
    /* harmony import */


    var _lib_auth_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lib/auth.state */
    "./projects/angular-auth/src/lib/auth.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthState", function () {
      return _lib_auth_state__WEBPACK_IMPORTED_MODULE_6__["AuthState"];
    });
    /* harmony import */


    var _lib_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lib/auth.module */
    "./projects/angular-auth/src/lib/auth.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "authFeatureModule", function () {
      return _lib_auth_module__WEBPACK_IMPORTED_MODULE_7__["authFeatureModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return _lib_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./projects/angular-templates-bootstrap4/src/lib/bootstrap4.templates.module.ts":
  /*!**************************************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/lib/bootstrap4.templates.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: Bootstrap4TemplatesModule */

  /***/
  function projectsAngularTemplatesBootstrap4SrcLibBootstrap4TemplatesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4TemplatesModule", function () {
      return Bootstrap4TemplatesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _authumn_angular_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @authumn/angular-user */
    "./projects/angular-user/src/public_api.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./projects/angular-templates-bootstrap4/src/lib/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./register/register.component */
    "./projects/angular-templates-bootstrap4/src/lib/register/register.component.ts");
    /* harmony import */


    var _social_social_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./social/social.component */
    "./projects/angular-templates-bootstrap4/src/lib/social/social.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Bootstrap4TemplatesModule = function Bootstrap4TemplatesModule() {
      _classCallCheck(this, Bootstrap4TemplatesModule);
    };

    Bootstrap4TemplatesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _authumn_angular_user__WEBPACK_IMPORTED_MODULE_3__["UserComponentsModule"]],
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap4LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["Bootstrap4RegisterComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_6__["Bootstrap4SocialComponent"]],
      exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap4LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["Bootstrap4RegisterComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_6__["Bootstrap4SocialComponent"]],
      providers: [{
        provide: _authumn_angular_user__WEBPACK_IMPORTED_MODULE_3__["UserTemplates"],
        useValue: {
          formFramework: 'bootstrap-4',
          login: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap4LoginComponent"],
          register: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["Bootstrap4RegisterComponent"],
          social: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["Bootstrap4RegisterComponent"]
        }
      }],
      entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["Bootstrap4LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["Bootstrap4RegisterComponent"]]
    })], Bootstrap4TemplatesModule); // provide configuration with yet another forRoot() method?

    /***/
  },

  /***/
  "./projects/angular-templates-bootstrap4/src/lib/login/login.component.scss":
  /*!**********************************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/lib/login/login.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularTemplatesBootstrap4SrcLibLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hero .container {\n  z-index: 3;\n  position: relative;\n}\n\n.hero .card {\n  background: rgba(52, 58, 64, 0.7);\n}\n\n.card {\n  min-width: 385px;\n}\n\n::ng-deep .help-block {\n  color: white;\n  font-size: small;\n  margin-top: 1rem;\n}\n\n::ng-deep .schema-form-submit {\n  color: white;\n}\n\n::ng-deep .schema-form-submit p {\n  font-size: small;\n}\n\n::ng-deep .form-control {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: white;\n}\n\n::ng-deep .form-control:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  border-width: 2px;\n  color: white;\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\n}\n\n::ng-deep label.control-label {\n  color: white;\n}\n\n::ng-deep input.btn {\n  float: right;\n}\n\na, a:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n@media (min-width: 576px) {\n  section {\n    padding: 40px 0px;\n  }\n\n  .hero .card .card-block {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n}\n\n@media (max-width: 576px) {\n  section {\n    padding: 20px;\n  }\n}\n\n.bg-alt {\n  background-color: #fff;\n}\n\n.btn {\n  transition: 350ms ease all;\n  text-transform: uppercase;\n  font-weight: 500;\n  padding: 0.6rem 1.5rem;\n  cursor: pointer;\n}\n\n.btn:hover, .btn:focus {\n  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.15);\n}\n\n.btn-primary {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n\n.btn-primary:hover, .btn-primary:focus {\n  color: #fff !important;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.form-control {\n  height: 45px;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #FFFFFF;\n}\n\n.form-control:focus {\n  border-color: #FFFFFF;\n  background-color: transparent;\n  color: #FFFFFF;\n}\n\n.border-none {\n  border: none !important;\n  border-color: transparent !important;\n}\n\n.text-primary {\n  color: #ff5722 !important;\n}\n\n.custom-control-input:checked ~ .custom-control-indicator {\n  color: #fff;\n  background-color: #ff5722;\n  outline-color: #ff5722;\n}\n\n.content-divider.center {\n  text-align: center;\n}\n\n.content-divider {\n  position: relative;\n  z-index: 1;\n}\n\n.content-divider > span, .content-divider > a {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.content-divider > span:before, .content-divider > a:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 1px;\n  background-color: #ddd;\n  width: 100%;\n  z-index: -1;\n}\n\n.social-login .btn {\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  padding: 0.5rem 0;\n  font-size: 18px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.social-login .btn:hover {\n  border: 2px solid white;\n}\n\n.social-login .btn-twitter {\n  background: #00aced;\n}\n\n.social-login .btn-facebook {\n  background: #3b5998;\n}\n\n.social-login .btn-google {\n  background: #dd4b39;\n}\n\n.social-login .btn-linkedin {\n  background: #007bb6;\n}\n\n.social-login .btn-github {\n  background: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvZGF0YS9naXQvYXV0aHVtbi9hdXRodW1uLWFuZ3VsYXIvcHJvamVjdHMvYW5ndWxhci10ZW1wbGF0ZXMtYm9vdHN0cmFwNC9zcmMvbGliL3NoYXJlZC9zaGFyZWQuc2NzcyIsInByb2plY3RzL2FuZ3VsYXItdGVtcGxhdGVzLWJvb3RzdHJhcDQvc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUNBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRERFO0VBQ0UsZ0JBQUE7QUNHSjs7QURDQTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUU7RUFDRSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7QUNFSjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxpQkFBQTtFQ0VGOztFREFBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLGFBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0Usc0JBQUE7QUNHRjs7QUREQTtFQUVFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsNENBQUE7QUNLRjs7QURIQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7QUNNRjs7QURKQTtFQUNFLHNCQUFBO0FDT0Y7O0FETEE7RUFDRSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRFBBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNVRjs7QURSQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7QUNXRjs7QURUQTtFQUNFLHlCQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ2FGOztBRFhBO0VBQ0Usa0JBQUE7QUNjRjs7QURaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ2VGOztBRGJBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNpQkY7O0FEZkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2tCRjs7QURmQTtFQUNFLHVCQUFBO0FDa0JGOztBRGhCQTtFQUNFLG1CQUFBO0FDbUJGOztBRGpCQTtFQUNFLG1CQUFBO0FDb0JGOztBRGxCQTtFQUNFLG1CQUFBO0FDcUJGOztBRG5CQTtFQUNFLG1CQUFBO0FDc0JGOztBRHBCQTtFQUNFLG1CQUFBO0FDdUJGIiwiZmlsZSI6InByb2plY3RzL2FuZ3VsYXItdGVtcGxhdGVzLWJvb3RzdHJhcDQvc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIC5jb250YWluZXJ7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZXJvIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1Miw1OCw2NCwwLjcpO1xufVxuXG4uY2FyZCB7XG4gIG1pbi13aWR0aDogMzg1cHg7XG59XG5cbjo6bmctZGVlcCAuaGVscC1ibG9jayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuOjpuZy1kZWVwIC5zY2hlbWEtZm9ybS1zdWJtaXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxufVxuXG46Om5nLWRlZXAgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIGlucHV0LmJ0biB7XG4gIGZsb2F0OiByaWdodFxufVxuXG5hLCBhOmhvdmVye1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDo1NzZweCl7XG4gIHNlY3Rpb257XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gIH1cbiAgLmhlcm8gLmNhcmQgLmNhcmQtYmxvY2t7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcbiAgc2VjdGlvbntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uYmctYWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG57XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzUwbXMgZWFzZSBhbGw7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UgYWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAuNnJlbSAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG46aG92ZXIsIC5idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5idG4tcHJpbWFyeXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3Vze1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uZm9ybS1jb250cm9se1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uYm9yZGVyLW5vbmV7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4udGV4dC1wcmltYXJ5e1xuICBjb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBvdXRsaW5lLWNvbG9yOiAjZmY1NzIyO1xufVxuLmNvbnRlbnQtZGl2aWRlci5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1kaXZpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbnRlbnQtZGl2aWRlciA+IHNwYW4sIC5jb250ZW50LWRpdmlkZXIgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb250ZW50LWRpdmlkZXIgPiBzcGFuOmJlZm9yZSwgLmNvbnRlbnQtZGl2aWRlciA+IGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLnNvY2lhbC1sb2dpbiAuYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBhY2VkO1xufVxuLnNvY2lhbC1sb2dpbiAuYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0bi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xufVxuLnNvY2lhbC1sb2dpbiAuYnRuLWxpbmtlZGluIHtcbiAgYmFja2dyb3VuZDogIzAwN2JiNjtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0bi1naXRodWIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuIiwiLmhlcm8gLmNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlcm8gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA1OCwgNjQsIDAuNyk7XG59XG5cbi5jYXJkIHtcbiAgbWluLXdpZHRoOiAzODVweDtcbn1cblxuOjpuZy1kZWVwIC5oZWxwLWJsb2NrIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG46Om5nLWRlZXAgLnNjaGVtYS1mb3JtLXN1Ym1pdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAuc2NoZW1hLWZvcm0tc3VibWl0IHAge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG46Om5nLWRlZXAgLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbjo6bmctZGVlcCBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgaW5wdXQuYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hLCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gIH1cblxuICAuaGVybyAuY2FyZCAuY2FyZC1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uYmctYWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJ0biB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzUwbXMgZWFzZSBhbGw7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UgYWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG46aG92ZXIsIC5idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYm9yZGVyLW5vbmUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG4gIG91dGxpbmUtY29sb3I6ICNmZjU3MjI7XG59XG5cbi5jb250ZW50LWRpdmlkZXIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1kaXZpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGVudC1kaXZpZGVyID4gc3BhbiwgLmNvbnRlbnQtZGl2aWRlciA+IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGVudC1kaXZpZGVyID4gc3BhbjpiZWZvcmUsIC5jb250ZW50LWRpdmlkZXIgPiBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICMwMGFjZWQ7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI2O1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tZ2l0aHViIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./projects/angular-templates-bootstrap4/src/lib/login/login.component.ts":
  /*!********************************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/lib/login/login.component.ts ***!
    \********************************************************************************/

  /*! exports provided: Bootstrap4LoginComponent */

  /***/
  function projectsAngularTemplatesBootstrap4SrcLibLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4LoginComponent", function () {
      return Bootstrap4LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Bootstrap4LoginComponent = function Bootstrap4LoginComponent() {
      _classCallCheck(this, Bootstrap4LoginComponent);

      this.profileImage = '//ssl.gstatic.com/accounts/ui/avatar_2x.png';
      this.introText = 'Sign in to access your account';
      this.socialButtons = [];
    };

    Bootstrap4LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'authumn-bs4-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.scss */
      "./projects/angular-templates-bootstrap4/src/lib/login/login.component.scss"))["default"]]
    })], Bootstrap4LoginComponent);
    /***/
  },

  /***/
  "./projects/angular-templates-bootstrap4/src/lib/register/register.component.scss":
  /*!****************************************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/lib/register/register.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularTemplatesBootstrap4SrcLibRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hero .container {\n  z-index: 3;\n  position: relative;\n}\n\n.hero .card {\n  background: rgba(52, 58, 64, 0.7);\n}\n\n.card {\n  min-width: 385px;\n}\n\n::ng-deep .help-block {\n  color: white;\n  font-size: small;\n  margin-top: 1rem;\n}\n\n::ng-deep .schema-form-submit {\n  color: white;\n}\n\n::ng-deep .schema-form-submit p {\n  font-size: small;\n}\n\n::ng-deep .form-control {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: white;\n}\n\n::ng-deep .form-control:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  border-width: 2px;\n  color: white;\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\n}\n\n::ng-deep label.control-label {\n  color: white;\n}\n\n::ng-deep input.btn {\n  float: right;\n}\n\na, a:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n@media (min-width: 576px) {\n  section {\n    padding: 40px 0px;\n  }\n\n  .hero .card .card-block {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n}\n\n@media (max-width: 576px) {\n  section {\n    padding: 20px;\n  }\n}\n\n.bg-alt {\n  background-color: #fff;\n}\n\n.btn {\n  transition: 350ms ease all;\n  text-transform: uppercase;\n  font-weight: 500;\n  padding: 0.6rem 1.5rem;\n  cursor: pointer;\n}\n\n.btn:hover, .btn:focus {\n  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.15);\n}\n\n.btn-primary {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n\n.btn-primary:hover, .btn-primary:focus {\n  color: #fff !important;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.form-control {\n  height: 45px;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #FFFFFF;\n}\n\n.form-control:focus {\n  border-color: #FFFFFF;\n  background-color: transparent;\n  color: #FFFFFF;\n}\n\n.border-none {\n  border: none !important;\n  border-color: transparent !important;\n}\n\n.text-primary {\n  color: #ff5722 !important;\n}\n\n.custom-control-input:checked ~ .custom-control-indicator {\n  color: #fff;\n  background-color: #ff5722;\n  outline-color: #ff5722;\n}\n\n.content-divider.center {\n  text-align: center;\n}\n\n.content-divider {\n  position: relative;\n  z-index: 1;\n}\n\n.content-divider > span, .content-divider > a {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.content-divider > span:before, .content-divider > a:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 1px;\n  background-color: #ddd;\n  width: 100%;\n  z-index: -1;\n}\n\n.social-login .btn {\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  padding: 0.5rem 0;\n  font-size: 18px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.social-login .btn:hover {\n  border: 2px solid white;\n}\n\n.social-login .btn-twitter {\n  background: #00aced;\n}\n\n.social-login .btn-facebook {\n  background: #3b5998;\n}\n\n.social-login .btn-google {\n  background: #dd4b39;\n}\n\n.social-login .btn-linkedin {\n  background: #007bb6;\n}\n\n.social-login .btn-github {\n  background: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvZGF0YS9naXQvYXV0aHVtbi9hdXRodW1uLWFuZ3VsYXIvcHJvamVjdHMvYW5ndWxhci10ZW1wbGF0ZXMtYm9vdHN0cmFwNC9zcmMvbGliL3NoYXJlZC9zaGFyZWQuc2NzcyIsInByb2plY3RzL2FuZ3VsYXItdGVtcGxhdGVzLWJvb3RzdHJhcDQvc3JjL2xpYi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUNBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBRERFO0VBQ0UsZ0JBQUE7QUNHSjs7QURDQTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUU7RUFDRSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0RBQUE7QUNFSjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxpQkFBQTtFQ0VGOztFREFBO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLGFBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0Usc0JBQUE7QUNHRjs7QUREQTtFQUVFLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsNENBQUE7QUNLRjs7QURIQTtFQUNFLG9DQUFBO0VBQ0EsZ0NBQUE7QUNNRjs7QURKQTtFQUNFLHNCQUFBO0FDT0Y7O0FETEE7RUFDRSxxQkFBQTtBQ1FGOztBRE5BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRFBBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNVRjs7QURSQTtFQUNFLHVCQUFBO0VBQ0Esb0NBQUE7QUNXRjs7QURUQTtFQUNFLHlCQUFBO0FDWUY7O0FEVkE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ2FGOztBRFhBO0VBQ0Usa0JBQUE7QUNjRjs7QURaQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtBQ2VGOztBRGJBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNpQkY7O0FEZkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2tCRjs7QURmQTtFQUNFLHVCQUFBO0FDa0JGOztBRGhCQTtFQUNFLG1CQUFBO0FDbUJGOztBRGpCQTtFQUNFLG1CQUFBO0FDb0JGOztBRGxCQTtFQUNFLG1CQUFBO0FDcUJGOztBRG5CQTtFQUNFLG1CQUFBO0FDc0JGOztBRHBCQTtFQUNFLG1CQUFBO0FDdUJGIiwiZmlsZSI6InByb2plY3RzL2FuZ3VsYXItdGVtcGxhdGVzLWJvb3RzdHJhcDQvc3JjL2xpYi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIC5jb250YWluZXJ7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZXJvIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1Miw1OCw2NCwwLjcpO1xufVxuXG4uY2FyZCB7XG4gIG1pbi13aWR0aDogMzg1cHg7XG59XG5cbjo6bmctZGVlcCAuaGVscC1ibG9jayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuOjpuZy1kZWVwIC5zY2hlbWEtZm9ybS1zdWJtaXQge1xuICBjb2xvcjogd2hpdGU7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJvcmRlci13aWR0aDogMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgfVxufVxuXG46Om5nLWRlZXAgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIGlucHV0LmJ0biB7XG4gIGZsb2F0OiByaWdodFxufVxuXG5hLCBhOmhvdmVye1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDo1NzZweCl7XG4gIHNlY3Rpb257XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gIH1cbiAgLmhlcm8gLmNhcmQgLmNhcmQtYmxvY2t7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjU3NnB4KXtcbiAgc2VjdGlvbntcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uYmctYWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5idG57XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzUwbXMgZWFzZSBhbGw7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UgYWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAuNnJlbSAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idG46aG92ZXIsIC5idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5idG4tcHJpbWFyeXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cbi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3Vze1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG4uZm9ybS1jb250cm9se1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG4uYm9yZGVyLW5vbmV7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4udGV4dC1wcmltYXJ5e1xuICBjb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWR+LmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBvdXRsaW5lLWNvbG9yOiAjZmY1NzIyO1xufVxuLmNvbnRlbnQtZGl2aWRlci5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1kaXZpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmNvbnRlbnQtZGl2aWRlciA+IHNwYW4sIC5jb250ZW50LWRpdmlkZXIgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jb250ZW50LWRpdmlkZXIgPiBzcGFuOmJlZm9yZSwgLmNvbnRlbnQtZGl2aWRlciA+IGE6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLnNvY2lhbC1sb2dpbiAuYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBhY2VkO1xufVxuLnNvY2lhbC1sb2dpbiAuYnRuLWZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0bi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xufVxuLnNvY2lhbC1sb2dpbiAuYnRuLWxpbmtlZGluIHtcbiAgYmFja2dyb3VuZDogIzAwN2JiNjtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0bi1naXRodWIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuIiwiLmhlcm8gLmNvbnRhaW5lciB7XG4gIHotaW5kZXg6IDM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmhlcm8gLmNhcmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDUyLCA1OCwgNjQsIDAuNyk7XG59XG5cbi5jYXJkIHtcbiAgbWluLXdpZHRoOiAzODVweDtcbn1cblxuOjpuZy1kZWVwIC5oZWxwLWJsb2NrIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG46Om5nLWRlZXAgLnNjaGVtYS1mb3JtLXN1Ym1pdCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAuc2NoZW1hLWZvcm0tc3VibWl0IHAge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG46Om5nLWRlZXAgLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjo6bmctZGVlcCAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5cbjo6bmctZGVlcCBsYWJlbC5jb250cm9sLWxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG46Om5nLWRlZXAgaW5wdXQuYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5hLCBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNDBweCAwcHg7XG4gIH1cblxuICAuaGVybyAuY2FyZCAuY2FyZC1ibG9jayB7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG59XG4uYmctYWx0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJ0biB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzUwbXMgZWFzZSBhbGw7XG4gIHRyYW5zaXRpb246IDM1MG1zIGVhc2UgYWxsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG46aG92ZXIsIC5idG46Zm9jdXMge1xuICBib3gtc2hhZG93OiA2cHggNnB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMiAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyLCAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogNDVweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uYm9yZGVyLW5vbmUge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1wcmltYXJ5IHtcbiAgY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb250cm9sLWlucHV0OmNoZWNrZWQgfiAuY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjI7XG4gIG91dGxpbmUtY29sb3I6ICNmZjU3MjI7XG59XG5cbi5jb250ZW50LWRpdmlkZXIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVudC1kaXZpZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4uY29udGVudC1kaXZpZGVyID4gc3BhbiwgLmNvbnRlbnQtZGl2aWRlciA+IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGVudC1kaXZpZGVyID4gc3BhbjpiZWZvcmUsIC5jb250ZW50LWRpdmlkZXIgPiBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0biB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tdHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICMwMGFjZWQ7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG5cbi5zb2NpYWwtbG9naW4gLmJ0bi1nb29nbGUge1xuICBiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tbGlua2VkaW4ge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmI2O1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tZ2l0aHViIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./projects/angular-templates-bootstrap4/src/lib/register/register.component.ts":
  /*!**************************************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/lib/register/register.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: Bootstrap4RegisterComponent */

  /***/
  function projectsAngularTemplatesBootstrap4SrcLibRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4RegisterComponent", function () {
      return Bootstrap4RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Bootstrap4RegisterComponent = function Bootstrap4RegisterComponent() {
      _classCallCheck(this, Bootstrap4RegisterComponent);

      this.introText = 'Sign up to get started with Authumn';
      this.socialButtons = [];
    };

    Bootstrap4RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'authumn-bs4-register',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/register/register.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./register.component.scss */
      "./projects/angular-templates-bootstrap4/src/lib/register/register.component.scss"))["default"]]
    })], Bootstrap4RegisterComponent);
    /***/
  },

  /***/
  "./projects/angular-templates-bootstrap4/src/lib/social/social.component.scss":
  /*!************************************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/lib/social/social.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularTemplatesBootstrap4SrcLibSocialSocialComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hero .container {\n  z-index: 3;\n  position: relative;\n}\n\n.hero .card {\n  background: rgba(52, 58, 64, 0.7);\n}\n\n.card {\n  min-width: 385px;\n}\n\n::ng-deep .help-block {\n  color: white;\n  font-size: small;\n  margin-top: 1rem;\n}\n\n::ng-deep .schema-form-submit {\n  color: white;\n}\n\n::ng-deep .schema-form-submit p {\n  font-size: small;\n}\n\n::ng-deep .form-control {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: white;\n}\n\n::ng-deep .form-control:focus {\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  border-width: 2px;\n  color: white;\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.25);\n}\n\n::ng-deep label.control-label {\n  color: white;\n}\n\n::ng-deep input.btn {\n  float: right;\n}\n\na, a:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n@media (min-width: 576px) {\n  section {\n    padding: 40px 0px;\n  }\n\n  .hero .card .card-block {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n}\n\n@media (max-width: 576px) {\n  section {\n    padding: 20px;\n  }\n}\n\n.bg-alt {\n  background-color: #fff;\n}\n\n.btn {\n  transition: 350ms ease all;\n  text-transform: uppercase;\n  font-weight: 500;\n  padding: 0.6rem 1.5rem;\n  cursor: pointer;\n}\n\n.btn:hover, .btn:focus {\n  box-shadow: 6px 6px 25px rgba(0, 0, 0, 0.15);\n}\n\n.btn-primary {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n\n.btn-primary:hover, .btn-primary:focus {\n  color: #fff !important;\n}\n\n.form-group {\n  margin-bottom: 1.5rem;\n}\n\n.form-control {\n  height: 45px;\n  font-size: 16px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-color: rgba(255, 255, 255, 0.5);\n  color: #FFFFFF;\n}\n\n.form-control:focus {\n  border-color: #FFFFFF;\n  background-color: transparent;\n  color: #FFFFFF;\n}\n\n.border-none {\n  border: none !important;\n  border-color: transparent !important;\n}\n\n.text-primary {\n  color: #ff5722 !important;\n}\n\n.custom-control-input:checked ~ .custom-control-indicator {\n  color: #fff;\n  background-color: #ff5722;\n  outline-color: #ff5722;\n}\n\n.content-divider.center {\n  text-align: center;\n}\n\n.content-divider {\n  position: relative;\n  z-index: 1;\n}\n\n.content-divider > span, .content-divider > a {\n  background-color: #000;\n  color: #fff;\n  display: inline-block;\n  padding: 2px 12px;\n  border-radius: 3px;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.content-divider > span:before, .content-divider > a:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  height: 1px;\n  background-color: #ddd;\n  width: 100%;\n  z-index: -1;\n}\n\n.social-login .btn {\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 2px solid transparent;\n  padding: 0.5rem 0;\n  font-size: 18px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n.social-login .btn:hover {\n  border: 2px solid white;\n}\n\n.social-login .btn-twitter {\n  background: #00aced;\n}\n\n.social-login .btn-facebook {\n  background: #3b5998;\n}\n\n.social-login .btn-google {\n  background: #dd4b39;\n}\n\n.social-login .btn-linkedin {\n  background: #007bb6;\n}\n\n.social-login .btn-github {\n  background: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvZGF0YS9naXQvYXV0aHVtbi9hdXRodW1uLWFuZ3VsYXIvcHJvamVjdHMvYW5ndWxhci10ZW1wbGF0ZXMtYm9vdHN0cmFwNC9zcmMvbGliL3NoYXJlZC9zaGFyZWQuc2NzcyIsInByb2plY3RzL2FuZ3VsYXItdGVtcGxhdGVzLWJvb3RzdHJhcDQvc3JjL2xpYi9zb2NpYWwvc29jaWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxpQ0FBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEREU7RUFDRSxnQkFBQTtBQ0dKOztBRENBO0VBQ0UsMENBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7QUNFRjs7QURBRTtFQUNFLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtBQ0VKOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLGlCQUFBO0VDRUY7O0VEQUE7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDR0Y7QUFDRjs7QUREQTtFQUNFO0lBQ0UsYUFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRSxzQkFBQTtBQ0dGOztBRERBO0VBRUUsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSw0Q0FBQTtBQ0tGOztBREhBO0VBQ0Usb0NBQUE7RUFDQSxnQ0FBQTtBQ01GOztBREpBO0VBQ0Usc0JBQUE7QUNPRjs7QURMQTtFQUNFLHFCQUFBO0FDUUY7O0FETkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ1VGOztBRFJBO0VBQ0UsdUJBQUE7RUFDQSxvQ0FBQTtBQ1dGOztBRFRBO0VBQ0UseUJBQUE7QUNZRjs7QURWQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDYUY7O0FEWEE7RUFDRSxrQkFBQTtBQ2NGOztBRFpBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDZUY7O0FEYkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2lCRjs7QURmQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDa0JGOztBRGZBO0VBQ0UsdUJBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsbUJBQUE7QUNtQkY7O0FEakJBO0VBQ0UsbUJBQUE7QUNvQkY7O0FEbEJBO0VBQ0UsbUJBQUE7QUNxQkY7O0FEbkJBO0VBQ0UsbUJBQUE7QUNzQkY7O0FEcEJBO0VBQ0UsbUJBQUE7QUN1QkYiLCJmaWxlIjoicHJvamVjdHMvYW5ndWxhci10ZW1wbGF0ZXMtYm9vdHN0cmFwNC9zcmMvbGliL3NvY2lhbC9zb2NpYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyAuY29udGFpbmVye1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVybyAuY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTIsNTgsNjQsMC43KTtcbn1cblxuLmNhcmQge1xuICBtaW4td2lkdGg6IDM4NXB4O1xufVxuXG46Om5nLWRlZXAgLmhlbHAtYmxvY2sge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbjo6bmctZGVlcCAuc2NoZW1hLWZvcm0tc3VibWl0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBwIHtcbiAgICBmb250LXNpemU6IHNtYWxsO1xuICB9XG59XG5cbjo6bmctZGVlcCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6Zm9jdXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIH1cbn1cblxuOjpuZy1kZWVwIGxhYmVsLmNvbnRyb2wtbGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbjo6bmctZGVlcCBpbnB1dC5idG4ge1xuICBmbG9hdDogcmlnaHRcbn1cblxuYSwgYTpob3ZlcntcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpe1xuICBzZWN0aW9ue1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICB9XG4gIC5oZXJvIC5jYXJkIC5jYXJkLWJsb2Nre1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDo1NzZweCl7XG4gIHNlY3Rpb257XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuLmJnLWFsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4uYnRue1xuICAtd2Via2l0LXRyYW5zaXRpb246IDM1MG1zIGVhc2UgYWxsO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlIGFsbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogLjZyZW0gMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnRuOmhvdmVyLCAuYnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uYnRuLXByaW1hcnl7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG59XG4uYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTpmb2N1c3tcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLmZvcm0tY29udHJvbHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuLmJvcmRlci1ub25le1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLnRleHQtcHJpbWFyeXtcbiAgY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbn1cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2Vkfi5jdXN0b20tY29udHJvbC1pbmRpY2F0b3Ige1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgb3V0bGluZS1jb2xvcjogI2ZmNTcyMjtcbn1cbi5jb250ZW50LWRpdmlkZXIuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtZGl2aWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5jb250ZW50LWRpdmlkZXIgPiBzcGFuLCAuY29udGVudC1kaXZpZGVyID4gYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY29udGVudC1kaXZpZGVyID4gc3BhbjpiZWZvcmUsIC5jb250ZW50LWRpdmlkZXIgPiBhOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG4uc29jaWFsLWxvZ2luIC5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG46aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0bi10d2l0dGVyIHtcbiAgYmFja2dyb3VuZDogIzAwYWNlZDtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0bi1mYWNlYm9vayB7XG4gIGJhY2tncm91bmQ6ICMzYjU5OTg7XG59XG4uc29jaWFsLWxvZ2luIC5idG4tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcbn1cbi5zb2NpYWwtbG9naW4gLmJ0bi1saW5rZWRpbiB7XG4gIGJhY2tncm91bmQ6ICMwMDdiYjY7XG59XG4uc29jaWFsLWxvZ2luIC5idG4tZ2l0aHViIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbiIsIi5oZXJvIC5jb250YWluZXIge1xuICB6LWluZGV4OiAzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZXJvIC5jYXJkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1MiwgNTgsIDY0LCAwLjcpO1xufVxuXG4uY2FyZCB7XG4gIG1pbi13aWR0aDogMzg1cHg7XG59XG5cbjo6bmctZGVlcCAuaGVscC1ibG9jayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuOjpuZy1kZWVwIC5zY2hlbWEtZm9ybS1zdWJtaXQge1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgLnNjaGVtYS1mb3JtLXN1Ym1pdCBwIHtcbiAgZm9udC1zaXplOiBzbWFsbDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRyb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBjb2xvcjogd2hpdGU7XG59XG46Om5nLWRlZXAgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG46Om5nLWRlZXAgbGFiZWwuY29udHJvbC1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuOjpuZy1kZWVwIGlucHV0LmJ0biB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuYSwgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDQwcHggMHB4O1xuICB9XG5cbiAgLmhlcm8gLmNhcmQgLmNhcmQtYmxvY2sge1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuLmJnLWFsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5idG4ge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDM1MG1zIGVhc2UgYWxsO1xuICB0cmFuc2l0aW9uOiAzNTBtcyBlYXNlIGFsbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMC42cmVtIDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuOmhvdmVyLCAuYnRuOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogNnB4IDZweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjU3MjIgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmZvY3VzIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLmJvcmRlci1ub25lIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnRleHQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmY1NzIyICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWluZGljYXRvciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBvdXRsaW5lLWNvbG9yOiAjZmY1NzIyO1xufVxuXG4uY29udGVudC1kaXZpZGVyLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtZGl2aWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNvbnRlbnQtZGl2aWRlciA+IHNwYW4sIC5jb250ZW50LWRpdmlkZXIgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvbnRlbnQtZGl2aWRlciA+IHNwYW46YmVmb3JlLCAuY29udGVudC1kaXZpZGVyID4gYTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG46aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLnNvY2lhbC1sb2dpbiAuYnRuLXR3aXR0ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDBhY2VkO1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tZmFjZWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xufVxuXG4uc29jaWFsLWxvZ2luIC5idG4tZ29vZ2xlIHtcbiAgYmFja2dyb3VuZDogI2RkNGIzOTtcbn1cblxuLnNvY2lhbC1sb2dpbiAuYnRuLWxpbmtlZGluIHtcbiAgYmFja2dyb3VuZDogIzAwN2JiNjtcbn1cblxuLnNvY2lhbC1sb2dpbiAuYnRuLWdpdGh1YiB7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59Il19 */";
    /***/
  },

  /***/
  "./projects/angular-templates-bootstrap4/src/lib/social/social.component.ts":
  /*!**********************************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/lib/social/social.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: Bootstrap4SocialComponent */

  /***/
  function projectsAngularTemplatesBootstrap4SrcLibSocialSocialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4SocialComponent", function () {
      return Bootstrap4SocialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Bootstrap4SocialComponent = function Bootstrap4SocialComponent() {
      _classCallCheck(this, Bootstrap4SocialComponent);
    };

    Bootstrap4SocialComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'authumn-bs4-social',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./social.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-templates-bootstrap4/src/lib/social/social.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./social.component.scss */
      "./projects/angular-templates-bootstrap4/src/lib/social/social.component.scss"))["default"]]
    })], Bootstrap4SocialComponent);
    /***/
  },

  /***/
  "./projects/angular-templates-bootstrap4/src/public_api.ts":
  /*!*****************************************************************!*\
    !*** ./projects/angular-templates-bootstrap4/src/public_api.ts ***!
    \*****************************************************************/

  /*! exports provided: Bootstrap4LoginComponent, Bootstrap4SocialComponent, Bootstrap4RegisterComponent, Bootstrap4TemplatesModule */

  /***/
  function projectsAngularTemplatesBootstrap4SrcPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/login/login.component */
    "./projects/angular-templates-bootstrap4/src/lib/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4LoginComponent", function () {
      return _lib_login_login_component__WEBPACK_IMPORTED_MODULE_0__["Bootstrap4LoginComponent"];
    });
    /* harmony import */


    var _lib_social_social_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/social/social.component */
    "./projects/angular-templates-bootstrap4/src/lib/social/social.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4SocialComponent", function () {
      return _lib_social_social_component__WEBPACK_IMPORTED_MODULE_1__["Bootstrap4SocialComponent"];
    });
    /* harmony import */


    var _lib_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/register/register.component */
    "./projects/angular-templates-bootstrap4/src/lib/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4RegisterComponent", function () {
      return _lib_register_register_component__WEBPACK_IMPORTED_MODULE_2__["Bootstrap4RegisterComponent"];
    });
    /* harmony import */


    var _lib_bootstrap4_templates_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/bootstrap4.templates.module */
    "./projects/angular-templates-bootstrap4/src/lib/bootstrap4.templates.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Bootstrap4TemplatesModule", function () {
      return _lib_bootstrap4_templates_module__WEBPACK_IMPORTED_MODULE_3__["Bootstrap4TemplatesModule"];
    });
    /*
     * Public API Surface of angular-templates-bootstrap3
     */


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./projects/angular-user/src/lib/api/ComponentFactory.component.ts":
  /*!*************************************************************************!*\
    !*** ./projects/angular-user/src/lib/api/ComponentFactory.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ComponentFactoryComponent */

  /***/
  function projectsAngularUserSrcLibApiComponentFactoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentFactoryComponent", function () {
      return ComponentFactoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./templates */
    "./projects/angular-user/src/lib/api/templates.ts");
    /* harmony import */


    var _authumn_view_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authumn-view.directive */
    "./projects/angular-user/src/lib/api/authumn-view.directive.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ComponentFactoryComponent =
    /*#__PURE__*/
    function () {
      function ComponentFactoryComponent(route, componentFactoryResolver, components) {
        _classCallCheck(this, ComponentFactoryComponent);

        this.route = route;
        this.componentFactoryResolver = componentFactoryResolver;
        this.components = components;
      }

      _createClass(ComponentFactoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.data.subscribe(function (data) {
            var component = _this2.components[data.template];

            if (!component) {
              throw Error("\nNo 'UserTemplate' provider found for component ".concat(data.template, ", please use one of the available template modules.\n\nBe sure to import the templates after the UserModule.\n"));
            }

            _this2.loadComponent(component);
          });
        }
      }, {
        key: "loadComponent",
        value: function loadComponent(component) {
          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
          var viewContainerRef = this.viewHost.viewContainerRef;
          viewContainerRef.clear();
          viewContainerRef.createComponent(componentFactory); // const componentRef = viewContainerRef.createComponent(componentFactory)
          // componentRef.instance.data = someData
        }
      }]);

      return ComponentFactoryComponent;
    }();

    ComponentFactoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _templates__WEBPACK_IMPORTED_MODULE_2__["UserTemplates"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_authumn_view_directive__WEBPACK_IMPORTED_MODULE_3__["AuthumnViewDirective"], {
      "static": true
    })], ComponentFactoryComponent.prototype, "viewHost", void 0);

    ComponentFactoryComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: "\n    <ng-template authumnViewHost></ng-template>\n  "
    })], ComponentFactoryComponent);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/api/authumn-view.directive.ts":
  /*!*********************************************************************!*\
    !*** ./projects/angular-user/src/lib/api/authumn-view.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: AuthumnViewDirective */

  /***/
  function projectsAngularUserSrcLibApiAuthumnViewDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthumnViewDirective", function () {
      return AuthumnViewDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthumnViewDirective = function AuthumnViewDirective(viewContainerRef) {
      _classCallCheck(this, AuthumnViewDirective);

      this.viewContainerRef = viewContainerRef;
    };

    AuthumnViewDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }];
    };

    AuthumnViewDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
      selector: '[authumnViewHost]'
    })], AuthumnViewDirective);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/api/templates.ts":
  /*!********************************************************!*\
    !*** ./projects/angular-user/src/lib/api/templates.ts ***!
    \********************************************************/

  /*! exports provided: UserTemplates */

  /***/
  function projectsAngularUserSrcLibApiTemplatesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTemplates", function () {
      return UserTemplates;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserTemplates = function UserTemplates() {
      _classCallCheck(this, UserTemplates);
    };
    /***/

  },

  /***/
  "./projects/angular-user/src/lib/login/login.component.scss":
  /*!******************************************************************!*\
    !*** ./projects/angular-user/src/lib/login/login.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularUserSrcLibLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvZGF0YS9naXQvYXV0aHVtbi9hdXRodW1uLWFuZ3VsYXIvcHJvamVjdHMvYW5ndWxhci11c2VyL3NyYy9saWIvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9hbmd1bGFyLXVzZXIvc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLXVzZXIvc3JjL2xpYi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIjo6bmctZGVlcCBidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/login/login.component.ts":
  /*!****************************************************************!*\
    !*** ./projects/angular-user/src/lib/login/login.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function projectsAngularUserSrcLibLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.actions */
    "./projects/angular-user/src/lib/user.actions.ts");
    /* harmony import */


    var _schemas_layouts_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../schemas/layouts/login */
    "./projects/angular-user/src/lib/schemas/layouts/login.ts");
    /* harmony import */


    var _user_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.config */
    "./projects/angular-user/src/lib/user.config.ts");
    /* harmony import */


    var _api_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/templates */
    "./projects/angular-user/src/lib/api/templates.ts");
    /* harmony import */


    var _schemas_login_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schemas/login.schema */
    "./projects/angular-user/src/lib/schemas/login.schema.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /**
     * The login component
     */


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(userTemplates, config, store) {
        _classCallCheck(this, LoginComponent);

        this.userTemplates = userTemplates;
        this.config = config;
        this.store = store;
        this.model = {};
        this.loading = true;
        this.formActive = true;
        this.formObject = {
          layout: _schemas_layouts_login__WEBPACK_IMPORTED_MODULE_3__["login"],
          schema: _schemas_login_schema__WEBPACK_IMPORTED_MODULE_6__["loginSchema"]
        };
        this.formOptions = {};
        this.valid = false;

        if (config.schemas && config.schemas.login) {
          this.formObject.schema = config.schemas.login;
        }

        if (config.layout && config.layout.login) {
          this.formObject.layout = config.layout.login;
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(new _user_actions__WEBPACK_IMPORTED_MODULE_2__["UserLogoutAction"]());
        }
      }, {
        key: "login",
        value: function login() {
          this.loading = true;
          this.store.dispatch(new _user_actions__WEBPACK_IMPORTED_MODULE_2__["UserLoginAction"]({
            username: this.model.username,
            password: this.model.password
          }));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(_event) {
          if (this.valid) {
            this.login();
          }
        }
      }, {
        key: "validationErrors",
        value: function validationErrors(_event) {}
      }, {
        key: "onChanges",
        value: function onChanges(_event) {}
      }, {
        key: "isValid",
        value: function isValid(event) {
          this.valid = event;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _api_templates__WEBPACK_IMPORTED_MODULE_5__["UserTemplates"]
      }, {
        type: _user_config__WEBPACK_IMPORTED_MODULE_4__["UserConfig"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'authumn-login',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/login/login.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./login.component.scss */
      "./projects/angular-user/src/lib/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/lost-password/lost-password.component.scss":
  /*!**********************************************************************************!*\
    !*** ./projects/angular-user/src/lib/lost-password/lost-password.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularUserSrcLibLostPasswordLostPasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLXVzZXIvc3JjL2xpYi9sb3N0LXBhc3N3b3JkL2xvc3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/lost-password/lost-password.component.ts":
  /*!********************************************************************************!*\
    !*** ./projects/angular-user/src/lib/lost-password/lost-password.component.ts ***!
    \********************************************************************************/

  /*! exports provided: LostPasswordComponent */

  /***/
  function projectsAngularUserSrcLibLostPasswordLostPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LostPasswordComponent", function () {
      return LostPasswordComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _api_templates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/templates */
    "./projects/angular-user/src/lib/api/templates.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _user_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../user.config */
    "./projects/angular-user/src/lib/user.config.ts");
    /* harmony import */


    var _schemas_register_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../schemas/register.schema */
    "./projects/angular-user/src/lib/schemas/register.schema.ts");
    /* harmony import */


    var _user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../user.actions */
    "./projects/angular-user/src/lib/user.actions.ts");
    /* harmony import */


    var _schemas_layouts_lostPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../schemas/layouts/lostPassword */
    "./projects/angular-user/src/lib/schemas/layouts/lostPassword.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LostPasswordComponent =
    /*#__PURE__*/
    function () {
      function LostPasswordComponent(route, userTemplates, config, router, store) {
        _classCallCheck(this, LostPasswordComponent);

        this.route = route;
        this.userTemplates = userTemplates;
        this.config = config;
        this.router = router;
        this.store = store;
        this.model = {};
        this.loading = true;
        this.formActive = true;
        this.formObject = {
          layout: _schemas_layouts_lostPassword__WEBPACK_IMPORTED_MODULE_7__["lostPassword"],
          schema: _schemas_register_schema__WEBPACK_IMPORTED_MODULE_5__["registerSchema"]
        };
        this.formOptions = {};

        if (config.schemas && config.schemas.register) {
          this.formObject.schema = config.schemas.register;
        }

        if (config.layout && config.layout.login) {
          this.formObject.layout = config.layout.lostPassword;
        }
      }

      _createClass(LostPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          this.loading = true;
          this.store.dispatch(new _user_actions__WEBPACK_IMPORTED_MODULE_6__["LostPasswordAction"]({
            email: this.model.email
          }));
        }
      }, {
        key: "validationErrors",
        value: function validationErrors(_event) {}
      }, {
        key: "onChanges",
        value: function onChanges(_event) {}
      }, {
        key: "isValid",
        value: function isValid(_event) {
          return true;
        }
      }]);

      return LostPasswordComponent;
    }();

    LostPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _api_templates__WEBPACK_IMPORTED_MODULE_2__["UserTemplates"]
      }, {
        type: _user_config__WEBPACK_IMPORTED_MODULE_4__["UserConfig"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
      }];
    };

    LostPasswordComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'authumn-lost-password',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./lost-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/lost-password/lost-password.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./lost-password.component.scss */
      "./projects/angular-user/src/lib/lost-password/lost-password.component.scss"))["default"]]
    })], LostPasswordComponent);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/register/register.component.scss":
  /*!************************************************************************!*\
    !*** ./projects/angular-user/src/lib/register/register.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularUserSrcLibRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div.login-form {\n  width: 350px;\n  padding: 1em;\n  margin: 2em auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvZGF0YS9naXQvYXV0aHVtbi9hdXRodW1uLWFuZ3VsYXIvcHJvamVjdHMvYW5ndWxhci11c2VyL3NyYy9saWIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9hbmd1bGFyLXVzZXIvc3JjL2xpYi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLXVzZXIvc3JjL2xpYi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdi5sb2dpbi1mb3JtIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMmVtIGF1dG87XG59XG4iLCJkaXYubG9naW4tZm9ybSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDJlbSBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/register/register.component.ts":
  /*!**********************************************************************!*\
    !*** ./projects/angular-user/src/lib/register/register.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function projectsAngularUserSrcLibRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.actions */
    "./projects/angular-user/src/lib/user.actions.ts");
    /* harmony import */


    var _schemas_layouts_register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../schemas/layouts/register */
    "./projects/angular-user/src/lib/schemas/layouts/register.ts");
    /* harmony import */


    var _api_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../api/templates */
    "./projects/angular-user/src/lib/api/templates.ts");
    /* harmony import */


    var _user_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../user.config */
    "./projects/angular-user/src/lib/user.config.ts");
    /* harmony import */


    var _schemas_register_schema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../schemas/register.schema */
    "./projects/angular-user/src/lib/schemas/register.schema.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(config, userTemplates, store) {
        _classCallCheck(this, RegisterComponent);

        this.config = config;
        this.userTemplates = userTemplates;
        this.store = store;
        this.model = {};
        this.loading = true;
        this.formActive = true;
        this.formObject = {
          layout: _schemas_layouts_register__WEBPACK_IMPORTED_MODULE_3__["register"],
          schema: _schemas_register_schema__WEBPACK_IMPORTED_MODULE_6__["registerSchema"]
        };
        this.formOptions = {};
        this.valid = false;

        if (config.schemas && config.schemas.register) {
          this.formObject.schema = config.schemas.register;
        }

        if (config.layout && config.layout.register) {
          this.formObject.layout = config.layout.register;
        }
      }

      _createClass(RegisterComponent, [{
        key: "register",
        value: function register() {
          this.loading = true;
          this.store.dispatch(new _user_actions__WEBPACK_IMPORTED_MODULE_2__["UserRegisterAction"](this.model));
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          if (this.valid) {
            this.register();
          }
        }
      }, {
        key: "validationErrors",
        value: function validationErrors(_event) {}
      }, {
        key: "onChanges",
        value: function onChanges(_event) {}
      }, {
        key: "isValid",
        value: function isValid(event) {
          this.valid = event;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _user_config__WEBPACK_IMPORTED_MODULE_5__["UserConfig"]
      }, {
        type: _api_templates__WEBPACK_IMPORTED_MODULE_4__["UserTemplates"]
      }, {
        type: _ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
      }];
    };

    RegisterComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'authumn-register',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/register/register.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./register.component.scss */
      "./projects/angular-user/src/lib/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/schemas/layouts/login.ts":
  /*!****************************************************************!*\
    !*** ./projects/angular-user/src/lib/schemas/layouts/login.ts ***!
    \****************************************************************/

  /*! exports provided: login */

  /***/
  function projectsAngularUserSrcLibSchemasLayoutsLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "login", function () {
      return login;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var login = [{
      key: 'username',
      placeholder: 'Enter username or email address'
    }, {
      key: 'password',
      type: 'password',
      placeholder: 'Enter password'
    }, {
      type: 'submit',
      title: 'Login'
    }];
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/schemas/layouts/lostPassword.ts":
  /*!***********************************************************************!*\
    !*** ./projects/angular-user/src/lib/schemas/layouts/lostPassword.ts ***!
    \***********************************************************************/

  /*! exports provided: lostPassword */

  /***/
  function projectsAngularUserSrcLibSchemasLayoutsLostPasswordTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "lostPassword", function () {
      return lostPassword;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var lostPassword = [{
      key: 'email',
      placeholder: 'Enter email'
    }, {
      type: 'submit',
      title: 'Reset password'
    }];
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/schemas/layouts/register.ts":
  /*!*******************************************************************!*\
    !*** ./projects/angular-user/src/lib/schemas/layouts/register.ts ***!
    \*******************************************************************/

  /*! exports provided: register */

  /***/
  function projectsAngularUserSrcLibSchemasLayoutsRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "register", function () {
      return register;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var register = [{
      key: 'username',
      placeholder: 'Enter username'
    }, {
      key: 'email',
      placeholder: 'Enter email address'
    }, {
      key: 'password',
      type: 'password',
      placeholder: 'Enter password'
    }, {
      key: 'password_repeat',
      type: 'password',
      placeholder: 'Confirm password'
    }, {
      type: 'submit',
      title: 'Register'
    }];
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/schemas/login.schema.ts":
  /*!***************************************************************!*\
    !*** ./projects/angular-user/src/lib/schemas/login.schema.ts ***!
    \***************************************************************/

  /*! exports provided: loginSchema */

  /***/
  function projectsAngularUserSrcLibSchemasLoginSchemaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginSchema", function () {
      return loginSchema;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var loginSchema = {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          title: 'Username or email address',
          required: true
        },
        password: {
          type: 'string',
          title: 'Password',
          required: true
        }
      }
    };
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/schemas/register.schema.ts":
  /*!******************************************************************!*\
    !*** ./projects/angular-user/src/lib/schemas/register.schema.ts ***!
    \******************************************************************/

  /*! exports provided: registerSchema */

  /***/
  function projectsAngularUserSrcLibSchemasRegisterSchemaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registerSchema", function () {
      return registerSchema;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var registerSchema = {
      type: 'object',
      properties: {
        username: {
          type: 'string',
          title: 'Username',
          required: true
        },
        email: {
          type: 'string',
          title: 'Email',
          format: 'email',
          required: true
        },
        password: {
          type: 'string',
          title: 'Password',
          required: true
        },
        password_repeat: {
          type: 'string',
          title: 'Confirm password',
          required: true
        }
      }
    };
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/services/user.service.ts":
  /*!****************************************************************!*\
    !*** ./projects/angular-user/src/lib/services/user.service.ts ***!
    \****************************************************************/

  /*! exports provided: UserService */

  /***/
  function projectsAngularUserSrcLibServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _user_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.config */
    "./projects/angular-user/src/lib/user.config.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http, userConfig) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.userConfig = userConfig;
      }

      _createClass(UserService, [{
        key: "getAll",
        value: function getAll() {
          return this.http.get("".concat(this.userConfig.api.profileUrl));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("".concat(this.userConfig.api.profileUrl, "/").concat(id));
        }
      }, {
        key: "create",
        value: function create(user) {
          return this.http.post(this.userConfig.api.registerUrl, user);
        }
      }, {
        key: "update",
        value: function update(user) {
          return this.http.put("".concat(this.userConfig.api.profileUrl, "/").concat(user._id), user);
        }
      }, {
        key: "delete",
        value: function _delete(_id) {
          return this.http["delete"]("".concat(this.userConfig.api.profileUrl, "/").concat(_id));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _user_config__WEBPACK_IMPORTED_MODULE_2__["UserConfig"]
      }];
    };

    UserService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/user-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./projects/angular-user/src/lib/user-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: routes, routerModuleForChild, UserRoutingModule */

  /***/
  function projectsAngularUserSrcLibUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routerModuleForChild", function () {
      return routerModuleForChild;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.component */
    "./projects/angular-user/src/lib/user.component.ts");
    /* harmony import */


    var _api_ComponentFactory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api/ComponentFactory.component */
    "./projects/angular-user/src/lib/api/ComponentFactory.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'user',
      children: [{
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
      }, {
        path: 'login',
        component: _api_ComponentFactory_component__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryComponent"],
        data: {
          template: 'login'
        }
      }, {
        path: 'lost_password',
        component: _api_ComponentFactory_component__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryComponent"]
      }, {
        path: 'register',
        component: _api_ComponentFactory_component__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryComponent"],
        data: {
          template: 'register'
        }
      }]
    }];

    var routerModuleForChild = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes);

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [routerModuleForChild],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/user.actions.ts":
  /*!*******************************************************!*\
    !*** ./projects/angular-user/src/lib/user.actions.ts ***!
    \*******************************************************/

  /*! exports provided: UserActions, LostPasswordPayload, LoginCredentials, RegistrationPayload, RegistrationSuccessPayload, RegistrationError, UserRegisterAction, UserRegisterSuccessAction, UserRegisterFailureAction, UserLoginAction, UserSignUpAction, UserSignInAction, UserLogoutAction, LostPasswordAction */

  /***/
  function projectsAngularUserSrcLibUserActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserActions", function () {
      return UserActions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LostPasswordPayload", function () {
      return LostPasswordPayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginCredentials", function () {
      return LoginCredentials;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPayload", function () {
      return RegistrationPayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationSuccessPayload", function () {
      return RegistrationSuccessPayload;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationError", function () {
      return RegistrationError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterAction", function () {
      return UserRegisterAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterSuccessAction", function () {
      return UserRegisterSuccessAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterFailureAction", function () {
      return UserRegisterFailureAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLoginAction", function () {
      return UserLoginAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSignUpAction", function () {
      return UserSignUpAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSignInAction", function () {
      return UserSignInAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserLogoutAction", function () {
      return UserLogoutAction;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LostPasswordAction", function () {
      return LostPasswordAction;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserActions = function UserActions() {
      _classCallCheck(this, UserActions);
    };

    UserActions.LOGIN = '[User] LOGIN';
    UserActions.LOGOUT = '[User] LOGOUT';
    UserActions.SIGNIN = '[User] SIGNIN';
    UserActions.SIGNUP = '[User] SIGNUP';
    UserActions.REGISTER = '[User] REGISTER';
    UserActions.REGISTER_SUCCESS = '[User] REGISTER SUCCESS';
    UserActions.REGISTER_FAILURE = '[User] REGISTER FAILURE';
    UserActions.LOST_PASSWORD = '[User] LOST PASSWORD';
    UserActions = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], UserActions);

    var LostPasswordPayload = function LostPasswordPayload() {
      _classCallCheck(this, LostPasswordPayload);
    };

    var LoginCredentials = function LoginCredentials() {
      _classCallCheck(this, LoginCredentials);
    };

    var RegistrationPayload = function RegistrationPayload() {
      _classCallCheck(this, RegistrationPayload);
    };

    var RegistrationSuccessPayload = function RegistrationSuccessPayload() {
      _classCallCheck(this, RegistrationSuccessPayload);
    };

    var RegistrationError = function RegistrationError() {
      _classCallCheck(this, RegistrationError);
    };

    var UserRegisterAction = function UserRegisterAction(payload) {
      _classCallCheck(this, UserRegisterAction);

      this.payload = payload;
    };

    UserRegisterAction.type = UserActions.REGISTER;

    var UserRegisterSuccessAction = function UserRegisterSuccessAction(payload) {
      _classCallCheck(this, UserRegisterSuccessAction);

      this.payload = payload;
    };

    UserRegisterSuccessAction.type = UserActions.REGISTER_SUCCESS;

    var UserRegisterFailureAction = function UserRegisterFailureAction(payload) {
      _classCallCheck(this, UserRegisterFailureAction);

      this.payload = payload;
    };

    UserRegisterFailureAction.type = UserActions.REGISTER_FAILURE;

    var UserLoginAction = function UserLoginAction(payload) {
      _classCallCheck(this, UserLoginAction);

      this.payload = payload;
    };

    UserLoginAction.type = UserActions.LOGIN;

    var UserSignUpAction = function UserSignUpAction() {
      _classCallCheck(this, UserSignUpAction);
    };

    UserSignUpAction.type = UserActions.SIGNUP;

    var UserSignInAction = function UserSignInAction() {
      _classCallCheck(this, UserSignInAction);
    };

    UserSignInAction.type = UserActions.SIGNIN;

    var UserLogoutAction = function UserLogoutAction() {
      _classCallCheck(this, UserLogoutAction);
    };

    UserLogoutAction.type = UserActions.LOGOUT;

    var LostPasswordAction = function LostPasswordAction(payload) {
      _classCallCheck(this, LostPasswordAction);

      this.payload = payload;
    };

    LostPasswordAction.type = UserActions.LOST_PASSWORD;
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/user.component.scss":
  /*!***********************************************************!*\
    !*** ./projects/angular-user/src/lib/user.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function projectsAngularUserSrcLibUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9hbmd1bGFyLXVzZXIvc3JjL2xpYi91c2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/user.component.ts":
  /*!*********************************************************!*\
    !*** ./projects/angular-user/src/lib/user.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserComponent */

  /***/
  function projectsAngularUserSrcLibUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return UserComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserComponent =
    /*#__PURE__*/
    function () {
      function UserComponent() {
        _classCallCheck(this, UserComponent);
      }

      _createClass(UserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserComponent;
    }();

    UserComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'authumn-user',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./projects/angular-user/src/lib/user.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
      styles: [__importDefault(__webpack_require__(
      /*! ./user.component.scss */
      "./projects/angular-user/src/lib/user.component.scss"))["default"]]
    })], UserComponent);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/user.components.module.ts":
  /*!*****************************************************************!*\
    !*** ./projects/angular-user/src/lib/user.components.module.ts ***!
    \*****************************************************************/

  /*! exports provided: UserComponentsModule */

  /***/
  function projectsAngularUserSrcLibUserComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserComponentsModule", function () {
      return UserComponentsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./projects/angular-user/src/lib/register/register.component.ts");
    /* harmony import */


    var _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lost-password/lost-password.component */
    "./projects/angular-user/src/lib/lost-password/lost-password.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./projects/angular-user/src/lib/login/login.component.ts");
    /* harmony import */


    var _user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user.component */
    "./projects/angular-user/src/lib/user.component.ts");
    /* harmony import */


    var _ngsf_json_schema_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngsf/json-schema-form */
    "./node_modules/@ngsf/json-schema-form/fesm2015/ngsf-json-schema-form.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var components = [_user_component__WEBPACK_IMPORTED_MODULE_7__["UserComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _lost_password_lost_password_component__WEBPACK_IMPORTED_MODULE_5__["LostPasswordComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]];

    var UserComponentsModule = function UserComponentsModule() {
      _classCallCheck(this, UserComponentsModule);
    };

    UserComponentsModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _ngsf_json_schema_form__WEBPACK_IMPORTED_MODULE_8__["JsonSchemaFormModule"]],
      declarations: [].concat(components),
      exports: [].concat(components)
    })], UserComponentsModule);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/user.config.ts":
  /*!******************************************************!*\
    !*** ./projects/angular-user/src/lib/user.config.ts ***!
    \******************************************************/

  /*! exports provided: UserConfig */

  /***/
  function projectsAngularUserSrcLibUserConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserConfig", function () {
      return UserConfig;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserConfig = function UserConfig() {
      _classCallCheck(this, UserConfig);
    };
    /***/

  },

  /***/
  "./projects/angular-user/src/lib/user.module.ts":
  /*!******************************************************!*\
    !*** ./projects/angular-user/src/lib/user.module.ts ***!
    \******************************************************/

  /*! exports provided: routerUserFeatureModule, UserModule */

  /***/
  function projectsAngularUserSrcLibUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routerUserFeatureModule", function () {
      return routerUserFeatureModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @authumn/angular-auth */
    "./projects/angular-auth/src/public_api.ts");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-routing.module */
    "./projects/angular-user/src/lib/user-routing.module.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/user.service */
    "./projects/angular-user/src/lib/services/user.service.ts");
    /* harmony import */


    var _user_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user.config */
    "./projects/angular-user/src/lib/user.config.ts");
    /* harmony import */


    var _api_ComponentFactory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./api/ComponentFactory.component */
    "./projects/angular-user/src/lib/api/ComponentFactory.component.ts");
    /* harmony import */


    var _user_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user.components.module */
    "./projects/angular-user/src/lib/user.components.module.ts");
    /* harmony import */


    var _api_authumn_view_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./api/authumn-view.directive */
    "./projects/angular-user/src/lib/api/authumn-view.directive.ts");
    /* harmony import */


    var _user_state__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./user.state */
    "./projects/angular-user/src/lib/user.state.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserModule_1;
    var components = [_api_authumn_view_directive__WEBPACK_IMPORTED_MODULE_11__["AuthumnViewDirective"], _api_ComponentFactory_component__WEBPACK_IMPORTED_MODULE_9__["ComponentFactoryComponent"]];

    var routerUserFeatureModule = _ngxs_store__WEBPACK_IMPORTED_MODULE_4__["NgxsModule"].forFeature([_user_state__WEBPACK_IMPORTED_MODULE_12__["UserState"]]);

    var UserModule = UserModule_1 =
    /*#__PURE__*/
    function () {
      function UserModule(parentModule) {
        _classCallCheck(this, UserModule);

        if (parentModule) {
          throw new Error('UserModule is already loaded. Import it in the AppModule only');
        }
      }

      _createClass(UserModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: UserModule_1,
            providers: [{
              provide: _user_config__WEBPACK_IMPORTED_MODULE_8__["UserConfig"],
              useValue: config
            }]
          };
        }
      }]);

      return UserModule;
    }();

    UserModule.ctorParameters = function () {
      return [{
        type: UserModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }];
    };

    UserModule = UserModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_5__["AuthModule"], _user_components_module__WEBPACK_IMPORTED_MODULE_10__["UserComponentsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"], routerUserFeatureModule],
      declarations: [].concat(components),
      exports: [].concat(components),
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], // Not sure why the below are not picked up from AuthModule...
      _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"], _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])())], UserModule);
    /***/
  },

  /***/
  "./projects/angular-user/src/lib/user.state.ts":
  /*!*****************************************************!*\
    !*** ./projects/angular-user/src/lib/user.state.ts ***!
    \*****************************************************/

  /*! exports provided: UserState */

  /***/
  function projectsAngularUserSrcLibUserStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserState", function () {
      return UserState;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @authumn/angular-auth */
    "./projects/angular-auth/src/public_api.ts");
    /* harmony import */


    var _user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.actions */
    "./projects/angular-user/src/lib/user.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/user.service */
    "./projects/angular-user/src/lib/services/user.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserState =
    /*#__PURE__*/
    function () {
      function UserState(userService, authService, ref) {
        _classCallCheck(this, UserState);

        this.userService = userService;
        this.authService = authService;
        this.ref = ref;
      }

      _createClass(UserState, [{
        key: "login",
        value: function login(_ref7, _ref8) {
          var dispatch = _ref7.dispatch;
          var _ref8$payload = _ref8.payload,
              username = _ref8$payload.username,
              password = _ref8$payload.password;
          return this.authService.login(username, password);
        }
      }, {
        key: "logout",
        value: function logout(_ref9) {
          var dispatch = _ref9.dispatch,
              patchState = _ref9.patchState;
          return this.authService.logout();
        }
        /* Not sure, was this correct?
        @Action(UserLoginAction)
        authenticationRedirect ({ dispatch }: StateContext<UserStateModel>) {
          dispatch(new Navigate(['user', 'login']))
        }
        */

      }, {
        key: "register",
        value: function register(_ref10, _ref11) {
          var dispatch = _ref10.dispatch;
          var registration = _ref11.payload;
          return this.userService.create(registration).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            dispatch(new _user_actions__WEBPACK_IMPORTED_MODULE_4__["UserRegisterSuccessAction"]({
              email: user.username
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(dispatch(new _user_actions__WEBPACK_IMPORTED_MODULE_4__["UserRegisterFailureAction"]({
              message: error.message
            })));
          }));
        }
      }, {
        key: "registerSuccess",
        value: function registerSuccess(_ref12) {
          var dispatch = _ref12.dispatch;
          dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["Navigate"](['user', 'login']));
        }
      }, {
        key: "signup",
        value: function signup(_ref13) {
          var dispatch = _ref13.dispatch;
          dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["Navigate"](['user', 'register']));
        }
      }, {
        key: "signin",
        value: function signin(_ref14) {
          var dispatch = _ref14.dispatch;
          dispatch(new _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_2__["Navigate"](['user', 'login']));
        }
      }]);

      return UserState;
    }();

    UserState.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }];
    };

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserLoginAction"])], UserState.prototype, "login", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserLogoutAction"])], UserState.prototype, "logout", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserRegisterAction"])], UserState.prototype, "register", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserRegisterSuccessAction"])], UserState.prototype, "registerSuccess", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserSignUpAction"])], UserState.prototype, "signup", null);

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_user_actions__WEBPACK_IMPORTED_MODULE_4__["UserSignInAction"])], UserState.prototype, "signin", null);

    UserState = __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
      name: 'user',
      defaults: {}
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], UserState);
    /***/
  },

  /***/
  "./projects/angular-user/src/public_api.ts":
  /*!*************************************************!*\
    !*** ./projects/angular-user/src/public_api.ts ***!
    \*************************************************/

  /*! exports provided: UserTemplates, LoginComponent, RegisterComponent, UserActions, LostPasswordPayload, LoginCredentials, RegistrationPayload, RegistrationSuccessPayload, RegistrationError, UserRegisterAction, UserRegisterSuccessAction, UserRegisterFailureAction, UserLoginAction, UserSignUpAction, UserSignInAction, UserLogoutAction, LostPasswordAction, UserComponent, UserComponentsModule, UserConfig, routerUserFeatureModule, UserModule, UserState, routes, routerModuleForChild, UserRoutingModule */

  /***/
  function projectsAngularUserSrcPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_api_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/api/templates */
    "./projects/angular-user/src/lib/api/templates.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserTemplates", function () {
      return _lib_api_templates__WEBPACK_IMPORTED_MODULE_0__["UserTemplates"];
    });
    /* harmony import */


    var _lib_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/login/login.component */
    "./projects/angular-user/src/lib/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _lib_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"];
    });
    /* harmony import */


    var _lib_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./lib/register/register.component */
    "./projects/angular-user/src/lib/register/register.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return _lib_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"];
    });
    /* harmony import */


    var _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./lib/user.actions */
    "./projects/angular-user/src/lib/user.actions.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserActions", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserActions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LostPasswordPayload", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["LostPasswordPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginCredentials", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["LoginCredentials"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegistrationPayload", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["RegistrationPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegistrationSuccessPayload", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["RegistrationSuccessPayload"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RegistrationError", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["RegistrationError"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserRegisterAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterSuccessAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserRegisterSuccessAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRegisterFailureAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserRegisterFailureAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserLoginAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserLoginAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserSignUpAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserSignUpAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserSignInAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserSignInAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserLogoutAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["UserLogoutAction"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LostPasswordAction", function () {
      return _lib_user_actions__WEBPACK_IMPORTED_MODULE_3__["LostPasswordAction"];
    });
    /* harmony import */


    var _lib_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./lib/user.component */
    "./projects/angular-user/src/lib/user.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserComponent", function () {
      return _lib_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"];
    });
    /* harmony import */


    var _lib_user_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./lib/user.components.module */
    "./projects/angular-user/src/lib/user.components.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserComponentsModule", function () {
      return _lib_user_components_module__WEBPACK_IMPORTED_MODULE_5__["UserComponentsModule"];
    });
    /* harmony import */


    var _lib_user_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./lib/user.config */
    "./projects/angular-user/src/lib/user.config.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserConfig", function () {
      return _lib_user_config__WEBPACK_IMPORTED_MODULE_6__["UserConfig"];
    });
    /* harmony import */


    var _lib_user_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./lib/user.module */
    "./projects/angular-user/src/lib/user.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routerUserFeatureModule", function () {
      return _lib_user_module__WEBPACK_IMPORTED_MODULE_7__["routerUserFeatureModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return _lib_user_module__WEBPACK_IMPORTED_MODULE_7__["UserModule"];
    });
    /* harmony import */


    var _lib_user_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./lib/user.state */
    "./projects/angular-user/src/lib/user.state.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserState", function () {
      return _lib_user_state__WEBPACK_IMPORTED_MODULE_8__["UserState"];
    });
    /* harmony import */


    var _lib_user_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./lib/user-routing.module */
    "./projects/angular-user/src/lib/user-routing.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return _lib_user_routing_module__WEBPACK_IMPORTED_MODULE_9__["routes"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "routerModuleForChild", function () {
      return _lib_user_routing_module__WEBPACK_IMPORTED_MODULE_9__["routerModuleForChild"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return _lib_user_routing_module__WEBPACK_IMPORTED_MODULE_9__["UserRoutingModule"];
    });
    /*
     * Public API Surface of angular-user
     */


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./projects/angular/src/lib/authumn-angular.module.ts":
  /*!************************************************************!*\
    !*** ./projects/angular/src/lib/authumn-angular.module.ts ***!
    \************************************************************/

  /*! exports provided: AuthumnAngularModule */

  /***/
  function projectsAngularSrcLibAuthumnAngularModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthumnAngularModule", function () {
      return AuthumnAngularModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @authumn/angular-auth */
    "./projects/angular-auth/src/public_api.ts");
    /* harmony import */


    var _authumn_angular_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @authumn/angular-user */
    "./projects/angular-user/src/public_api.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __param = undefined && undefined.__param || function (paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthumnAngularModule_1;

    var AuthumnAngularModule = AuthumnAngularModule_1 =
    /*#__PURE__*/
    function () {
      function AuthumnAngularModule(parentModule) {
        _classCallCheck(this, AuthumnAngularModule);

        if (parentModule) {
          throw new Error('AuthumnAngularModule is already loaded. Import it in the AppModule only');
        }
      }

      _createClass(AuthumnAngularModule, null, [{
        key: "forRoot",
        value: function forRoot(config) {
          return {
            ngModule: AuthumnAngularModule_1,
            providers: [{
              provide: _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_1__["AuthConfig"],
              useValue: {
                api: {
                  loginUrl: config.api.loginUrl,
                  registerUrl: config.api.registerUrl
                },
                resourceServers: config.resourceServers,
                routes: config.routes
              }
            }, {
              provide: _authumn_angular_user__WEBPACK_IMPORTED_MODULE_2__["UserConfig"],
              useValue: {
                schemas: config.schemas,
                layout: config.layout,
                api: {
                  profileUrl: config.api.profileUrl,
                  registerUrl: config.api.registerUrl
                }
              }
            }]
          };
        }
      }]);

      return AuthumnAngularModule;
    }();

    AuthumnAngularModule.ctorParameters = function () {
      return [{
        type: AuthumnAngularModule,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }];
    };

    AuthumnAngularModule = AuthumnAngularModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_authumn_angular_auth__WEBPACK_IMPORTED_MODULE_1__["AuthModule"], _authumn_angular_user__WEBPACK_IMPORTED_MODULE_2__["UserModule"]]
    }), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])())], AuthumnAngularModule);
    /***/
  },

  /***/
  "./projects/angular/src/public_api.ts":
  /*!********************************************!*\
    !*** ./projects/angular/src/public_api.ts ***!
    \********************************************/

  /*! exports provided: AuthumnAngularModule */

  /***/
  function projectsAngularSrcPublic_apiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_authumn_angular_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/authumn-angular.module */
    "./projects/angular/src/lib/authumn-angular.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthumnAngularModule", function () {
      return _lib_authumn_angular_module__WEBPACK_IMPORTED_MODULE_0__["AuthumnAngularModule"];
    });
    /*
     * Public API Surface of authumn-angular
     */


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/bootstrap4/$$_lazy_route_resource lazy recursive":
  /*!*********************************************************************!*\
    !*** ./src/bootstrap4/$$_lazy_route_resource lazy namespace object ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function srcBootstrap4$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/bootstrap4/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/bootstrap4/app/app.component.scss":
  /*!***********************************************!*\
    !*** ./src/bootstrap4/app/app.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcBootstrap4AppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".hero {\n  background-image: url('tiger.jpg');\n  background-size: cover;\n  background-position: center center;\n  min-height: 100%;\n  min-width: 100%;\n  width: auto;\n  height: auto;\n  margin: 0;\n  position: fixed;\n}\n\n.hero:after {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  display: block;\n  left: 0;\n  top: 0;\n  content: \"\";\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n.hero .container {\n  z-index: 3;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zcnYvZGF0YS9naXQvYXV0aHVtbi9hdXRodW1uLWFuZ3VsYXIvc3JjL2Jvb3RzdHJhcDQvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9ib290c3RyYXA0L2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2Jvb3RzdHJhcDQvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZXJvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvdGlnZXIuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5oZXJvOmFmdGVye1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmhlcm8gLmNvbnRhaW5lcntcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIiwiLmhlcm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi9hc3NldHMvdGlnZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uaGVybzphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uaGVybyAuY29udGFpbmVyIHtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/bootstrap4/app/app.component.ts":
  /*!*********************************************!*\
    !*** ./src/bootstrap4/app/app.component.ts ***!
    \*********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcBootstrap4AppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Authumn Bootstrap4';
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/bootstrap4/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.scss */
      "./src/bootstrap4/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/bootstrap4/app/app.module.ts":
  /*!******************************************!*\
    !*** ./src/bootstrap4/app/app.module.ts ***!
    \******************************************/

  /*! exports provided: AppModule */

  /***/
  function srcBootstrap4AppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/bootstrap4/app/app.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/bootstrap4/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngxs/devtools-plugin */
    "./node_modules/@ngxs/devtools-plugin/fesm2015/ngxs-devtools-plugin.js");
    /* harmony import */


    var _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngxs/router-plugin */
    "./node_modules/@ngxs/router-plugin/fesm2015/ngxs-router-plugin.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ngsf_bootstrap4_framework__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngsf/bootstrap4-framework */
    "./node_modules/@ngsf/bootstrap4-framework/fesm2015/ngsf-bootstrap4-framework.js");
    /* harmony import */


    var _ngsf_json_schema_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngsf/json-schema-form */
    "./node_modules/@ngsf/json-schema-form/fesm2015/ngsf-json-schema-form.js");
    /* harmony import */


    var _authumn_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @authumn/angular */
    "./projects/angular/src/public_api.ts");
    /* harmony import */


    var _authumn_angular_templates_bootstrap4__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @authumn/angular-templates-bootstrap4 */
    "./projects/angular-templates-bootstrap4/src/public_api.ts");
    /* harmony import */


    var _authenticated_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./authenticated.component */
    "./src/bootstrap4/app/authenticated.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: 'authenticated',
      component: _authenticated_component__WEBPACK_IMPORTED_MODULE_14__["AuthenticatedComponent"]
    }];

    var authumnModule = _authumn_angular__WEBPACK_IMPORTED_MODULE_12__["AuthumnAngularModule"].forRoot({
      api: {
        loginUrl: 'https://api.chix.io/v1/auth/login',
        profileUrl: 'https://api.chix.io/v1/user',
        registerUrl: 'https://api.chix.io/v1/user/register'
      },
      routes: {
        "return": ['/authenticated'],
        login: ['user', 'login']
      },
      resourceServers: ['https://api.chix.io/v1']
    }); // @dynamic


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _authenticated_component__WEBPACK_IMPORTED_MODULE_14__["AuthenticatedComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["NgxsModule"].forRoot([]), _ngxs_router_plugin__WEBPACK_IMPORTED_MODULE_8__["NgxsRouterPluginModule"].forRoot(), _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_7__["NgxsReduxDevtoolsPluginModule"].forRoot({
        disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production
      }), _authumn_angular_templates_bootstrap4__WEBPACK_IMPORTED_MODULE_13__["Bootstrap4TemplatesModule"], _ngsf_bootstrap4_framework__WEBPACK_IMPORTED_MODULE_10__["Bootstrap4FrameworkModule"], _ngsf_json_schema_form__WEBPACK_IMPORTED_MODULE_11__["JsonSchemaFormModule"].forRoot(_ngsf_bootstrap4_framework__WEBPACK_IMPORTED_MODULE_10__["Bootstrap4FrameworkModule"]), authumnModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/bootstrap4/app/authenticated.component.ts":
  /*!*******************************************************!*\
    !*** ./src/bootstrap4/app/authenticated.component.ts ***!
    \*******************************************************/

  /*! exports provided: AuthenticatedComponent */

  /***/
  function srcBootstrap4AppAuthenticatedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function () {
      return AuthenticatedComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @authumn/angular-auth */
    "./projects/angular-auth/src/public_api.ts");
    /* harmony import */


    var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngxs/store */
    "./node_modules/@ngxs/store/fesm2015/ngxs-store.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthenticatedComponent =
    /*#__PURE__*/
    function () {
      function AuthenticatedComponent(authService, authConfig) {
        _classCallCheck(this, AuthenticatedComponent);

        this.authService = authService;
        this.authConfig = authConfig;
      }

      _createClass(AuthenticatedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Re-authenticate using the token
          this.authService.refresh();
        }
      }, {
        key: "getDecodedToken",
        value: function getDecodedToken() {
          return JSON.stringify(this.authService.getDecodedToken(), null, 2);
        }
      }]);

      return AuthenticatedComponent;
    }();

    AuthenticatedComponent.ctorParameters = function () {
      return [{
        type: _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _authumn_angular_auth__WEBPACK_IMPORTED_MODULE_1__["AuthConfig"]
      }];
    };

    __decorate([Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_authumn_angular_auth__WEBPACK_IMPORTED_MODULE_1__["AuthState"].getUser)], AuthenticatedComponent.prototype, "user$", void 0);

    AuthenticatedComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-authenticated',
      template: "\n    <div\n      *ngIf=\"(user$ | async) as user\"\n      class=\"jumbotron text-light bg-dark\">\n      <h2>Hello {{user.login}},</h2>\n      <p>\n        You are now logged in!\n      </p>\n      <p>\n        authService.getUsername(): <code>{{authService.getUsername()}}</code>\n        user$.login: <code>{{user.login}}</code>\n      </p>\n      <p>\n        authService.getUserId(): <code>{{authService.getUserId()}}</code>\n        user$.id: <code>{{user.id}}</code>\n      </p>\n\n      <p>\n        Your access token: <code>{{authService.getToken()}}</code>\n      </p>\n\n      <p>\n        The contents of your token is:\n      </p>\n\n      <p>\n        <code>{{getDecodedToken()}}</code>\n      </p>\n\n      You should now have access to the following resourceServers:\n      <ul\n        *ngFor=\"let resourceServer of authConfig.resourceServers\"\n      >\n        <li><code>{{resourceServer}}</code></li>\n      </ul>\n    </div>\n  ",
      styles: ["\n  "]
    })], AuthenticatedComponent);
    /***/
  },

  /***/
  "./src/bootstrap4/environments/environment.ts":
  /*!****************************************************!*\
    !*** ./src/bootstrap4/environments/environment.ts ***!
    \****************************************************/

  /*! exports provided: environment */

  /***/
  function srcBootstrap4EnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/bootstrap4/main.ts":
  /*!********************************!*\
    !*** ./src/bootstrap4/main.ts ***!
    \********************************/

  /*! no exports provided */

  /***/
  function srcBootstrap4MainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/bootstrap4/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/bootstrap4/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!**************************************!*\
    !*** multi ./src/bootstrap4/main.ts ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /srv/data/git/authumn/authumn-angular/src/bootstrap4/main.ts */
    "./src/bootstrap4/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map