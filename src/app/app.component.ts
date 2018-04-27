import {Component} from '@angular/core';
import {TodolistService} from './home/todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodolistService]
})
export class AppComponent {
  title = 'app';
}
