import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Book, BookComponent} from "@akamai/books";
import {CartStateService} from "@akamai/cart-state";

@Component({
  selector: 'centra-onboarding-cart',
  standalone: true,
  imports: [CommonModule, BookComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements  OnInit{
  cart: Book[] = [];
  cartService: CartStateService = inject(CartStateService);

  ngOnInit(): void {
    this.cart = this.cartService.cartState;
  }


}
