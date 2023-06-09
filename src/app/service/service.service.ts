import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  url = 'https://v6.exchangerate-api.com/v6/c2798ed7efd33f03f26299a1/latest/USD'
  getCur: any;

  constructor(private http:HttpClient) { 
   
  }
  currencyResult(){
    return this.http.get(`${this.url}/${this.getCur}`)
 }
}
