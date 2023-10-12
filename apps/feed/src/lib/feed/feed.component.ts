import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book, BookComponent, BooksService} from "@akamai/books";
import {Observable} from "rxjs";
import {CartStore} from "@akamai/cart-state";
import {FeedFacade} from "../state/feed.facade";
import {FeedQuery} from "../state/feed.query";
// import {CartStateService} from "@akamai/cart-state";


@Component({
  selector: 'centra-onboarding-feed',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent implements OnInit{
  booksService: BooksService = inject(BooksService);
  // cartState: CartStateService = inject(CartStateService);
  cartStore: CartStore = inject(CartStore);
  feedFacade = inject(FeedFacade);
  feedQuery = inject(FeedQuery);


  feed$!: Observable<Book[]>;

  ngOnInit(): void {
    // this.feed$ = this.booksService.getBooks('angular')
    this.feedFacade.getFeed('angular');
    this.feed$ = this.feedQuery.selectFeed$;
  }

  addToCart(book: Book){
    // this.cartState.addBook(book);

    // this.cartFacade.add

    this.cartStore.update((currentCart) =>
      ({...currentCart, items: [...currentCart.items, book]}))
  }

}
