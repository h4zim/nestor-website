import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;
declare function sliderClients(): any;

@Component({
  selector: 'app-case-studies',
  standalone: false,
  templateUrl: './case-studies.component.html',
  styleUrls: ['../app.component.scss', './case-studies.component.scss']
})
export class CaseStudiesComponent {
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
