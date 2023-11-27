import { mapToCanActivate, Routes } from '@angular/router';
import { AuthorisationGuardService } from "@auth/guards/authorisation-guard.service";

export const appRoutes: Routes = [
  { path: '', redirectTo: 'habits', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('@auth/features/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('@auth/features/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'habits',
    loadComponent: () => import('@habits/habits.component').then(c => c.HabitsComponent),
    canActivate: mapToCanActivate([AuthorisationGuardService])
  },
  {
    path: 'habit/:id/occurrence',
    loadComponent: () => import('@habit-occurrence-adder/habit-occurrence-adder.component').then(c => c.HabitOccurrenceAdderComponent),
    canActivate: mapToCanActivate([AuthorisationGuardService])
  },
  {
    path: 'habit/new',
    loadComponent: () => import('@habits-editor/habits-editor.component').then(c => c.HabitsEditorComponent),
    canActivate: mapToCanActivate([AuthorisationGuardService])
  },
  {
    path: 'habit/:id/edit',
    loadComponent: () => import('@habits-editor/habits-editor.component').then(c => c.HabitsEditorComponent),
    canActivate: mapToCanActivate([AuthorisationGuardService])
  },
  {
    path: 'statistics',
    loadComponent: () => import('@habits-statistics/habits-statistics.component').then(c => c.HabitsStatisticsComponent),
    canActivate: mapToCanActivate([AuthorisationGuardService])
  },
  {
    path: 'report-issue',
    loadComponent: () => import('@issue-reporter/issue-reporter.component').then(c => c.IssueReporterComponent),
    canActivate: mapToCanActivate([AuthorisationGuardService])
  },
  {
    path: 'settings',
    loadComponent: () => import('@settings/settings.component').then(c => c.SettingsComponent)
  }
];
