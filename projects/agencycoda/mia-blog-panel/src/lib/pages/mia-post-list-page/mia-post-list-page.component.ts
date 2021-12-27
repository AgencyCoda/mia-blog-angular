import { MiaBlogService, MiaPost } from '@agencycoda/mia-blog';
import { MiaField, MiaFormConfig } from '@agencycoda/mia-form';
import { MiaColumn } from '@agencycoda/mia-table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MiaPageCrudComponent, MiaPageCrudConfig } from '@agencycoda/mia-layout';
import { Router } from '@angular/router';
import { nil } from '@agencycoda/mia-core';

@Component({
  selector: 'lib-mia-post-list-page',
  templateUrl: './mia-post-list-page.component.html',
  styleUrls: ['./mia-post-list-page.component.css']
})
export class MiaPostListPageComponent implements OnInit {

  @ViewChild('pageComp') pageComp!: MiaPageCrudComponent;

  config = new MiaPageCrudConfig();

  constructor(
    protected postService: MiaBlogService,
    protected navigator: Router
  ) { }

  ngOnInit(): void {
    this.loadConfig();
  }

  onSearch(text: string) {
    this.config.tableConfig.query.resetWhere();
    if(text.length > 2){
      this.config.tableConfig.query.addWhereLikes(['title'], text);
    }
    this.pageComp.loadItems();
  }

  onAction(action: {key: string; item: any;}) {
    if(action.key == 'add'){
      this.navigator.navigateByUrl('/mia-blog/creator/');
    } else if (action.key == 'search') {
      this.onSearch(action.item);
    } else if(action.key == 'edit'){
      this.navigator.navigateByUrl('/mia-blog/creator/' + action.item.id);
    } else if(action.key == 'remove'){
      this.pageComp.onClickRemove(action.item);
    }
  }

  loadTableConfig() {
    this.config.tableConfig.query.addWith('creator');

    this.config.tableConfig.loadingColor = 'black';
    this.config.tableConfig.hasEmptyScreen = false;
    this.config.tableConfig.service = this.postService;
    this.config.tableConfig.columns = [
      { key: 'id', type: 'string', title: '#', field_key: 'id' },
      { key: 'photo', type: 'photo', title: 'Miniature', field_key: ['photo_featured', 'url'] },
      { key: 'title', type: 'string', title: 'Title', field_key: 'title' },
      { key: 'user', type: 'user', title: 'Submitted By', extra: { 
        field_firstname: ['creator', 'firstname'], field_lastname: ['creator', 'lastname']
      } },
      { key: 'updated_at', type: 'date', title: 'Last Update', field_key: 'updated_at' },
      { key: 'visibility', type: 'icon-toggle', title: '', field_key: 'status', extra: {
        key_action: 'click-lock',
        options: [
          { value: 0, color: '#333', icon: 'visibility-off' },
          { value: 1, color: 'blue', icon: 'visibility' },
        ]
      } },
      { key: 'more', type: 'more', title: '', extra: {
        actions: [
          { icon: 'create', title: 'Editar', key: 'edit' },
          { icon: 'delete', title: 'Borrar', key: 'remove' },
        ]
      } }
    ];
  }

  loadConfig() {
    this.config.title = 'News';

    this.config.buttons.push({ key: 'organize', title: 'Organize', icon: 'edit' });
    this.config.buttons.push({ key: 'add', title: '+ Add new Article', icon: 'edit' });

    this.loadTableConfig();
  }
}
