import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ValidationService} from '../validation.service';

import loginDialogHtml from './login-dialog.html';
import loginDialogCss from './login-dialog.css';

@Component({
    selector: 'login-dialog',
    template: loginDialogHtml,
    styles: [loginDialogCss]
})
export class LoginDialog {
    public loginForm: FormGroup;
    public errorMessage: string = null;

    constructor(
        public dialogRef: MatDialogRef<LoginDialog>,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, ValidationService.emailValidator]],
            password: ['', Validators.required]
        });
    }

    sendErrorMessage(message): void {
        this.errorMessage = message;

        setTimeout(()=> {
            this.errorMessage = null;
        },5000);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onLoginFormSubmit(): void {
        if ( this.loginForm.valid ) {
            // The callback is not called in exterior because this change.
            // Also I don't know how call local function
            Meteor.loginWithPassword(this.loginForm.value.email, this.loginForm.value.password, (error) => {
                if (error) {
                    this.sendErrorMessage(error.reason || "Unknown error");
                } else {
                    this.dialogRef.close();
                }
            });
        } else {
            this.sendErrorMessage("Merci de remplir correctement les champs en demandé");
        }
    }
}
