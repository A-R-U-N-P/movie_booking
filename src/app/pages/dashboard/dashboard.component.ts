import {
  AfterViewInit, Component, OnDestroy, OnInit, ViewChild
} from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { DriverDialogComponent } from "src/shared/components/driver-dialog/driver-dialog.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator)

  public paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  public customerTableDataSource = new MatTableDataSource<any>([]);

  public tableKey: Array<any> = [];

  public value: any;

  displayedColumns: string[] = ["Booking No", "Customer Name", "Customer Mobile",
    "Pick Up Date", "Remarks", "Duty Type", "Pick Up Address", "Destination Address",
    "Driver Name", "Status", "Action"];

  public moviesList: any = [
    {
      logo: 'assets/images/petta.jpg',
      name: "petta",
      rating: 10

    },
    {
      logo: 'assets/images/bahuballi.jpg'
      ,
      name: "bahuballi",
      rating: 9
    },
    {
      logo: 'assets/images/vtv.jpg'
      ,
      name: "vinnai thandi varuvaya",
      rating: 7
    },
    {
      logo: 'assets/images/ratsasan.jpg'
      ,
      name: "ratsasan",
      rating: 10
    },
    {
      logo: 'assets/images/hridayam.jpg'
      ,
      name: "hridayam",
      rating: 5
    },
    {
      logo: 'assets/images/LoveToday.jpg'
      ,
      name: "love today",
      rating: 8
    },
    {
      logo: 'assets/images/vikram.jpg'
      ,
      name: "vikram",
      rating: 9
    },
  ]

  constructor(private dialog: MatDialog,
    private route: Router) { }

  ngOnInit(): void {

  }


  showInfo(movie: any) {
    localStorage.setItem("movie_data", JSON.stringify(movie))
    this.route.navigateByUrl("/movie-info")

  }
  assignDriver(detail: any) {
    const config: MatDialogConfig = {
      panelClass: "dialog-responsive",
      disableClose: true,
      data: {
        title: "Assign Driver",
        data: detail,
      },
    };
    const driverDialog = this.dialog.open(DriverDialogComponent, config);
    driverDialog.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value ?
      (event.target as HTMLInputElement).value : " ";
    this.customerTableDataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.customerTableDataSource.paginator = this.paginator;
    this.customerTableDataSource.sort = this.sort;
  }

  ngOnDestroy() {
    console.log("");


  }
}
