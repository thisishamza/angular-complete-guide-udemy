import { Component } from '@angular/core';

// Components are directives with a template
// Directives are intructives inside DOM
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my app';
}
