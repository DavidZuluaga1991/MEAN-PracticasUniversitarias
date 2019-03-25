import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { HttpService } from '../../services/http.service';
import { User } from 'src/app/models/users';
import { CuuserComponent } from './cuuser/cuuser.component';
import { DuserComponent } from './duser/duser.component';
import { MeanService } from 'src/app/services/mean.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'lastname', 'code', 'isadmin', 'actions'];
  dataSource: MatTableDataSource<User>;
  private us: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpService,
              public dialog: MatDialog,
              public mean: MeanService
              ) {
    this.users();
  }

  private users() {
    this.http._get('users').subscribe((users: User[]) => {
      // console.log(users);
      this.us = users;
      this.getUser(users);
    });
  }
  private getUser(users: User[]) {
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  public actions( user?: User, del?: boolean ): void {
    let dialogRef: any;
    if (del) {
      dialogRef = this.dialog.open(DuserComponent, {
        width: '280px',
        data: user
      });
    } else {
      dialogRef = this.dialog.open(CuuserComponent, {
        width: '450px',
        data: user
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      this.users();
    });
  }
}
