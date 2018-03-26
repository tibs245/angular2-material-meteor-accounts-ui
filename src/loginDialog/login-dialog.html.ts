export const html: string= `<h1 mat-dialog-title>Login form :</h1>
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
</form>`;