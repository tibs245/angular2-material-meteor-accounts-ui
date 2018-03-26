export const html: string= `<button mat-raised-button color="accent" *ngIf="!isLoggedIn" (click)="onLoginDialogAsked()">Login</button>
<button mat-button color="accent" *ngIf="!isLoggedIn" (click)="onSignupDialogAsked()">SignUp</button>

<button mat-button class="user-menu--button"[matMenuTriggerFor]="userMenu" *ngIf="isLoggedIn">{{ displayName() }} <mat-icon>person</mat-icon></button>

<mat-menu #userMenu="matMenu">
    <button mat-menu-item (click)="onLogout()">
        <mat-icon>power_setting_new</mat-icon>
        <span>Log out</span>
    </button>
</mat-menu>`;