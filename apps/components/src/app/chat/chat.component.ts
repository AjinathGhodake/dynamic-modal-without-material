import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  @ViewChild('list') listView;
  constructor() {}

  ngOnInit() {}
  onClickAction() {
    console.log(this.listView);
    this.listView.nativeElement.style.display = 'block';
  }
}
