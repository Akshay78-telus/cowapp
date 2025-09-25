import { Route } from '@angular/router';
import { CowListComponent } from './components/cow-list/cow-list.component';
import { CowDetailComponent } from './components/cow-details/cow-details.component';

export const appRoutes: Route[] = [
  { path: 'cows', component: CowListComponent },
  { path: 'cows/:id', component: CowDetailComponent },
  { path: '**', redirectTo: 'cows' }
];
