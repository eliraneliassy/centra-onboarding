import { Injectable } from '@angular/core';
import {Book} from "@akamai/books";

@Injectable({
  providedIn: 'root'
})
export class CartStateService {

  cartState: Book[] = [];

  addBook(book: Book): void {
    this.cartState.push(book)
  }
}
