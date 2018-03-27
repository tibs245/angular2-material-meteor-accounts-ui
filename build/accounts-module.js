"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("./validation.service");
var login_buttons_1 = require("./loginButton/login-buttons");
var login_dialog_1 = require("./loginDialog/login-dialog");
var signup_dialog_1 = require("./signupDialog/signup-dialog");
var annotations_1 = require("./annotations");
var material_1 = require("@angular/material");
var dialog_1 = require("@angular/material/dialog");
var animations_1 = require("@angular/platform-browser/animations");
var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatButtonModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatMenuModule,
                dialog_1.MatDialogModule,
                animations_1.BrowserAnimationsModule
            ],
            entryComponents: [login_buttons_1.LoginButtons, login_dialog_1.LoginDialog, signup_dialog_1.SignupDialog],
            declarations: [
                login_buttons_1.LoginButtons,
                login_dialog_1.LoginDialog,
                signup_dialog_1.SignupDialog
            ],
            providers: [
                annotations_1.AuthGuard,
                validation_service_1.ValidationService
            ],
            exports: [
                login_buttons_1.LoginButtons
            ]
        })
    ], AccountsModule);
    return AccountsModule;
}());
exports.AccountsModule = AccountsModule;
