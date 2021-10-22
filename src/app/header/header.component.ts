import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Name : string  = "Shouib Issam";

  description : string = "Web developer & designer";

  Value = "Contact us";

  constructor() { }

  ngOnInit(): void {
  }

}
