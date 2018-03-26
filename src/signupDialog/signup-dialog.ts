import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ValidationService} from '../validation.service';

import signupDialogHtml from './signup-dialog.html';
import signupDialogCss from './signup-dialog.css';

@Component({
    selector: 'signup-dialog',
    template: signupDialogHtml,
    styles: [signupDialogCss]
})

export class SignupDialog {
    public signupForm: FormGroup;
    public errorMessage: string = null;

    constructor(
        public dialogRef: MatDialogRef<SignupDialog>,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
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

    onSignupFormSubmit(): void {
        if ( this.signupForm.valid ) {
            // The callback is not called in exterior because this change.
            // Also I don't know how call local function
            Accounts.createUser({email: this.signupForm.value.email, password: this.signupForm.value.password}, (error) => {
                console.log(this);
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
