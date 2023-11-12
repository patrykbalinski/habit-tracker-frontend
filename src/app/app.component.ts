import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet} from '@angular/router';
import { NavigationComponent } from "@navigation/navigation.component";
import { TranslationsService } from "./core/services/translations.service";
import { MessageService } from "primeng/api";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationComponent
  ],
  providers: [
    MessageService
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private translations: TranslationsService = inject(TranslationsService);
}
