import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [

  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'voucher-details',
    loadComponent: () => import('./pages/voucher-details/voucher-details.component').then(m => m.VoucherDetailsComponent),
  },
  {
    path: 'vouchers',
    loadComponent: () => import('./pages/vouchers/vouchers.component').then(m => m.VouchersComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];
