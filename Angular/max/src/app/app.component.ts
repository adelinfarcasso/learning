// import la component
import { Component } from '@angular/core';

// definirea componentului
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})

// export la component
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  name = 'Gord';
}
