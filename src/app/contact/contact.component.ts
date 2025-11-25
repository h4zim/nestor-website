import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.scss', './contact.component.scss'],
})
export class ContactComponent {
  center: google.maps.LatLngLiteral = { lat: 3.1334125, lng: 101.6188171 };
  zoom = 16;
  markers = [
    { lat: 3.1334125, lng: 101.6188171 },
  ];
  constructor(public appService: AppService) {
  }

  public ngOnInit() {
    
  }

  public ngAfterViewInit() {
    initPinSpacer();
    // setTimeout(() => {
      
    // }, 2000);
  }
  
}
