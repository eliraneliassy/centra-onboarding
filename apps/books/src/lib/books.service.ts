import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "./books.interface";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  httpClient: HttpClient = inject(HttpClient);

  getBooks(term: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('q', term);
    return this.httpClient.get<Book[]>(`https://www.googleapis.com/books/v1/volumes`, {params})
      .pipe(
        map((res: any) => res.items),
        map((items: any[]) => items.map(item => ({
          title: item.volumeInfo.title,
          imageUrl: item.volumeInfo.imageLinks.thumbnail
        })))
      )
  }
}
