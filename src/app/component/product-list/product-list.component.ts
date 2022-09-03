import { Component, OnInit } from '@angular/core';
import { StoreApiService } from 'src/app/service/store-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productData : any;

  constructor( private api : StoreApiService) { }

  ngOnInit(): void {
    this.api.fetchProductData()
    .subscribe(response => {
      this.productData = response;
    })
  }

}
