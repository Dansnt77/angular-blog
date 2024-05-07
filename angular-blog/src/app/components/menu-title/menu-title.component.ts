import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  standalone: true,
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css', './menu-title.responsive.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuTitleComponent {

}
