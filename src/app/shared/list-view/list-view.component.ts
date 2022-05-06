import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'x-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  @Output() showDetail = new EventEmitter<boolean>()
  @Output() onDelete = new EventEmitter<User>()
  @Output() updated = new EventEmitter<User>()

  @Input() users!: User[]
  @Input() user!: User

  constructor() { }

  ngOnInit(): void {
  }

}
