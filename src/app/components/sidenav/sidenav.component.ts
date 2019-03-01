import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  links: Array<{ label: string; route: string }>;

  constructor() {
    this.links = [
      { route: '/home', label: 'Home' },
      { route: '/task', label: 'Task' },
      { route: '/user', label: 'User' }
    ];
  }
}
