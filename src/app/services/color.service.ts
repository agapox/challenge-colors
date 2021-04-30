import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ColorsHttp } from '../interfaces/colors.interface';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private APIURL: string = 'https://reqres.in/api/colors';
  private colorsEndpoint: string = 'colors';

  constructor(
    private httpClient: HttpClient
  ) { }


  getColors(page: number = 1): Observable<ColorsHttp> {
    return this.httpClient.get<ColorsHttp>(`${this.APIURL}${this.colorsEndpoint}?page=${page}`)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body: ${error.error}`);
    }
    return throwError(
      'Error: please try again later.');
  }
}
