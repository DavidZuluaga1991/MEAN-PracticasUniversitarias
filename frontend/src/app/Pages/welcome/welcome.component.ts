import { Component, OnInit } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { Internships } from 'src/app/models/internships';
import { MeanService } from 'src/app/services/mean.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {

  // latitude = -28.68352;
  // longitude = -147.20785;
  mapType = "roadmap";
  // tslint:disable-next-line:member-ordering
  lat = 3.4297146;
  // tslint:disable-next-line:member-ordering
  lng = -76.53032289999999;
  zoom = 13;
  selectedMarker;
  markers = [];
  constructor(private http: HttpService, public mean: MeanService, private toastr: NotificationService) {
    this.http._get('internships').subscribe((i: Internships[]) => {
      console.log(i);
      i.forEach(el => {
        const j = el.sede.split(',');
        this.addMarker(el, Number.parseFloat(j[0]), Number.parseFloat(j[1]));
      });
    });
  }
  aplicateInternships(id: string) {
    // console.log(id);
    const url = 'ui';
    this.http._post(url, { internships: id, users: this.mean.getId() }).subscribe((res: any) => {
      // console.log(res);
      this.toastr.showSuccess(res.status, 'Se aplicó Pasantía');
    });
  }
  ngOnInit() {}

  addMarker(inter: Internships, lat: number, lng: number) {
    this.markers.push({ inter, lat, lng, alpha: 1 });
  }

  max(coordType: "lat" | "lng"): number {
    return Math.max(...this.markers.map(marker => marker[coordType]));
  }

  min(coordType: "lat" | "lng"): number {
    return Math.min(...this.markers.map(marker => marker[coordType]));
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
    // console.log(this.selectedMarker);
  }
}
