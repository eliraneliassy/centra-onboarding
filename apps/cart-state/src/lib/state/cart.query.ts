import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import {CartState, CartStore} from './cart.store'
import {map, Observable} from "rxjs";
import {Book} from "@akamai/books";


@Injectable({ providedIn: 'root' })
export class CartQuery extends Query<CartState> {

  selectCart$: Observable<Book[]> = this.select('items');
  selectNumberOfItemsInCart$ = this.selectCart$.pipe(
    map((items: Book[]) => items.length)
  )
  constructor(protected override store: CartStore) {
    super(store);
  }
}
