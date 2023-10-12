import {inject, Injectable} from "@angular/core";
import {FeedState, FeedStore} from "./feed.store";
import {BooksService} from "@akamai/books";

@Injectable({providedIn: 'root'})
export class FeedFacade {
  feedStore = inject(FeedStore);
  feedService: BooksService = inject(BooksService);
  getFeed(term: string) {
    this.feedService.getBooks(term).subscribe((res) => {
      this.feedStore.update((feedState: FeedState) => ({
        ...feedState, items: [...feedState.items , ...res]
      }))
    } )
  }
}
