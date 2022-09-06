import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { UpdateService } from 'src/app/service/update.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public products : any = [];
  public productList = new BehaviorSubject<any>([]);
  total = 0;

  constructor(private cartService : CartService, private update: UpdateService) { }

  ngOnInit(): void {
    this.update.getUpdate().subscribe((product) => {
      this.updateShoppingCart(product);
      this.getTotalPrice();
    })
   }

  updateShoppingCart(product : any) {

    let productExists = false;

    for (let i in this.products) {
      if (this.products[i].id === product.id) {
        this.products[i].quantity++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      this.products.push(product);
    }
  }

  getTotalPrice() {
    this.total = 0;

    this.products.map((item:any) => {
      this.total += (item.quantity * item.price)
      this.total = parseFloat(this.total.toFixed(2))
    });
  }

  removeCartElement(product : any) {
    this.products.map((item:any, index:any) => {
      if (product.id === item.id) {
        this.products.splice(index, 1);
        this.getTotalPrice();
      }
    })
  }

  increase(product : any) {
    product.quantity += 1;
    this.getTotalPrice();
  }

  decrease(product : any) {
    if (product.quantity > 1) {
      product.quantity -= 1;
      this.getTotalPrice();
    }
  }
}
