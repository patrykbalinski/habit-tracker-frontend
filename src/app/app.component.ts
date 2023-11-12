import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { NavigationComponent } from "@navigation/navigation.component";
import { TranslationsService } from "./core/services/translations.service";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private translations: TranslationsService = inject(TranslationsService);
}
