import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   href = "../../assets/shoueb cv.pdf";

   Value = "Download Cv";

   description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus corporis reprehenderit, debitis tenetur, nobis dolorem modi dolores error aperiam illo et laudantium eos maiores. Sint iusto natus odio aperiam delectus?";

   Title = "About Me";
  constructor() { }

  ngOnInit(): void {
  }

}
