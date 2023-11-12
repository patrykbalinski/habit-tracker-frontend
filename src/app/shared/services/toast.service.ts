import { inject, Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { MessageService } from 'primeng/api';

@Injectable()
export class ToastService {

  private translate: TranslateService = inject(TranslateService);
  private message: MessageService = inject(MessageService);

  public showSuccess(title: string, content: string): void {
    this.message.add({
      severity: 'success',
      summary: this.translate.instant(title),
      detail: this.translate.instant(content),
      life: 1000000
    });
  }

  public showInfo(title: string, content: string): void {
    this.message.add({
      severity: 'info',
      summary: this.translate.instant(title),
      detail: this.translate.instant(content)
    });
  }

  public showWarning(title: string, content: string): void {
    this.message.add({
      severity: 'warn',
      summary: this.translate.instant(title),
      detail: this.translate.instant(content)
    });
  }

  public showError(title: string, content: string): void {
    this.message.add({
      severity: 'error',
      summary: this.translate.instant(title),
      detail: this.translate.instant(content)
    });
  }
}
