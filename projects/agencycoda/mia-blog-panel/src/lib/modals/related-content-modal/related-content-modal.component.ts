import { MiaBlogService, MiaPost } from '@agencycoda/mia-blog';
import { MiaPagination, MiaQuery } from '@agencycoda/mia-core';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'lib-related-content-modal',
  templateUrl: './related-content-modal.component.html',
  styleUrls: ['./related-content-modal.component.css']
})
export class RelatedContentModalComponent implements OnInit {

  selecteds = new Array<MiaPost>();

  dataItems = new MiaPagination<MiaPost>();
  query = new MiaQuery();

  isLoading = true;

  constructor(
    protected dialogRef: MatDialogRef<RelatedContentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<MiaPost>,
    protected postService: MiaBlogService,
  ) { }

  ngOnInit(): void {
    this.selecteds = [...this.data];
    this.loadItems();
  }

  onChangeSwitch(toggle: MatSlideToggleChange, post: MiaPost) {
    this.selecteds = this.selecteds.filter(p => p.id != post.id);
    if(toggle.checked){
      this.selecteds.push(post);
    }
  }

  isChecked(post: MiaPost) {
    for (const p of this.selecteds) {
      if(p.id == post.id){
        return true;
      }
    }

    return false;
  }

  onClickCancel() {
    this.dialogRef.close(this.data);
  }

  onClickContinue() {
    this.dialogRef.close(this.selecteds);
  }

  loadItems() {
    this.isLoading = true;
    this.postService.listOb(this.query).subscribe(res => this.dataItems = res);
  }
}
