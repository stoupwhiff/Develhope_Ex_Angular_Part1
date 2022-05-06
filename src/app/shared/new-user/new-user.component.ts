import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'x-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  @Output() hideModal = new EventEmitter<void>()
  @Output() submitted = new EventEmitter<User>()

  constructor() { }

  ngOnInit(): void {
  }

  addUser(form: NgForm) {
    this.submitted.emit({...form.value})
  }

}
