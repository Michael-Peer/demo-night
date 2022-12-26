import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Data, Route } from '@angular/router';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo
  @Output() onCompetedChanged = new EventEmitter<Todo>()



  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    // this.route.data.subscribe(
    // (data: Data) => {

    //   this.todo = data['todo']
    // }
    // )
  }

  onCompetedChangedHandler(ev: MatCheckboxChange) {
    this.onCompetedChanged.emit(this.todo)
  }

}
