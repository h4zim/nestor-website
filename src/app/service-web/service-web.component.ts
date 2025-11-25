import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;
declare function sliderClients(): any;

@Component({
  selector: 'app-service-web',
  standalone: false,
  templateUrl: './service-web.component.html',
  styleUrls: ['../app.component.scss', './service-web.component.scss']
})
export class ServiceWebComponent {
  constructor(public appService: AppService) {
  }

  public ngOnInit() {
    
  }

  public ngAfterViewInit() {
    
    setTimeout(() => {
      initPinSpacer();
      sliderClients();
    }, 500);
  }
  
}
