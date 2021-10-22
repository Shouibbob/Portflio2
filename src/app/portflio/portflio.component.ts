import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portflio',
  templateUrl: './portflio.component.html',
  styleUrls: ['./portflio.component.css']
})
export class PortflioComponent implements OnInit {

  item = [
    {
       Class1 : "card text-white bg-secondary mb-3 dit",
       Class2 : "Class2",
       Class3 : "card-body child",
       Class4 : "card-title",
       Title : "WEB DESIGN"
    },
    {
      Class1 : "card text-white bg-dark mb-3 dit",
       Class2 : "max-width: 18rem;",
       Class3 : "card-body child",
       Class4 : "card-title",
       Title : "MOBILE DESIGN"
    },
    {
      Class1 : "card text-white bg-secondary mb-3 dit",
       Class2 : "max-width: 18rem;",
       Class3 : "card-body child",
       Class4 : "card-title",
       Title : "LOGO DESIGN"
    }
  ];

  item2 = [
    {
      Class1 : "card text-white bg-dark mb-3 dit",
       Class2 : "max-width: 18rem;",
       Class3 : "card-body child",
       Class4 : "card-title",
       Title : "WEB APPLICATION DEVELOPMENT"
    },
    {
      Class1 : "card text-white bg-secondary mb-3 dit",
       Class2 : "max-width: 18rem;",
       Class3 : "card-body child",
       Class4 : "card-title",
       Title : "MOBILE APPLICATION DEVELOPMENT"
    },
    {
      Class1 : "card text-white bg-dark mb-3 dit",
       Class2 : "max-width: 18rem;",
       Class3 : "card-body child",
       Class4 : "card-title",
       Title : "PWA DEVELOPMENT"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
