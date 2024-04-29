import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SmallCardComponent {

}
