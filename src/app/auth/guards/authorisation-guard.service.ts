import { inject, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthStorageService } from "../data-access/auth-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorisationGuardService {

  private auth: AuthStorageService = inject(AuthStorageService);
  private router: Router = inject(Router);

  public canActivate(): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['', 'login']).then();
    return false;
  }
}
