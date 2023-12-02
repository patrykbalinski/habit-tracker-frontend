import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from "primeng/button";

@Component({
  standalone: true,
  imports: [CommonModule, ButtonModule],
  selector: 'app-access-customization',
  templateUrl: './access-customization.component.html',
  styleUrls: ['./access-customization.component.scss']
})
export class AccessCustomizationComponent {

  private head: HTMLHeadElement = document.getElementsByTagName('head')[0];
  protected currentTheme: string = 'default';
  protected isAccessCustomizationOpened: boolean = false;
  private rootFontSize: number = 16;

  public toggleAccessCustomizationWindow(): void {
    this.isAccessCustomizationOpened = !this.isAccessCustomizationOpened;
  }

  public loadYellowBlackContractTheme(): void {
    const linkElement: HTMLLinkElement = document.createElement('link');
    linkElement.id = 'yellow-black-contract';
    linkElement.rel = 'stylesheet';
    linkElement.type = 'text/css';
    linkElement.href = `assets/themes/yellow-black-contrast.css`;
    this.head.appendChild(linkElement);
    this.currentTheme = 'yellow-black-contract';
  }

  public loadDefaultTheme(): void {
    this.rootFontSize = 16;
    const html: HTMLHtmlElement = document.getElementsByTagName('html')[0];
    html.style.setProperty('font-size', `${this.rootFontSize}px`)
    this.currentTheme = 'default';
  }

  public increaseFontSize(): void {
    this.rootFontSize = this.rootFontSize + 2;
    const html: HTMLHtmlElement = document.getElementsByTagName('html')[0];
    html.style.setProperty('font-size', `${this.rootFontSize}px`)
  }

  public decreaseFontSize(): void {
    this.rootFontSize = Math.max(this.rootFontSize - 2, 10);
    const html: HTMLHtmlElement = document.getElementsByTagName('html')[0];
    html.style.setProperty('font-size', `${this.rootFontSize}px`)
  }

  public removeThemes(): void {
    const yellowBlackContrastTheme: HTMLElement = document.getElementById('yellow-black-contract');
    if (yellowBlackContrastTheme) { this.head.removeChild(yellowBlackContrastTheme); }
  }
}
