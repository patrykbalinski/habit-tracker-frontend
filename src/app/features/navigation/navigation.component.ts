import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AuthStorageService } from "@auth/data-access/auth-storage.service";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SidebarModule,
    ButtonModule,
    TranslateModule
  ],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  protected authStorage: AuthStorageService = inject(AuthStorageService);

  public isToolbarVisible: boolean = false;
}
