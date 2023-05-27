import { BreakpointObserver } from "@angular/cdk/layout";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { NavigationEnd, Router } from "@angular/router";
import { CommonService } from "src/app/core/services/common-service/common.service";
import {
  MenuItem, MenuItemList,
  sideMenuItem
} from "../../../shared/model/side-bar-model/side-bar-model";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  menuItems: MenuItem[] = MenuItemList;
  sideMenuItems: sideMenuItem[] = sideMenuItem;
  public isOpen: Array<boolean> = [];
  constructor(private screenObserver: BreakpointObserver,
    private router: Router,
    private toggleService: CommonService) { }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.sidenav?.close();
    // }, 300);

    // Side Nav Toggle Using Services
    // this.toggleService.toggle.subscribe((isClose: boolean) => {
    //   isClose ? this.sidenav?.close() : this.sidenav?.open();
    // });
  }


  ngAfterViewInit(): void {

    setTimeout(() => {

      // Reset Top Bar Arrow Icon  
      this.sidenav.closedStart?.subscribe((isClose: any) => {
        this.toggleService.sideNavToggle(!isClose);
      });
      // To close sideNav When Screen Max-width 800px
      // this.screenObserver.observe(["(max-width:800px)"]).subscribe(res => {
      //   this.toggleService.sideNavToggle(res.matches);
      //   // Close SideNav When Routing (for mobiles)
      //   this.router.events.subscribe(event => {

      //     event instanceof NavigationEnd && res.matches ?
      //       [
      //         this.toggleService.sideNavToggle(event instanceof NavigationEnd),
      //         this.sidenav.close()
      //       ] : NaN;
      //   });

      //   if (res.matches) {
      //     this.sidenav.mode = "over";
      //     this.sidenav.close();

      //   } else {
      //     this.sidenav.mode = "side";
      //     this.sidenav.open();
      //   }
      // });
    });

  }

  // To Close And Open SubMenu
  openSubMenu(i: number, subMenu?: boolean) {
    if (subMenu) {
      if (this.isOpen[i]) {
        this.isOpen[i] = !this.isOpen[i];
      } else {
        this.isOpen.forEach((b, index) => this.isOpen[index] = false);
        this.isOpen[i] = true;
      }

    }

  }

}
