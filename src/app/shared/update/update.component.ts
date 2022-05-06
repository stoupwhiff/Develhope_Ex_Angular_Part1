import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'x-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  @Output() hideModal = new EventEmitter<void>()
  @Output() updated = new EventEmitter<User>()

  @Input() user!: User
  constructor() { }

  ngOnInit(): void {
  }

  updateUser(form: NgForm) {
    this.updated.emit(
      {
      id: String(Math.random()),
      name: form.value.name,
      mail: form.value.mail,
      location: {
        address: form.value.address
      },
      orders: []
    })
  }
}
