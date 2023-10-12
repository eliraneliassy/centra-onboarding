import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';

import {FeedState, FeedStore} from "./feed.store";


@Injectable({ providedIn: 'root' })
export class FeedQuery extends Query<FeedState> {

  selectFeed$ = this.select('items');

  constructor(protected override store: FeedStore) {
    super(store);
  }
}
