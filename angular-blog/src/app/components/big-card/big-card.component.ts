import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BigCardComponent {

}
