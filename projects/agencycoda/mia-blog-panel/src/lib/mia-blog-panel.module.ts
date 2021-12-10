/** Angular  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Agency Coda */
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaAuthModule } from '@agencycoda/mia-auth';
import { MiaLoadingModule } from '@agencycoda/mia-loading';
import { MiaFormModule } from '@agencycoda/mia-form';

/** Components */
import { MiaBlogPanelComponent } from './mia-blog-panel.component';
import { MiaPostEditPageComponent } from './pages/mia-post-edit-page/mia-post-edit-page.component';
import { MiaCreatorPostPageComponent } from './pages/mia-creator-post-page/mia-creator-post-page.component'

/** Libraries */
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    MiaBlogPanelComponent,
    MiaPostEditPageComponent,
    MiaCreatorPostPageComponent
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Agency Coda
    MiaCoreModule,
    MiaAuthModule,
    MiaLoadingModule,
    MiaFormModule,

    // External Libraries
    QuillModule.forRoot()
  ],
  exports: [
    // Components
    MiaBlogPanelComponent,
    MiaPostEditPageComponent,
    MiaCreatorPostPageComponent,

    // External Libraries
    QuillModule
  ]
})
export class MiaBlogPanelModule { }
