import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NxWelcomeComponent} from './nx-welcome.component';
import {BooksService} from "@akamai/books";
// import {CartStateService} from "@akamai/cart-state";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {CartQuery} from "@akamai/cart-state";

@Component({
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  selector: 'centra-onboarding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{

  // cartSate = inject(CartStateService);
  cartQuery = inject(CartQuery);

  numberOfItemsInCart$!: Observable<number>;

  ngOnInit(): void {
    // this.cartSate.getCart().subscribe(())
    // this.numberOfItemsInCart$ = this.cartSate.gerNumberOfItemsInCart();
    this.numberOfItemsInCart$ = this.cartQuery.selectNumberOfItemsInCart$;

  }



}
