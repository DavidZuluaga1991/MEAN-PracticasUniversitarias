import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: '*********************',
      libraries: ['*********']
    }),
  ],
  providers: [
    GoogleMapsAPIWrapper
  ]
})
export class WelcomeModule { }
