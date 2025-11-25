import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrls: ['../app.component.scss', './faq.component.scss']
})
export class FaqComponent {
  
  constructor(public appService: AppService) {
    effect(() => {
    });
  }

  public ngOnInit() {
    
  }

  public ngAfterViewInit() {
    initPinSpacer();
    // setTimeout(() => {
      
    // }, 2000);
  }
  
}
