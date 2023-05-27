/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth-service/auth.service";
import { REGEX } from "../../../shared/helpers/validators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  public hide = true;
  public loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private rout: Router,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  private initLoginForm() {
    // Login Form Group
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.pattern(REGEX.EMAIL)]),
      password: new FormControl("", [Validators.required, Validators.pattern(REGEX.PASSWORD)]),
    });

  }


  ngAfterViewInit(): void {
    console.log();


  }






  onSubmit() {
    const loginData = this.loginForm.value;
    localStorage.setItem("USER", "ARUN");
    this.rout.navigateByUrl("/dashboard");

    this.auth.login(loginData).subscribe((res: any) => {
      localStorage.setItem("USER", "ARUN");
      this.rout.navigateByUrl("/dashboard");
    });

  }

  ngOnDestroy(): void {
    console.log();

  }

}
