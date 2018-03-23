import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ValidationService} from './validation.service';
import {LoginButtons} from './loginButton/login-buttons';
import {LoginDialog} from './loginDialog/login-dialog';
import {SignupDialog} from "./signupDialog/signup-dialog";
import {AuthGuard} from "./annotations";
import {
MatButtonModule,
MatIconModule,
MatInputModule,
MatMenuModule
} from '@angular/material';

import {MatDialogModule} from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
    entryComponents: [LoginButtons, LoginDialog, SignupDialog],
  declarations: [
    LoginButtons,
    LoginDialog,
    SignupDialog
  ],
  providers: [
    AuthGuard,
    ValidationService
  ],
  exports: [
    LoginButtons
  ]
})
export class AccountsModule {
}
