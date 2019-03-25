import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternshipsRoutingModule } from './internships-routing.module';
import { InternshipsComponent } from '../internships/internships.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { BrowserModule } from '@angular/platform-browser';
import {
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DinternshipsComponent } from './dinternships/dinternships.component';
import { CuintershipsComponent } from './cuinterships/cuinterships.component';

@NgModule({
  declarations: [
    InternshipsComponent,
    CuintershipsComponent,
    DinternshipsComponent
  ],
  imports: [
    CommonModule,
    InternshipsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  exports: [
    InternshipsComponent
  ],
  entryComponents:[
    CuintershipsComponent,
    DinternshipsComponent
  ]
})
export class InternshipsModule { }
