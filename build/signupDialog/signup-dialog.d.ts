import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
export declare class SignupDialog {
    dialogRef: MatDialogRef<SignupDialog>;
    private formBuilder;
    signupForm: FormGroup;
    errorMessage: string;
    constructor(dialogRef: MatDialogRef<SignupDialog>, formBuilder: FormBuilder);
    ngOnInit(): void;
    sendErrorMessage(message: any): void;
    onNoClick(): void;
    onSignupFormSubmit(): void;
}
