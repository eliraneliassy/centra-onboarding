import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NxWelcomeComponent} from './nx-welcome.component';
import {BooksService} from "@akamai/books";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'centra-onboarding-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
