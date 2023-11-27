import { inject, Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthStorageService } from "../data-access/auth-storage.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  private auth: AuthStorageService = inject(AuthStorageService)

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    request = this.addToken(request, this.auth.getJwtToken());
    return next.handle(request);
  }

  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
}
