import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MiaField, MiaFormComponent, MiaFormConfig } from '@agencycoda/mia-form';
import { MiaPost, MiaBlogCategoryService } from '@agencycoda/mia-blog';
import { Observable } from 'rxjs';
import { MiaQuery } from '@agencycoda/mia-core';

@Component({
  selector: 'mia-post-edit-page',
  templateUrl: './mia-post-edit-page.component.html',
  styleUrls: ['./mia-post-edit-page.component.css']
})
export class MiaPostEditPageComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  @Input() showSaveButton = true;
  @Input() showTitlePage = true;
  @Input() item: MiaPost = new MiaPost();

  config!: MiaFormConfig;
  
  isLoading = false;

  constructor(
    protected categoryService: MiaBlogCategoryService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  submit(): Observable<any> {
    return this.miaForm.submit();
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
      { key: 'photo_featured', type: MiaField.TYPE_PHOTO_HEADER, label: 'Featured Photo', extra: { saveObj: true } },
      //{ key: 'photo_featured_mobile', type: MiaField.TYPE_PHOTO, label: 'Featured Photo in mobile' },
      { key: 'title', type: MiaField.TYPE_STRING_TITLE, label: 'Title', placeholder: "Your title" },
      { key: 'summary', type: MiaField.TYPE_TEXT, label: 'Summary' },
      { key: 'content', type: MiaField.TYPE_HTML, label: 'Content', extra: { height: 400 } },
      { key: 'categories', type: MiaField.TYPE_LIST_SERVICE, label: 'Categories', extra: { service: this.categoryService, field_display: 'title', field_list: 'categories-auto', query: new MiaQuery() }  },
    ];
  }
}
