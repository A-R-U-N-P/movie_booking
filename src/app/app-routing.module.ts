import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorPageComponent } from "./auth/error-page/error-page.component";
import { AuthGuard } from "./core/guard/auth-guard/auth.guard";
import { LoginGuard } from "./core/guard/login-guard/login.guard";
import { FullLayoutComponent } from "./layout/full-layout/full-layout.component";
import { MovieInfoComponent } from "./pages/movie-info/movie-info.component";
import { VenuesComponent } from "./pages/venues/venues.component";

const routes: Routes = [
  {
    path: "",
    canActivate: [LoginGuard],
    children: [
      {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full"
      },
      {
        path: "auth",
        loadChildren: () => import("../app/auth/auth.module").then(m => m.AuthModule),
      }
    ]

  },
  {
    path: "",
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "",
        redirectTo: "/explore",
        pathMatch: "full"
      },
      {
        path: "explore",
        loadChildren: () =>
          import("./pages/dashboard/dashboard.module").then(m => m.DashboardModule),
      },
      {
        path: "movie-info",
        component: MovieInfoComponent
      },
      {
        path: "show-venues",
        component: VenuesComponent
      },

    ]
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
