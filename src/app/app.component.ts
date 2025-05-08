import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';

  theme = signal('light'); // signal to hold the current theme
  label = this.theme(); // signal to hold the label for the button

  // ngOnInit() {
  //   // this.theme.set('dark'); // set the initial theme to dark
  //   this.theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light'); // toggle the theme
  //   document.body.className = this.theme(); // set the initial theme on body
  // }


  constructor() {
    effect(() => {
      this.label = this.theme();
    });
  }

  toggleDarkMode() {
    this.theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light'); // toggle the theme
  }

}
