/* eslint-disable max-len */
import { Injectable } from "@angular/core";
import { AUTH, login } from "../../../../shared/model/auth-model/auth-model";
import { HttpService } from "../http/http-service";

@Injectable({
  providedIn: "root"
})
export class AuthService {

  constructor(private http: HttpService) { }

  // Login Services
  login(loginData: login) {

    const url: string = AUTH.LOGIN;

    return this.http.post(url, loginData);
  }

  gettoken() {

    return !!localStorage.getItem("USER");
  }
}
