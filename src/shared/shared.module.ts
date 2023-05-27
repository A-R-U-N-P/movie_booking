import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "src/assets/material/material.module";
import { DriverDialogComponent } from "./components/driver-dialog/driver-dialog.component";



@NgModule({
  declarations: [
    DriverDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class SharedModule { }  
