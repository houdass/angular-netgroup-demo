export class Task {
  constructor(public id: number, public title: string, public completed?: boolean) {}

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
