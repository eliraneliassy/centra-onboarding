import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'feed',
    pathMatch: "full"
  },
  {
    path: 'feed',
    loadComponent: () => import('@akamai/feed').then(c => c.FeedComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('@akamai/cart').then(c => c.CartComponent)
  }
];
