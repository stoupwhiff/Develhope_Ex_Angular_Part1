import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'x-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Output() showDetail = new EventEmitter<boolean>()
  @Output() onDelete = new EventEmitter<User>()

  @Input() user!: User

  constructor() { }

  ngOnInit(): void {
  }

}
