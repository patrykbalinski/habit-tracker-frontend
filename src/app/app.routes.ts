import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'habits', pathMatch: 'full' },
  {
    path: 'habits',
    loadComponent: () => import('@habits/habits.component').then(c => c.HabitsComponent)
  },
  {
    path: 'habit/:id/occurrence',
    loadComponent: () => import('@habit-occurrence-adder/habit-occurrence-adder.component').then(c => c.HabitOccurrenceAdderComponent)
  },
  {
    path: 'habit/new',
    loadComponent: () => import('@habits-editor/habits-editor.component').then(c => c.HabitsEditorComponent)
  },
  {
    path: 'habit/:id/edit',
    loadComponent: () => import('@habits-editor/habits-editor.component').then(c => c.HabitsEditorComponent)
  },
  {
    path: 'statistics',
    loadComponent: () => import('@habits-statistics/habits-statistics.component').then(c => c.HabitsStatisticsComponent)
  },
  {
    path: 'report-issue',
    loadComponent: () => import('@issue-reporter/issue-reporter.component').then(c => c.IssueReporterComponent)
  },
  {
    path: 'settings',
    loadComponent: () => import('@settings/settings.component').then(c => c.SettingsComponent)
  }
];
