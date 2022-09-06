import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartProductList : any = []
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getProductList() {
    return this.productList.asObservable();
  }

  removeCartProduct(product : any) {
    this.cartProductList.map((item:any, index:any) => {
      if (product.id === item.id) {
        this.cartProductList.splice(index,1);
      }
    })
    this.productList.next(this.cartProductList);
  }
}
