import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaField, MiaFormComponent, MiaFormConfig } from '@agencycoda/mia-form';
import { MiaPost } from '@agencycoda/mia-blog';

@Component({
  selector: 'mia-post-edit-page',
  templateUrl: './mia-post-edit-page.component.html',
  styleUrls: ['./mia-post-edit-page.component.css']
})
export class MiaPostEditPageComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  config!: MiaFormConfig;
  item: MiaPost = new MiaPost();
  isLoading = false;

  constructor() { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onClickSave() {
    this.miaForm.submit().subscribe(result => {
      console.log('click save');
      console.log(result);
    });
  }

  loadConfig() {
    this.config = new MiaFormConfig();
    this.config.hasSubmit = false;
    this.config.fields = [
      { key: 'photo_featured', type: MiaField.TYPE_PHOTO, label: 'Featured Photo' },
      { key: 'photo_featured_mobile', type: MiaField.TYPE_PHOTO, label: 'Featured Photo in mobile' },
      { key: 'title', type: MiaField.TYPE_STRING, label: 'Title' },
      { key: 'summary', type: MiaField.TYPE_TEXT, label: 'Summary' },
      { key: 'content', type: MiaField.TYPE_HTML, label: 'Content', extra: { height: 400 } },
    ];
  }
}
