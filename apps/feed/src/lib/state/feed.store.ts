import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Book} from "@akamai/books";

export interface FeedState {
  items: Book[];
}

export function createInitialState(): FeedState {
  return {
    items: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'feed' })
export class FeedStore extends Store<FeedState> {
  constructor() {
    super(createInitialState());
  }
}
