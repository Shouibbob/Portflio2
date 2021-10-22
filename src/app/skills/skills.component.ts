import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
   Title = "Skills";

   description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nam modi fugit earum odit, veritatis aperiam aut neque magni officia accusamus, ullam officiis? Impedit voluptate tempore, blanditiis sunt dolore fugiat!
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus praesentium provident nam similique perferendis voluptate quae ipsa, fugiat dolore? Dolor corporis molestias impedit ut vitae laborum maxime, ipsum odio harum.`;

   item = [
     {
      class1 : "Html",
      class2 : "att",
      class3 : "prsin",
      body : "Html"
     },
     {
      class1 : "css",
      class2 : "att2",
      class3 : "prsin2",
      body : "css"
     },
     {
      class1 : "javascript",
      class2 : "att3",
      class3 : "prsin3",
      body : "javascript"
     },
     {
      class1 : "React",
      class2 : "att4",
      class3 : "prsin4",
      body : "React"
     },
     {
      class1 : "node_js",
      class2 : "att5",
      class3 : "prsin5",
      body : "Node js"
     },
     {
      class1 : "wordpress",
      class2 : "att6",
      class3 : "prsin6",
      body : "wordpress"
     }
   ];

   Focus = {
     T1 : "My Focus",
     T2 : "UI/UX Design",
     T3 : "Responsive Design",
     T4 : "Web Design",
     T5 : "Mobile App Design"
   };

  constructor() { }

  ngOnInit(): void {
  }

}
