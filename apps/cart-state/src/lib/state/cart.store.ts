import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Book} from "@akamai/books";

export interface CartState {
  items: Book[];
}

export function createInitialState(): CartState {
  return {
    items: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
