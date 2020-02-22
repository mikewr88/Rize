import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {

      var navpiece = document.querySelector(".nav-piece2");
      document.addEventListener("scroll", (scrollevent)=> {

        if (window.scrollY <= 100){
          navpiece.style.top = (100 - window.scrollY) + "px";
        }else{
          navpiece.style.top = "0px";

        }
      })


  }

}
