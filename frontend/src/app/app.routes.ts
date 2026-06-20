import { Routes } from '@angular/router';
import { Home } from './home/home';
import { License } from './license/license';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'license', component: License },
];
