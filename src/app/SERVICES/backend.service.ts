import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) {
  }

  getNews<T>(): Observable<T> {
    return this.http.get<T>('http://localhost:3000/news')
  }
}
