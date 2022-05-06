import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'x-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Output() showDetail = new EventEmitter<boolean>()
  @Input() users!: User[]
  @Input() user!: User

  constructor() { }

  ngOnInit(): void {
  }

}
