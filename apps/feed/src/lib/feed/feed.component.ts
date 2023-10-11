import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book, BookComponent, BooksService} from "@akamai/books";
import {Observable} from "rxjs";
import {CartStateService} from "@akamai/cart-state";

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
  cartState: CartStateService = inject(CartStateService);

  feed$!: Observable<Book[]>;

  ngOnInit(): void {
    this.feed$ = this.booksService.getBooks('angular')
  }

  addToCart(book: Book){
    this.cartState.addBook(book);
  }

}
