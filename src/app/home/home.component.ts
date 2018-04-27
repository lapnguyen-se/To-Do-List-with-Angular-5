import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
import {TodolistService} from './todolist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  itemCount: number;
  btnText = 'Add an item';
  errorMessage = '';

  goalText = '';
  goals = [];

  constructor(private todoListService: TodolistService) {
  }

  ngOnInit() {
    this.goals = this.todoListService.getGoals();
    this.itemCount = this.goals.length;
  }

  addItem() {
    if (this.goalText.length < 1) {
      this.errorMessage = 'Please add some text!';

    } else if (this.goals.indexOf(this.goalText) >= 0) {
      this.errorMessage = 'This item has been added before!';
    } else {
      this.goals.push(this.goalText);
      this.goalText = '';
      this.itemCount = this.goals.length;
    }
  }

  removeItem(index) {
    this.todoListService.removeGoal(index);
    this.goals = this.todoListService.getGoals();
    this.itemCount = this.goals.length;
    this.errorMessage = '';
  }

}
