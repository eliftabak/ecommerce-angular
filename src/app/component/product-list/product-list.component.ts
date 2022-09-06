import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { StoreApiService } from 'src/app/service/store-api.service';
import { UpdateService } from 'src/app/service/update.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productData : any;
  public categories : any;

  constructor( private api : StoreApiService,
    private cartService : CartService,
    private update : UpdateService) { }

  ngOnInit(): void {
    this.api.fetchProductData()
    .subscribe(response => {
      this.productData = response;
      this.categories = response;

      this.productData.forEach((i : any) => {
        Object.assign(i, {quantity : 1, total: i.price});
      });
    })
  }

  addToCart(product : any) {
    this.update.sendUpdate(product);
  }

  filter(category : string) {
    this.categories = this.productData
    .filter((i : any) => {
      if(i.category == category || category == ''){
        return i;
      }
    })
  }
}
