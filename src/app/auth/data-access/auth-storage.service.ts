import { inject, Injectable } from '@angular/core';
import { LocalStorage } from "@core/enums/local-storage.enum";
import { BehaviorSubject, finalize, Subject } from "rxjs";
import { ApiAuthService } from "./api-auth.service";
import { Login } from "../interfaces/login";
import { LoginPayload } from "../interfaces/login-payload";
import { Router } from "@angular/router";
import { Register } from "@auth/interfaces/register";

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {

  private apiAuth: ApiAuthService = inject(ApiAuthService);
  private router: Router = inject(Router);

  readonly loginLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly loginSuccess$: Subject<boolean> = new Subject<boolean>();

  readonly registerLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly registerSuccess$: Subject<boolean> = new Subject<boolean>();

  public login(login: Login): void {
    this.loginLoading$.next(true);
    this.apiAuth.login(login)
      .pipe(finalize(() => this.loginLoading$.next(false)))
      .subscribe({
        next: (loginPayload: LoginPayload): void => {
          localStorage.setItem(LocalStorage.USER_USERNAME, loginPayload.username);
          localStorage.setItem(LocalStorage.JWT_TOKEN, loginPayload.token);
          this.loginSuccess$.next(true);
          this.router.navigate(['', 'habits']).then();
        },
        error: () => this.loginSuccess$.next(false)
      })
  }

  public register(register: Register): void {

  }

  public getJwtToken(): string {
    return localStorage.getItem(LocalStorage.JWT_TOKEN);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem(LocalStorage.JWT_TOKEN) !== null && localStorage.getItem(LocalStorage.USER_USERNAME) !== null;
  }

  public logOut(): void {
    localStorage.removeItem(LocalStorage.JWT_TOKEN);
    localStorage.removeItem(LocalStorage.USER_USERNAME);
    this.router.navigate(['', 'login']).then();
  }
}
