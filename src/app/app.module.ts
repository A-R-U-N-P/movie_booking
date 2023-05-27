import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../assets/material/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TopBarComponent } from "./layout/top-bar/top-bar.component";
import { SideBarComponent } from "./layout/side-bar/side-bar.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AuthModule } from "./auth/auth.module";
import { FullLayoutComponent } from "./layout/full-layout/full-layout.component";
import { SharedModule } from "src/shared/shared.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./core/interceptors/token.interceptor";
import { MovieInfoComponent } from './pages/movie-info/movie-info.component';
import { VenuesComponent } from './pages/venues/venues.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    DashboardComponent,
    FullLayoutComponent,
    MovieInfoComponent,
    VenuesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    AuthModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
