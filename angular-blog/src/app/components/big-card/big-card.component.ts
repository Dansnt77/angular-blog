import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BigCardComponent implements OnInit {
  photoCover:string=""
  cardTitle:string="Lançamento!! Portifólio"
  cardDescription:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolorum sed eius commodi illo provident laudantium repellendus iure eaque quaerat nisi atque nulla enim delectus, est culpa vitae voluptatum repudiandae?"

  constructor(){}

  ngOnInit(): void {

  }
}
