import { MiaBaseFieldComponent, MiaField } from '@agencycoda/mia-form';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { RelatedContentModalComponent } from '../../modals/related-content-modal/related-content-modal.component';

@Component({
  selector: 'lib-related-field',
  templateUrl: './related-field.component.html',
  styleUrls: ['./related-field.component.css']
})
export class RelatedFieldComponent extends MiaBaseFieldComponent implements OnInit {

  constructor(
    protected dialog: MatDialog,
    protected changeDetector: ChangeDetectorRef
  ) {
    super();
  }

  onClickAdd() {
    this.dialog.open(RelatedContentModalComponent, {
      data: this.input.value
    })
    .afterClosed()
    .pipe(tap(result => this.input.setValue(result)))
    .subscribe(result => this.changeDetector.detectChanges());
  }

  createFormControl() {
    // Create Control
    this.input = new FormControl();
    this.input.setValue([]);
    // Add in Group
    this.group.addControl(this.field.key, this.input);
}

  static updateValuesByItem(group: FormGroup, item: any, field: MiaField) {
    group.get(field.key)?.setValue(item[field.key]);
  }

  static updateItemByFormField(group: FormGroup, item: any, field: MiaField) {
    item[field.key] = group.get(field.key)?.value != undefined ? group.get(field.key)?.value : [];
  }
}