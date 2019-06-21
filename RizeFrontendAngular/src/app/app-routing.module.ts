import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './component/products/products.component';
import {ProductItemComponent} from './component/product-item/product-item.component';
import {AboutComponent} from './component/pages/about/about.component';
import {ContactComponent} from './component/pages/contact/contact.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent}


]
@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
