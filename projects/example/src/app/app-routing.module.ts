import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiaCreatorPostConfig } from 'projects/agencycoda/mia-blog-panel/src/lib/entities/mia-creator-post-config';
import { MiaCreatorPostPageComponent } from 'projects/agencycoda/mia-blog-panel/src/lib/pages/mia-creator-post-page/mia-creator-post-page.component';
import { MiaPostListPageComponent } from 'projects/agencycoda/mia-blog-panel/src/public-api';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { 
    path: 'mia-blog/creator', 
    component: MiaCreatorPostPageComponent, 
    data: {
      title: 'Create new article'
    } as MiaCreatorPostConfig
  },
  { 
    path: 'mia-blog/creator/:id', 
    component: MiaCreatorPostPageComponent, 
    data: {
      title: 'Create new article'
    } as MiaCreatorPostConfig
  },
  { path: 'mia-blog/list', component: MiaPostListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
