import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private matDialogRef: MatDialogRef<TestComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  public close() {
    this.matDialogRef.close();
  }

  public submit(data) {
    this.matDialogRef.close();
    console.warn('Your order has been submitted', data);
  }

}
