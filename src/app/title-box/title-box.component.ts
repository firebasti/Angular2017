import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {
  @Input() title: string;

  @Output() titleClicked = new EventEmitter<string>();
  
  constructor() {
  }

  public titleClickedMethod() {
    this.titleClicked.emit('EventData')
  }
  

  ngOnInit() {
  }

}
