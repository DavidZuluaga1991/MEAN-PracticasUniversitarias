import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from './../../../models/users';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeanService } from './../../../services/mean.service';
import { HttpService } from './../../../services/http.service';
import { Router } from '@angular/router';
import { NotificationService } from './../../../services/notification.service';
import { Internships } from 'src/app/models/internships';

@Component({
  selector: 'app-cuinterships',
  templateUrl: './cuinterships.component.html',
  styleUrls: ['./cuinterships.component.css']
})
export class CuintershipsComponent implements OnInit {
  public options: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CuintershipsComponent>,
    private fb: FormBuilder,
    // tslint:disable-next-line:variable-name
    private _http: HttpService,
    private notification: NotificationService,
    @Inject(MAT_DIALOG_DATA) public data?: Internships
  ) {}
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  ngOnInit() {
    this.options = this.fb.group({
      namecompany: [ !this.data ? null : this.data.namecompany, Validators.required],
      code: [ !this.data ? null : this.data.code, Validators.required],
      sede: [ !this.data ? null : this.data.sede, Validators.required],
      datefrom: [ !this.data ? null : this.data.datefrom, Validators.required],
      dateto: [ !this.data ? null : this.data.dateto, Validators.required],
      requirements: [ !this.data ? null : this.data.requirements ],
      programs: [ !this.data ? null : this.data.programs ],
      photography: [ !this.data ? null : this.data.photography ],
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.options.controls[controlName].hasError(errorName);
  }
  public sendInternship() {
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
      this._http._put('internships/' + this.data._id, this.options.value).subscribe((l: any) => {
        this.notification.showSuccess(l.status, 'Pasantía');
        this.dialogRef.close();
      });
    } else {
      this._http._post('internships', this.options.value).subscribe((l: any) => {
        this.notification.showSuccess(l.status, 'Crear Pasantía');
        this.dialogRef.close();
      });
    }
  }
}
