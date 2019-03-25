import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from './../../../models/users';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-duser',
  templateUrl: './duser.component.html',
  styleUrls: ['./duser.component.css']
})
export class DuserComponent implements OnInit {
  public result = '';
  constructor(public dialogRef: MatDialogRef<DuserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: User,
              private toastr: NotificationService,
              private http: HttpService) { }

  ngOnInit() { }
  onNoClick(): void {
    this.toastr.showInfo('No de Elimino el Usuario', 'No de Elimino el Usuario');
    this.dialogRef.close();
  }
  deleteUser() {
    const url = 'users/' + this.data._id;
    this.http._del(url).subscribe((res: any) => {
      this.result = res.status;
      this.dialogRef.close();
    });
  }
}
