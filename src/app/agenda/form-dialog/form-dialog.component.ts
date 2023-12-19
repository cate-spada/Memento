import { Component, OnInit, Inject  } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.css']
})
export class FormDialogComponent implements OnInit {

  agendaId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<FormDialogComponent>,
    private router: Router,
    private route: ActivatedRoute) {
     this.agendaId = data.this;

    }

  async ngOnInit() {

    console.log(this.agendaId);
  }

  crea(){
    this.router.navigate(["/form-evento",{
      idagenda: this.agendaId,
      titleform: 'Crea nuovo evento'}]);
  }

}
