import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { Router, RouterLink } from "@angular/router";
import { DropdownModule } from "primeng/dropdown";
import { Language } from "@core/interfaces/language";
import { TranslationsService } from "@core/services/translations.service";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    ReactiveFormsModule,
    TranslateModule,
    DropdownModule,
    FormsModule,
    RouterLink
  ],
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  private router: Router = inject(Router);
  public translations: TranslationsService = inject(TranslationsService);
  public languageFormController: FormControl = new FormControl(this.translations.getCurrentLanguage());

  public ngOnInit():void {
    this.initDataHandle();
  }

  public onSave(): void {
    console.log('save settings in backend');
  }

  public onCancel(): void {
    this.router.navigate(['', 'habits']).then();
  }

  private initDataHandle(): void {
    this.languageFormController.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((languageCode: Language['code']) => this.translations.changeLanguage(languageCode));
  }
}
