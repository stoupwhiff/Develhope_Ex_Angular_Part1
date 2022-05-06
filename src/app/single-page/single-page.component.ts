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
  selected: string = 'card-view'
  modal: boolean = false
  detail: boolean = false
  update: boolean = false
  selectedUser!: User

  constructor() { }

  ngOnInit(): void {
  }

  add(user: User) {
    this.users.push(user)
  }

  remove(user: User) {
    this.users = this.users.filter(el => el.id != user.id)
  }

  updateUser(user: User) {  
    let i = this.users.indexOf(this.selectedUser)
    this.users[i] = JSON.parse(JSON.stringify(user)) 
  }

}
