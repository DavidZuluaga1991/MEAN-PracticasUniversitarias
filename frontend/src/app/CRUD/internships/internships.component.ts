import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource, MatDialog} from '@angular/material';
import { HttpService } from '../../services/http.service';
import { Internships } from 'src/app/models/internships';
import { MeanService } from 'src/app/services/mean.service';
import { DinternshipsComponent } from './dinternships/dinternships.component';
import { CuintershipsComponent } from './cuinterships/cuinterships.component';

@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.css']
})
export class InternshipsComponent implements OnInit {
  displayedColumns: string[] = [ 'namecompany', 'code', 'datefrom', 'dateto', 'actions'];
  dataSource: MatTableDataSource<Internships>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpService,
              public dialog: MatDialog,
              public mean: MeanService
              ) {
    this.internships();
  }

  private internships() {
    this.http._get('internships').subscribe((inter: Internships[]) => {
      this.getInternships(inter);
    });
  }
  private getInternships(inter: Internships[]) {
    this.dataSource = new MatTableDataSource(inter);
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
  public actions( inter?: Internships, del?: boolean ): void {
    let dialogRef: any;
    if (del) {
      dialogRef = this.dialog.open(DinternshipsComponent, {
        width: '450px',
        data: inter
      });
    } else {
      dialogRef = this.dialog.open(CuintershipsComponent, {
        width: '500px',
        data: inter
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      this.internships();
    });
  }
}
