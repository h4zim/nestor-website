import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from '../service/app.service';

declare function initSwiperServices(): any;

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  constructor(public appService: AppService) {
  }

  public ngOnInit() {
    this.appService.isLoading.next(false);
    
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      initSwiperServices();
    }, 1000);
  }
  
}
