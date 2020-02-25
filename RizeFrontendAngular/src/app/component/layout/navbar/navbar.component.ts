import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit() {

      document.addEventListener("scroll", (scrollevent)=> {
        if (window.pageYOffset >= 100){
          document.querySelector(".navIcons").classList.add("noPointer");
        }else{
          document.querySelector(".navIcons").classList.remove("noPointer");

        }

      })


  }

}
