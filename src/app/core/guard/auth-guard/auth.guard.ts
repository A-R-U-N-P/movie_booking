import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot, CanActivate, Router,
  RouterStateSnapshot, UrlTree
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth-service/auth.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private AuthguardService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.AuthguardService.gettoken()) {
      this.router.navigateByUrl("/auth/login");
    }

    return this.AuthguardService.gettoken();
  }

}
