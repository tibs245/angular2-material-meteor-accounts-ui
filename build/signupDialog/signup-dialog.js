"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("../validation.service");
// import signupDialogHtml from './signup-dialog.html';
// import signupDialogCss from './signup-dialog.css';
var SignupDialog = /** @class */ (function () {
    function SignupDialog(dialogRef, formBuilder) {
        this.dialogRef = dialogRef;
        this.formBuilder = formBuilder;
        this.errorMessage = null;
    }
    SignupDialog.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            email: ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            password: ['', forms_1.Validators.required]
        });
    };
    SignupDialog.prototype.sendErrorMessage = function (message) {
        var _this = this;
        this.errorMessage = message;
        setTimeout(function () {
            _this.errorMessage = null;
        }, 5000);
    };
    SignupDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SignupDialog.prototype.onSignupFormSubmit = function () {
        var _this = this;
        if (this.signupForm.valid) {
            // The callback is not called in exterior because this change.
            // Also I don't know how call local function
            Accounts.createUser({ email: this.signupForm.value.email, password: this.signupForm.value.password }, function (error) {
                console.log(_this);
                if (error) {
                    _this.sendErrorMessage(error.reason || "Unknown error");
                }
                else {
                    _this.dialogRef.close();
                }
            });
        }
        else {
            this.sendErrorMessage("Merci de remplir correctement les champs en demandé");
        }
    };
    SignupDialog = __decorate([
        core_1.Component({
            selector: 'signup-dialog',
            template: "\n    <h1 mat-dialog-title>Signup form :</h1>\n    <form [formGroup]=\"signupForm\"  (ngSubmit)=\"onSignupFormSubmit()\">\n        <div mat-dialog-content>\n\n            <div class=\"error-message mat-elevation-z12 mat-background-warn\" *ngIf=\"errorMessage\">\n                <mat-icon color=\"warning\">warning</mat-icon> {{ errorMessage }}\n            </div>\n\n            <mat-form-field>\n                <input matInput  placeholder=\"Your e-mail\" type=\"text\" formControlName=\"email\">\n            </mat-form-field>\n            <mat-form-field>\n                <input matInput  placeholder=\"Your password\" type=\"password\" formControlName=\"password\">\n            </mat-form-field>\n        </div>\n    <div mat-dialog-actions>\n        <a mat-button (click)=\"onNoClick()\" action=\"cancel\">Exit</a>\n        <button mat-raised-button color=\"primary\" action=\"submit\">Sign up</button>\n    </div>\n    </form>",
            styles: ["\n    .error-message {\n      margin: 20px 0px;\n      padding: 5px;\n      border: solid 2px #ff5722;\n      color: #ff5722;\n    }"]
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef,
            forms_1.FormBuilder])
    ], SignupDialog);
    return SignupDialog;
}());
exports.SignupDialog = SignupDialog;
