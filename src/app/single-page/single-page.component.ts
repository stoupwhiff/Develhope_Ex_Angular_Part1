import { Component, OnInit } from '@angular/core';
import { USERS } from '../models/mock-data';
import { User } from '../models/user';

@Component({
  selector: 'x-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  users = USERS
  selected: string = 'list-view'
  modal: boolean = false
  detail: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  add(user: User) {
    this.users.push(
    {
        ...user
    }
    )
  }

  remove(user: User) {
    this.users = this.users.filter(el => el.id != user.id)
  }

}
