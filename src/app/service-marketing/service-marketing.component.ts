import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;
declare function sliderClients(): any;

@Component({
  selector: 'app-service-marketing',
  standalone: false,
  templateUrl: './service-marketing.component.html',
  styleUrls: ['../app.component.scss', './service-marketing.component.scss']
})
export class ServiceMarketingComponent {
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
