import {inject, Injectable} from '@angular/core';
import {ApiHabitsStatisticsService} from "@habits-statistics/data-access/api-habits-statistics.service";
import {BehaviorSubject, finalize, Subject} from "rxjs";
import {Statistics} from "@habits-statistics/interfaces/statistics";

@Injectable()
export class HabitsStatisticsStorageService {

  private apiStatistics: ApiHabitsStatisticsService = inject(ApiHabitsStatisticsService);

  public readonly statistics$: BehaviorSubject<Statistics[]> = new BehaviorSubject<Statistics[]>([]);
  public readonly statisticsLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly statisticsSuccess$: Subject<boolean> = new Subject<boolean>();

  public getStatistics(): void {
    this.statisticsLoading$.next(true);
    this.apiStatistics.getStatistics()
      .pipe(finalize(() => this.statisticsLoading$.next(false)))
      .subscribe({
        next: (statistics: Statistics[]) => {
          this.statistics$.next(statistics);
          this.statisticsSuccess$.next(true);
        },
        error: () => this.statisticsSuccess$.next(false)
      })
  }
}
