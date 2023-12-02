import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {InputTextareaModule} from "primeng/inputtextarea";
import { Router, RouterLink } from "@angular/router";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    TranslateModule,
    InputTextareaModule,
    RouterLink
  ],
  selector: 'app-issue-reporter',
  templateUrl: './issue-reporter.component.html',
  styleUrls: ['./issue-reporter.component.scss']
})
export class IssueReporterComponent implements OnInit {

  private router: Router = inject(Router)

  public form: FormGroup;

  public ngOnInit(): void {
    this.createForm();
  }

  public onSend(): void {
    console.log(this.form.value);
  }

  public onCancel(): void {
    this.router.navigate(['', 'habits']).then();
  }

  private createForm(): void {
    this.form = new FormGroup({
      message: new FormControl(null, [Validators.required])
    })
  }
}
