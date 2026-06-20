import { Routes } from '@angular/router';
import { Home } from './home/home';
import { License } from './license/license';
import { NumberGessingGame } from './number-gessing-game/number-gessing-game';
import { ShoppingList } from './shopping-list/shopping-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'license', component: License },
  { path: 'number-gessing-game', component: NumberGessingGame },
  { path: 'shopping-list', component: ShoppingList },
];
