import { Component } from '@angular/core';
//below is a decorator, which is meta data for the component
@Component({
  //selector is used as the html element name in the html files as the component name
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (){
  }


}
