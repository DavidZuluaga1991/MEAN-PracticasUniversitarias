import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MeanService } from 'src/app/services/mean.service';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public options: FormGroup;
  constructor(private fb: FormBuilder,
              // tslint:disable-next-line:variable-name
              private _mean: MeanService,
              // tslint:disable-next-line:variable-name
              private _http: HttpService,
              private router: Router,
              private notification: NotificationService) { }

  ngOnInit() {
    this.options = this.fb.group({
      user: [null, Validators.required],
      password: [null, [Validators.required]]
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.options.controls[controlName].hasError(errorName);
  }
  public sendLogin() {
    if (!this.options.valid) {
      const controls = this.options.controls;
      Object.keys(controls).forEach(el => {
        if (!controls[el].valid && !controls[el].touched) {
          controls[el].markAsTouched();
        }
      });
      return;
    }
    // console.log(this.options.value);
    this._http._post('login', this.options.value).subscribe((l: any) => {
      if (l.status) {
        this.notification.showError(l.status, 'Error de Sesion');
      } else if (l.token) {
        this._mean.loginValid(l.token);
        this.router.navigate(['welcome']);
      }
    });
  }
}
