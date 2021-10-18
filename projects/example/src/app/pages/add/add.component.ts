import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaPostEditPageComponent } from 'projects/agencycoda/mia-blog-panel/src/public-api';
import { MiaPost } from 'projects/agencycoda/mia-blog/src/public-api';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @ViewChild('postEditor') postEditor!: MiaPostEditPageComponent;

  item = new MiaPost();

  constructor() { }

  ngOnInit(): void {
    this.item.title = 'test title preseted';
  }

  onClickPublish() {
    this.postEditor.submit().subscribe(result => {
      console.log(result);
    });
  }
}
