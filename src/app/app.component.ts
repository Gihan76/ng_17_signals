import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';

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

  ngOnInit() {

    // this.theme.set('dark'); // set the initial theme to dark

    this.theme.update(currentTheme => currentTheme === 'light' ? 'dark' : 'light'); // toggle the theme

    document.body.className = this.theme(); // set the initial theme on body
  }
}
