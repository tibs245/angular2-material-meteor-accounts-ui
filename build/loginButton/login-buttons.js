"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var login_dialog_1 = require("../loginDialog/login-dialog");
var signup_dialog_1 = require("../signupDialog/signup-dialog");
var tracker_1 = require("meteor/tracker");
var meteor_1 = require("meteor/meteor");
var LoginButtons = /** @class */ (function () {
    function LoginButtons(dialog, zone) {
        this.dialog = dialog;
        this.zone = zone;
        this._initAutorun();
        this.isSignup = false;
    }
    LoginButtons.prototype.displayName = function () {
        var user = this.currentUser;
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
    ;
    LoginButtons.prototype.onLogout = function () {
        meteor_1.Meteor.logout();
    };
    LoginButtons.prototype._initAutorun = function () {
        var _this = this;
        this.autorunComputation = tracker_1.Tracker.autorun(function () {
            _this.zone.run(function () {
                _this.currentUser = meteor_1.Meteor.user();
                _this.currentUserId = meteor_1.Meteor.userId();
                _this.isLoggingIn = meteor_1.Meteor.loggingIn();
                _this.isLoggedIn = !!meteor_1.Meteor.user();
            });
        });
    };
    LoginButtons.prototype.onLoginDialogAsked = function () {
        var dialogRef = this.dialog.open(login_dialog_1.LoginDialog, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // Do nothing when logged
        });
    };
    LoginButtons.prototype.onSignupDialogAsked = function () {
        var dialogRef = this.dialog.open(signup_dialog_1.SignupDialog, {
            width: '300px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // Do nothing when signed
        });
    };
    LoginButtons = __decorate([
        core_1.Component({
            selector: 'login-buttons',
            template: "<button mat-raised-button color=\"accent\" *ngIf=\"!isLoggedIn\" (click)=\"onLoginDialogAsked()\">Login</button>\n  <button mat-button color=\"accent\" *ngIf=\"!isLoggedIn\" (click)=\"onSignupDialogAsked()\">SignUp</button>\n\n  <button mat-button class=\"user-menu--button\"[matMenuTriggerFor]=\"userMenu\" *ngIf=\"isLoggedIn\">{{ displayName() }} <mat-icon>person</mat-icon></button>\n\n  <mat-menu #userMenu=\"matMenu\">\n      <button mat-menu-item (click)=\"onLogout()\">\n          <mat-icon>power_setting_new</mat-icon>\n          <span>Log out</span>\n      </button>\n  </mat-menu>"
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialog, core_1.NgZone])
    ], LoginButtons);
    return LoginButtons;
}());
exports.LoginButtons = LoginButtons;
