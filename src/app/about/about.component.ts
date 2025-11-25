import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['../app.component.scss', './about.component.scss']
})
export class AboutComponent {
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
