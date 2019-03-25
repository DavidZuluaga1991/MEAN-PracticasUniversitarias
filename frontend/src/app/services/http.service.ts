import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { catchError as _observableCatch, mergeMap as _observableMergeMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import {
  from as _observableFrom,
  Observable,
  of as _observableOf,
  throwError as _observableThrow
  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_URL: string;
  httpOptions: any = {};

  constructor(private http: HttpClient) {
    this.API_URL = `${environment.host}/`;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
  }

  _get(url: string): Observable<any[]> {
    const urls = `${this.API_URL}${environment.port}${url}`;
    return this.http.get(urls, this.httpOptions)
      .pipe(map(this.unserializeResponse))
      .pipe(_observableCatch(this.handleError));
  }

  _post(url: string, data: any): Observable<any[]> {
    const urls = `${this.API_URL}${environment.port}${url}`;
    return this.http.post(urls, data, this.httpOptions)
      .pipe(map(this.unserializeResponse))
      .pipe(_observableCatch(this.handleError));
  }

  _put(url: string, data: any): Observable<any[]> {
    const urls = `${this.API_URL}${environment.port}${url}`;
    return this.http.put(urls, data, this.httpOptions)
      .pipe(map(this.unserializeResponse))
      .pipe(_observableCatch(this.handleError));
  }

  _del(url: string): Observable<any[]> {
    const urls = `${this.API_URL}${environment.port}${url}`;
    return this.http.delete(urls, this.httpOptions)
      .pipe(map(this.unserializeResponse))
      .pipe(_observableCatch(this.handleError));
  }
  /**
   * Deserializa la respuesta de la peticion
   * @param resp (Response|any) Objeto de respuesta de la peticion
   */ // TODO: Eliminar y comprobar que el interceptos realiza esta funcion de una mejor forma
   public unserializeResponse(resp: Response | any) {
    if (resp && typeof resp.json === 'function') {
      return resp.json() || {};
    }
    return resp;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    /*return new ErrorObservable(
      'Something bad happened; please try again later.');*/
    return _observableThrow('Something bad happened; please try again later.') as any as Observable<any>;
    // return <Observable<any>><any>_observableThrow('Something bad happened; please try again later.');
  // tslint:disable-next-line:semicolon
  };
}
