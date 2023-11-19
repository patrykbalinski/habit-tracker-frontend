import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs";
import { Statistics } from "@habits-statistics/interfaces/statistics";

@Injectable()
export class ApiHabitsStatisticsService {

  public getStatistics(): Observable<Statistics[]> {
    return of(STATISTICS).pipe(delay(500));
  }
}

export const STATISTICS: Statistics[] = [

]
