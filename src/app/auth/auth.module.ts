import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { MaterialModule } from "src/assets/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ErrorPageComponent } from "./error-page/error-page.component";


@NgModule({
  declarations: [
    LoginComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FlexLayoutModule,

  ]
})
export class AuthModule { }
