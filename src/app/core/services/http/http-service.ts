import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  private baseRoute: string = environment.cabRoute;

  constructor(private http: HttpClient) { }

  // POST API CALL 
  post(endUrl: string, reqBody: any) {
    const url: string = this.baseRoute + endUrl;

    return this.http.post<any>(url, reqBody);
  }

  // GET API CALL
  get(endUrl: string, params: any) {
    const url: string = this.baseRoute + endUrl;

    return this.http.get<any>(url, { params });
  }

  // PUT API CALL
  put(endUrl: string, reqBody: any) {
    const url: string = this.baseRoute + endUrl;

    return this.http.get<any>(url, reqBody);
  }
}
 