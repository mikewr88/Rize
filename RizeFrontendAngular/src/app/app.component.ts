import { Component } from '@angular/core';
import {ProductapiService} from './productapi.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductapiService]
})
export class AppComponent {
  products = [{name: "Test"}];
  constructor (private api:ProductapiService){
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
