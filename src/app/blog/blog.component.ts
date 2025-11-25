import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrls: ['../app.component.scss', './blog.component.scss']
})
export class BlogComponent {
  constructor(public appService: AppService) {
  }

  public ngOnInit() {
    
  }

  public ngAfterViewInit() {
    // initPinSpacer();
    // setTimeout(() => {
      
    // }, 2000);
  }
  
}
