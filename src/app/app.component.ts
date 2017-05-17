import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public myTitle = "Das ist mein Titel mit Marco";

  public fn($event) {
    console.log($event);
  }

}
