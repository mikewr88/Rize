//imported modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductItemComponent } from './component/product-item/product-item.component';

@NgModule({
  // The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
