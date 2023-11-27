import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SharedModule } from "primeng/api";
import { TranslateModule } from "@ngx-translate/core";
import { PasswordModule } from "primeng/password";
import { RouterLink } from "@angular/router";
import { AuthStorageService } from "@auth/data-access/auth-storage.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonModule, DividerModule, DropdownModule, InputNumberModule, InputTextModule, ReactiveFormsModule, SharedModule, TranslateModule, PasswordModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private auth: AuthStorageService = inject(AuthStorageService);

  public form: FormGroup;

  public ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }

  public onLogin(): void {
    this.auth.login(this.form.value);
  }
}
