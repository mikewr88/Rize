import { Component, OnInit } from '@angular/core';
import {ProductapiService} from './productapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductapiService]

})
export class ProductsComponent implements OnInit {
  products = [{name: 'Test'}];
  constructor (private api:ProductapiService){
  }

  ngOnInit() {
    this.getProducts();
  }
  // getAllProducts is defined in the service file.
  // if data returns, then products is set to that data
  getProducts = () => {
    this.api.getAllProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.log(error);
      }
    )
  }


}
