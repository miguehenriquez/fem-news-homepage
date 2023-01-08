import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'news-homepage';

  showMenu: boolean = false;

  togglemenu() {
    this.showMenu = !this.showMenu;
  }
}
