import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private config = {
    closeButton: true,
    enableHtml: true,
    progressBar: true,
    positionClass: 'toast-bottom-right',
    timeOut: 1500
    // progressAnimation:
  };
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title, this.config);
  }
  showInfo(message: string, title: string) {
    this.toastr.info(message, title, this.config);
  }
  showError(message: string, title: string) {
    this.toastr.error(message, title, this.config);
  }
}
