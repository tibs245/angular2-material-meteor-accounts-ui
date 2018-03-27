import { NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tracker } from 'meteor/tracker';
import { Meteor } from 'meteor/meteor';
export declare class LoginButtons {
    dialog: MatDialog;
    private zone;
    autorunComputation: Tracker.Computation;
    currentUser: Meteor.User;
    currentUserId: string;
    isLoggingIn: boolean;
    isLoggedIn: boolean;
    isSignup: boolean;
    constructor(dialog: MatDialog, zone: NgZone);
    displayName(): string;
    onLogout(): void;
    _initAutorun(): void;
    onLoginDialogAsked(): void;
    onSignupDialogAsked(): void;
}
