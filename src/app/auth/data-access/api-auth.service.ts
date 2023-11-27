import { Injectable } from '@angular/core';
import { Login } from "../interfaces/login";
import { delay, Observable, of } from "rxjs";
import { LoginPayload } from "../interfaces/login-payload";
import { Register } from "@auth/interfaces/register";
import { RegisterPayload } from "@auth/interfaces/register-payload";

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
  public login(login: Login): Observable<LoginPayload> {
    return of({username: 'testLogin', token: 'testToken'}).pipe(delay(500));
  }

  public register(register: Register): Observable<RegisterPayload> {
    return of({username: 'testLogin', token: 'testToken'}).pipe(delay(500));
  }
}
