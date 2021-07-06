import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaPostEditPageComponent } from 'projects/agencycoda/mia-blog-panel/src/public-api';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @ViewChild('postEditor') postEditor!: MiaPostEditPageComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onClickPublish() {
    this.postEditor.submit().subscribe(result => {
      console.log(result);
    });
  }
}
