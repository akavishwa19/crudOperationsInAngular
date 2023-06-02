import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {DialogueComponent} from "./dialogue/dialogue.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crudop';

  constructor(private dialog:MatDialog) {
  }


  openDialog() {
    this.dialog.open(DialogueComponent, {
      width:'30%',
      height:'80%'
    });
  }
}
