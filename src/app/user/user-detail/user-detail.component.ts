import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
  id: number;
  canEdit: string;
  fragment: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // this.id = +this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
    this.canEdit = this.route.snapshot.queryParamMap.get('allowEdit');
    this.fragment = this.route.snapshot.fragment;
  }
}
