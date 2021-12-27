/** Angular  */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** Angular Material */
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/** Libraries */
import { QuillModule } from 'ngx-quill';

/** Agency Coda */
import { MiaCoreModule } from '@agencycoda/mia-core';
import { MiaAuthModule } from '@agencycoda/mia-auth';
import { MiaLoadingModule } from '@agencycoda/mia-loading';
import { MiaFormModule } from '@agencycoda/mia-form';
import { MiaLayoutModule } from '@agencycoda/mia-layout';

/** Components */
import { MiaPostEditPageComponent } from './pages/mia-post-edit-page/mia-post-edit-page.component';
import { MiaCreatorPostPageComponent } from './pages/mia-creator-post-page/mia-creator-post-page.component'

/** Pages */
import { MiaPostListPageComponent } from './pages/mia-post-list-page/mia-post-list-page.component';

/** Fields */
import { RelatedFieldComponent } from './fields/related-field/related-field.component';

/** Modals */
import { RelatedContentModalComponent } from './modals/related-content-modal/related-content-modal.component';










@NgModule({
  declarations: [
    MiaPostEditPageComponent,
    MiaCreatorPostPageComponent,
    RelatedFieldComponent,
    RelatedContentModalComponent,
    MiaPostListPageComponent
  ],
  imports: [
    // Angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Material
    MatDialogModule,
    MatIconModule,
    MatSlideToggleModule,

    // Agency Coda
    MiaCoreModule,
    MiaAuthModule,
    MiaLoadingModule,
    MiaFormModule,
    MiaLayoutModule,

    // External Libraries
    QuillModule.forRoot()
  ],
  exports: [
    // Components
    MiaPostEditPageComponent,
    MiaCreatorPostPageComponent,
    RelatedContentModalComponent,

    // Pages
    MiaPostListPageComponent,

    // External Libraries
    QuillModule
  ]
})
export class MiaBlogPanelModule { }
