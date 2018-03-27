import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class LoginDialog {
    dialogRef: MatDialogRef<LoginDialog>;
    private formBuilder;
    data: any;
    loginForm: FormGroup;
    errorMessage: string;
    constructor(dialogRef: MatDialogRef<LoginDialog>, formBuilder: FormBuilder, data: any);
    ngOnInit(): void;
    sendErrorMessage(message: any): void;
    onNoClick(): void;
    onLoginFormSubmit(): void;
}
