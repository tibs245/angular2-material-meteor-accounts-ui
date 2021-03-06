import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ValidationService} from '../validation.service';

// import loginDialogHtml from './login-dialog.html';
// import loginDialogCss from './login-dialog.css';

@Component({
    selector: 'login-dialog',
    template: `<h1 mat-dialog-title>Login form :</h1>
    <form [formGroup]="loginForm"  (ngSubmit)="onLoginFormSubmit()">
        <div mat-dialog-content>

            <div class="error-message mat-elevation-z12 mat-background-warn" *ngIf="errorMessage">
                <mat-icon color="warning">warning</mat-icon> {{ errorMessage }}
            </div>

            <mat-form-field>
                <input matInput  placeholder="Your e-mail" type="text" formControlName="email">
            </mat-form-field>
            <mat-form-field>
                <input matInput  placeholder="Your password" type="password" formControlName="password">
            </mat-form-field>
        </div>
    <div mat-dialog-actions>
        <a mat-button (click)="onNoClick()" action="cancel">Exit</a>
        <button mat-raised-button color="primary" action="submit">Login</button>
    </div>
    </form>`,
    styles: [`
    .error-message {
      margin: 20px 0px;
      padding: 5px;
      border: solid 2px #ff5722;
      color: #ff5722;
    }`]
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
