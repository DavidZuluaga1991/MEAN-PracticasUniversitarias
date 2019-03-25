import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from './../../../models/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeanService } from './../../../services/mean.service';
import { HttpService } from './../../../services/http.service';
import { Router } from '@angular/router';
import { NotificationService } from './../../../services/notification.service';

@Component({
  selector: 'app-cuuser',
  templateUrl: './cuuser.component.html',
  styleUrls: ['./cuuser.component.css']
})
export class CuuserComponent implements OnInit {
  public options: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CuuserComponent>,
    private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private _mean: MeanService,
    // tslint:disable-next-line:variable-name
    private _http: HttpService,
    private router: Router,
    private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data?: User
  ) {}

  ngOnInit() {
    this.options = this.fb.group({
      name: [ !this.data ? null : this.data.name, Validators.required],
      lastname: [ !this.data ? null : this.data.lastname, Validators.required],
      code: [ !this.data ? null : this.data.code, Validators.required],
      program: [ !this.data ? null : this.data.program, Validators.required],
      user: [ !this.data ? null : this.data.user, Validators.required],
      password: [ !this.data ? null : this.data.password, [Validators.required]],
      isadmin:  !this.data ? false : this.data.isadmin
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.options.controls[controlName].hasError(errorName);
  }
  public sendUser() {
    if (!this.options.valid) {
      const controls = this.options.controls;
      Object.keys(controls).forEach(el => {
        if (!controls[el].valid && !controls[el].touched) {
          controls[el].markAsTouched();
        }
      });
      return;
    }
    if (this.data) {
      this._http._put('users/' + this.data._id, this.options.value).subscribe((l: any) => {
        this.notification.showSuccess(l.status, 'Usuario');
        this.dialogRef.close();
      });
    } else {
      this._http._post('users', this.options.value).subscribe((l: any) => {
        this.notification.showSuccess(l.status, 'Crear Usuario');
        this.dialogRef.close();
      });
    }
  }
}
