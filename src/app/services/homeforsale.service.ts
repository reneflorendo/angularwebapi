import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProperty } from '../property/model/IProperty';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class HomeforsaleService {

  constructor(private http:HttpClient) { }
getAllProperties(): Observable<IProperty[]> {
  return this.http.get<IProperty[]>('data/properties.json').pipe(
    tap(data => console.log('All', JSON.stringify(data))),
    catchError(this.handleError)
  );

}

private handleError(err: HttpErrorResponse) {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(() => errorMessage);
}

}
