import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  private apiUrl = 'https://qapi.vercel.app/api/random';

  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

}
