import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CommonService {

  constructor() { }

  public isToggle!: boolean;
  public subject = new Subject<any>();
  private toggleServices = new BehaviorSubject(this.isToggle);
  toggle = this.toggleServices.asObservable();

  /*  SIDE NAV TOGGLE*/
  sideNavToggle(value: boolean) {
    this.toggleServices.next(value);
  }
}
