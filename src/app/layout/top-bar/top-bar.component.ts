import { Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { CommonService } from "src/app/core/services/common-service/common.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  public currentTime: any;
  public hours: any;
  public msg: any;

  public isToggle = false;


  constructor(private toggleService: CommonService) { }

  ngOnInit(): void {
    this.getCurrentDate();

    // Arrow Icon Toggle
    this.toggleService.toggle.subscribe((isClose: boolean) => {
      this.isToggle = isClose;
    });
  }

  // Side Nav Toggle
  public toggleSideNav(toggle: boolean) {
    this.toggleService.sideNavToggle(toggle);
  }


  // Display Current Date And Time 
  public getCurrentDate() {
    setInterval(() => {
      this.currentTime = new Date();
      this.hours = new Date().getHours();
      const arr = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night", "Sleep"];
      this.msg = arr[this.hours < 12 ? 0 : this.hours < 16 ? 1
        : this.hours < 19 ? 2 : this.hours < 24 ? 3 : this.hours < 6 ? 4 : NaN];
    }, 1000);
  }

  public logout() {
    localStorage.clear();
    window.location.reload();
  }
}
