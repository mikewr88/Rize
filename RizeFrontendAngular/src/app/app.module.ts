//imported modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


//components
import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { AboutComponent } from './component/pages/about/about.component';
import { NavbarComponent } from './component/layout/navbar/navbar.component';
import { ContactComponent } from './component/pages/contact/contact.component';
import { FooterComponent } from './component/layout/footer/footer.component';

@NgModule({
  //Whenever You create a new component place the component name in declarations
  //Using the CLI to generate components auto inputs them into this file
  // The set of components, directives, and pipes (declarables) that belong to this module.
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    AboutComponent,
    NavbarComponent,
    ContactComponent,
    FooterComponent
  ],
  //importing a module needs to be written in imports
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
