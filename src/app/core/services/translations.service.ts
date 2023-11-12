import {inject, Injectable} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Language } from "../interfaces/language";

@Injectable({
  providedIn: "root"
})
export class TranslationsService {

  private translate: TranslateService = inject(TranslateService);

  private readonly availableLanguages: Language[] = [
    { name: 'English', code: 'en'},
    { name: 'Polski', code: 'pl'}
  ]

  constructor() {
    this.initTranslations();
  }

  public changeLanguage(languageCode: string): void {
    this.translate.use(languageCode);
  }

  public getAvailableLanguages(): Language[] {
    return this.availableLanguages;
  }

  public getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  private initTranslations(): void {
    const availableLanguages: string[] = this.availableLanguages.map( language => language.code);
    const browserLanguage: string = this.translate.getBrowserLang() as string;

    this.translate.addLangs(availableLanguages);
    this.translate.use(availableLanguages.includes(browserLanguage) ? browserLanguage : 'en');
  }
}
