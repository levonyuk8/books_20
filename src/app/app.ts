import {Component} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [MatGridListModule, RouterOutlet, MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
