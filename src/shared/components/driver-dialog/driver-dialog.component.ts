import { Component, Inject, OnInit, AfterViewInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { map, Observable, startWith } from "rxjs";

@Component({
  selector: "app-driver-dialog",
  templateUrl: "./driver-dialog.component.html",
  styleUrls: ["./driver-dialog.component.scss"],
})
export class DriverDialogComponent implements OnInit, AfterViewInit, OnDestroy {
  public driverFromGroup!: FormGroup;
  public options = [
    {
      dName: "ola",
      cabDetails: "711-2880 Nulla St  Mankato Miss  257 563-7401",
    },
    {
      dName: "uber",
      cabDetails: "P.O. Box 283 8562 Fusce Rd.Frederick Nebraska 20620 (372) 587-2335",
    },
    {
      dName: "auto",
      cabDetails: "9 Prospect Lane Anchorage, AK 99504",
    },
    {
      dName: "zomato",
      cabDetails: "249 SW. Bowman Street Depew, NY 14043",
    },
    {
      dName: "sweggy",
      cabDetails: "18 Carriage St. Coatesville, PA 19320",
    },
    {
      dName: "rapido",
      cabDetails: "174 Sunrise Road, Las Vegas, Nevada, United States, 89101",
    },
  ];
  public activeDriverObservable!: Observable<any> | undefined;

  constructor(
    public dialogRef: MatDialogRef<DriverDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
  ) { }

  ngOnInit(): void {
    this.initializeDriverInfo();
  }

  public selectionError() {
    const driverData = this.isDriverExists();
    if (!driverData?.length) {
      return { selectionError: true };
    }
    this.driverFromGroup?.get("cabDetails")?.setValue(driverData[0]?.cabDetails);

    return null;

  }

  public initializeDriverInfo() {
    this.driverFromGroup = this.fb.group({
      activeDriver: new FormControl("", [Validators.required, this.selectionError.bind(this)]),
      cabDetails: new FormControl(""),
    });

    // To Search
    this.activeDriverObservable = this.driverFromGroup.get("activeDriver")
      ?.valueChanges.pipe(
        startWith(""),
        map((value) => {
          return this.options.filter((option) =>
            option.dName?.toLowerCase().includes(value?.toLowerCase())
          );
        })
      );
  }

  public activeDriverSelectionChange(details: any) {
    const { cabDetails } = details;
    this.driverFromGroup.get("cabDetails")?.setValue(cabDetails);
  }

  public isDriverExists() {
    const driverName = this.driverFromGroup?.controls["activeDriver"]?.value;
    const isExists = this.options?.filter(d =>
      d.dName?.toLocaleLowerCase() === driverName?.toLowerCase());

    return isExists;
  }
  public clearCabDetails(event: any) {
    event.key != "Enter" && !this.isDriverExists()?.length ?
      this.driverFromGroup.get("cabDetails")?.setValue(null) : null;
  }

  public onSave() {
    console.log("SAVE", this.driverFromGroup.value);

  }

  ngAfterViewInit(): void {
    console.log();
  }
  ngOnDestroy(): void {
    this.driverFromGroup.reset();
  }
}
