import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.sass']
})
export class TrailerComponent {
  safeUrl: any;
  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<TrailerComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${data.url}`);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
