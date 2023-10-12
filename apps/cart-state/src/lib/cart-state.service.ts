import { Injectable } from '@angular/core';
import {Book} from "@akamai/books";
import {BehaviorSubject, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  // cartState: Book[] = [];
  private cartState: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);

  getCart() {
    return this.cartState.asObservable();
  }

  addBook(book: Book): void {
    // this.cartState.push(book)
    const currentCart: Book[] = this.cartState.getValue();
    const newCart = [...currentCart, book];
    this.cartState.next(newCart);
  }

  gerNumberOfItemsInCart(): Observable<number> {
    // return of(this.cartState.getValue().length);
    return this.cartState.pipe(
      map((cart: Book[]) => cart.length)
    )
  }
}
