import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { RouterLink } from "@angular/router";
import { AuthStorageService } from "@auth/data-access/auth-storage.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ButtonModule, InputTextModule, PasswordModule, ReactiveFormsModule, TranslateModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  public onRegister(): void {
    this.auth.register(this.form.value);
  }
}
