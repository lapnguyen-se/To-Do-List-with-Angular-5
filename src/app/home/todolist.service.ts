export class TodolistService {
  private goals = ['Make new friends', 'Eat healthier', 'Drink less coffee'];

  getGoals() {
    return this.goals;
  }

  removeGoal(index) {
    this.goals.splice(index, 1);
  }
}
