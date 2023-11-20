import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    SidebarModule,
    ButtonModule
  ],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  inputs: ['display']
})
export class NavigationComponent {
  display: boolean;
}
