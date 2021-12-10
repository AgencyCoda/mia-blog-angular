import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MiaCreatorPostConfig } from '../../entities/mia-creator-post-config';
import { map, switchMap, tap } from 'rxjs/operators';
import { nil } from '@agencycoda/mia-core';
import { MiaBlogService, MiaPost } from '@agencycoda/mia-blog';
import { MiaField } from '@agencycoda/mia-form';

@Component({
  selector: 'mia-creator-post-page',
  templateUrl: './mia-creator-post-page.component.html',
  styleUrls: ['./mia-creator-post-page.component.css']
})
export class MiaCreatorPostPageComponent implements OnInit {

  config!: MiaCreatorPostConfig;

  isLoading = false;

  post = new MiaPost();

  tabs: Array<{ title: string, fields: Array<MiaField> }> = [];
  sectionSelectedIndex = 0;

  constructor(
    protected route: ActivatedRoute,
    protected navigator: Router,
    protected postService: MiaBlogService
  ) { }

  ngOnInit(): void {
    this.loadConfig();
    this.loadParams();
  }

  loadPost(postId: number) {
    this.isLoading = true;
    this.postService
    .fetchOb(postId)
    .pipe(tap(post => this.post = post))
    .subscribe(res => this.isLoading = false);
  }

  loadParams() {
    this.route.data
    .pipe(switchMap(params => {
      this.config = params as MiaCreatorPostConfig;
      return this.route.params;
    }))
    .pipe(map(params => params.id))
    .pipe(nil())
    .subscribe(postId => this.loadPost(postId));
  }

  loadConfig() {
    this.tabs = [
      { title: 'General', fields: [
        { key: 'firstname', type: 'string', label: 'Nombre' },
        { key: 'lastname', type: 'string', label: 'Apellido' },
      ] },
      { title: 'SEO', fields: [
        { key: 'photo', type: MiaField.TYPE_PHOTO, label: 'Photo', caption: 'Foto del usuario.' },
      ] },
      { title: 'Advanced', fields: [
        { key: 'email', type: MiaField.TYPE_EMAIL, label: 'Email' },
      ] },
    ];
  }

  onClickTab(tab: { title: string, fields: Array<MiaField> }, index: number) {
    /*if(this.configForm != undefined){
      this.miaForm.updateItemByForm();
    }

    let config = new MiaFormConfig();
    config.hasSubmit = false;
    config.fields = tab.fields;
    config.service = this.data.service;
    this.configForm = config;*/

    this.sectionSelectedIndex = index;
  }
}
