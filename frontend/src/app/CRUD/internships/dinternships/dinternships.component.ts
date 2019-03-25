import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationService } from './../../../services/notification.service';
import { HttpService } from './../../../services/http.service';
import { Internships } from './../../../models/internships';
import { MeanService } from 'src/app/services/mean.service';
import { AllUsersInternships } from 'src/app/models/usersinternships';

@Component({
  selector: 'app-dinternships',
  templateUrl: './dinternships.component.html',
  styleUrls: ['./dinternships.component.css']
})
export class DinternshipsComponent implements OnInit {
  public isAplicate = false;
  public result = '';
  constructor(public dialogRef: MatDialogRef<DinternshipsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Internships,
              private toastr: NotificationService,
              private http: HttpService,
              public mean: MeanService) { }

  ngOnInit() {
    if (this.mean.getRole() === 'estudiante') {
      this.mean.getUI().forEach(el => {
        if (this.data._id === el.internships) {
          this.toastr.showInfo('Ya aplico a esta vacante', 'Atención');
          this.isAplicate = true;
        }
      });
    }
  }
  onNoClick(): void {
    this.toastr.showInfo('No se Elimino la Pasantía', 'No de Elimino la Pasantía');
    this.dialogRef.close();
  }
  deleteInternships() {
    const url = 'internships/' + this.data._id;
    this.http._del(url).subscribe((res: any) => {
      this.result = res.status;
      this.toastr.showSuccess(res.status, 'Pasantía');
      this.dialogRef.close();
    });
  }
  aplicateInternships() {
    const url = 'ui';
    this.http._post(url, { internships: this.data._id, users: this.mean.getId() }).subscribe((res: any) => {
      console.log(res);
      this.result = res.status;
      this.toastr.showSuccess(res.status, 'Se aplicó Pasantía');
      this.dialogRef.close();
    });
  }
}
