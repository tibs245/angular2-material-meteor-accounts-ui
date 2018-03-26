import { Component, NgZone } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {LoginDialog} from '../loginDialog/login-dialog';
import {SignupDialog} from '../signupDialog/signup-dialog';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';

import html from './login-button.html';

@Component({
  selector: 'login-buttons',
  template: html
})
export class LoginButtons {
  autorunComputation: Tracker.Computation;
  currentUser: Meteor.User;
  currentUserId: string;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  isSignup: boolean;

  constructor(public dialog: MatDialog, private zone: NgZone) {
    this._initAutorun();
    this.isSignup = false;
  }

  displayName(): string {
    let user : any = this.currentUser;

    if (!user)
      return '';

    if (user.profile && user.profile.name)
      return user.profile.name;

    if (user.username)
      return user.username;

    if (user.emails && user.emails[0] && user.emails[0].address)
      return user.emails[0].address;

    return '';
  };

  onLogout(): void {
    Meteor.logout();
  }

  _initAutorun(): void {
    this.autorunComputation = Tracker.autorun(() => {
      this.zone.run(() => {
        this.currentUser = Meteor.user();
        this.currentUserId = Meteor.userId();
        this.isLoggingIn = Meteor.loggingIn();
        this.isLoggedIn = !!Meteor.user();
      })
    });
  }

    onLoginDialogAsked(): void {

        let dialogRef = this.dialog.open(LoginDialog, {
            width: '300px'
        });

        dialogRef.afterClosed().subscribe(result => {
            // Do nothing when logged
        });
    }

    onSignupDialogAsked(): void {

        let dialogRef = this.dialog.open(SignupDialog, {
            width: '300px'
        });

        dialogRef.afterClosed().subscribe(result => {
          // Do nothing when signed
        });
    }
}
