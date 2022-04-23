import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiaCreatorPostConfig } from '../../entities/mia-creator-post-config';
import { map, switchMap, tap } from 'rxjs/operators';
import { MiaQuery, nil } from '@agencycoda/mia-core';
import { MiaBlogService, MiaPost } from '@agencycoda/mia-blog';
import { BoxFieldComponent, MiaField, MiaFormComponent, MiaFormConfig } from '@agencycoda/mia-form';
import { MiaLanguageService } from '@agencycoda/mia-language-core';
import { RelatedFieldComponent } from '../../fields/related-field/related-field.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'mia-creator-post-page',
  templateUrl: './mia-creator-post-page.component.html',
  styleUrls: ['./mia-creator-post-page.component.css']
})
export class MiaCreatorPostPageComponent implements OnInit {

  @ViewChild('miaForm') miaForm!: MiaFormComponent;

  config!: MiaCreatorPostConfig;

  configForm?: MiaFormConfig;
  isSending = false;

  isLoading = false;

  post = new MiaPost();

  tabs: Array<{ title: string, fields: Array<MiaField> }> = [];
  sectionSelectedIndex = 0;

  constructor(
    protected route: ActivatedRoute,
    protected navigator: Router,
    protected postService: MiaBlogService,
    protected languageService: MiaLanguageService,
    protected snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadConfig();
    this.loadParams();
  }

  processWithBaseService(item: any) {
    let serviceSave: Promise<any> = this.postService.save(item);
    serviceSave.then(result => {
      this.isSending = false;
      this.snackBar.open('Save Successful!', '', { duration: 3000 });
    }).catch(error => {
      this.isSending = false;
      this.snackBar.open('Error!', '', { duration: 3000 });
    });
  }

  save(item: any) {
    if(this.isSending){
      return;
    }

    this.isSending = true;
    this.processWithBaseService(item);
  }

  onClickSave() {
    this.miaForm.submit().subscribe(result => {
      this.save(result);
    });
  }

  onClickContinue() {
    this.sectionSelectedIndex++;
    this.onClickTab(this.tabs[this.sectionSelectedIndex], this.sectionSelectedIndex);
  }

  loadPost(postId: number) {
    this.isLoading = true;
    this.postService
    .fetchWithRelation(postId, ['relateds'])
    .pipe(tap(post => this.post = post))
    .pipe(tap(post => this.onClickTab(this.tabs[0], 0)))
    .subscribe(res => this.isLoading = false);
  }

  loadParams() {
    this.route.data
    .pipe(switchMap(params => {
      this.config = params as MiaCreatorPostConfig;
      return this.route.params;
    }))
    .pipe(map(params => params.id))
    .pipe(tap(postId => {
      if(postId == undefined){
        this.onClickTab(this.tabs[0], 0);
      }
    }))
    .pipe(nil())
    .subscribe(postId => this.loadPost(postId as number));
  }

  loadConfig() {
    this.tabs = [
      { title: 'Content', fields: [
        { key: 'title', type: MiaField.TYPE_STRING_TITLE, placeholder: 'Write your title', caption: '' },
        { key: 'photo_featured', type: MiaField.TYPE_PHOTO_HEADER, label: 'Upload image Header', caption: 'Foto del header.', extra: { saveObj: true } },
        { key: 'summary', type: MiaField.TYPE_TEXT, placeholder: 'Summary', caption: '' },
        { key: 'content', type: MiaField.TYPE_HTML, label: 'Contenido del post', caption: '', extra: { height: 600, theme: 'bubble' } },
      ] },
      { title: 'Settings', fields: [
        
        { key: 'box-seo', type: MiaField.TYPE_CUSTOM, extra: { component: BoxFieldComponent, fields: [

          { key: '', type: MiaField.TYPE_LABEL, label: '<h4>SEO</h4>', classes: 'label-form' },
          { key: '', type: MiaField.TYPE_LABEL, label: 'Lorem ipsum dolor sit amet consectetur adropising lorem ipsum dlor sit amet', classes: 'label-form' },

          { key: 'seo_title', type: MiaField.TYPE_STRING, label: 'Meta Title' },
          { key: 'seo_description', type: MiaField.TYPE_TEXT, label: 'Meta Description' },
          { key: 'seo_keywords', type: MiaField.TYPE_STRING, label: 'Meta Keywords' },

        ] }  },

        { key: 'box-related', type: MiaField.TYPE_CUSTOM, extra: { component: BoxFieldComponent, fields: [

          { key: '', type: MiaField.TYPE_LABEL, label: '<h4>Related content</h4>', classes: 'label-form' },
          { key: '', type: MiaField.TYPE_LABEL, label: 'Connect related content from your News to give readers more to explore.', classes: 'label-form' },

          { key: 'relateds', type: MiaField.TYPE_CUSTOM, label: '', extra: { component: RelatedFieldComponent } },

        ] }  },

        { key: 'box-language', type: MiaField.TYPE_CUSTOM, extra: { component: BoxFieldComponent, fields: [

          { key: '', type: MiaField.TYPE_LABEL, label: '<h4>Language</h4>', classes: 'label-form' },
          { key: '', type: MiaField.TYPE_LABEL, label: 'Select interface language', classes: 'label-form' },

          { key: 'language_id', type: MiaField.TYPE_SELECT_SERVICE, label: 'Langueage', caption: '', extra: { title: '', service: this.languageService, field_display: 'title', field_list: 'language-auto', query: new MiaQuery() } },

        ] }  },

        { key: 'box-visibility', type: MiaField.TYPE_CUSTOM, extra: { component: BoxFieldComponent, fields: [

          { key: '', type: MiaField.TYPE_LABEL, label: '<h4>Visibility</h4>', classes: 'label-form' },
          { key: '', type: MiaField.TYPE_LABEL, label: 'Loralsk adklsj adklsj lkasj asklj ad ', classes: 'label-form' },

          { key: 'visibility', type: 'select', label: 'Estado', extra: {
            options: [
              { id: MiaPost.VISIBILITY_NOT_PUBLIC, title: 'Not Public' },
              { id: MiaPost.VISIBILITY_PUBLIC, title: 'Public (default)' },
            ]
          }},

        ] }  },

      ] }
    ];
  }

  onClickTab(tab: { title: string, fields: Array<MiaField> }, index: number) {
    if(this.configForm != undefined){
      this.miaForm.updateItemByForm();
    }

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = tab.fields;
    config.service = this.postService;
    this.configForm = config;

    this.sectionSelectedIndex = index;
  }

  stopSending(){
    this.isSending = false;
  }
}
