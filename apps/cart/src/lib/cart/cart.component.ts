import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book, BookComponent} from "@akamai/books";
// import {CartStateService} from "@akamai/cart-state";
import {Observable} from "rxjs";
import {CartQuery} from "@akamai/cart-state";

@Component({
  selector: 'centra-onboarding-cart',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements  OnInit{
  cart$!: Observable<Book[]>;
  // cartService: CartStateService = inject(CartStateService);
  cartQuery = inject(CartQuery);

  ngOnInit(): void {
    // this.cartService.getCart().subscribe((cart) => this.cart = cart)
    // this.cart$ = this.cartService.getCart();
    this.cart$ = this.cartQuery.selectCart$;
  }


}
