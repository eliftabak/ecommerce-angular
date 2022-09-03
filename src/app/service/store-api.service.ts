import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreApiService {

  constructor(private http : HttpClient) { }

  fetchProductData(){
    return this.http.get<any>('https://fakestoreapi.com/products')
    .pipe(map((response:any)=>{
      return response;
      console.log(response)
    }))
  }
}
