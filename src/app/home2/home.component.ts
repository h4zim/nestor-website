import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, effect, inject, Input, Signal} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppService } from '../service/app.service';
import { HomeModel } from './home.model';

declare function initSwiper(): any;

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeDataResult = toSignal(this.appService.getHomeData(), { initialValue: null});
  homeData = computed(() => this.homeDataResult());
  
  
  constructor(public appService: AppService) {
    effect(() => {
      const currentData = this.homeData();
      if(currentData?.data) {
        this.appService.isLoading.next(false);
      }
    });
  }

  public ngOnInit() {
    
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      initSwiper();
    }, 2000);
  }

  section9BackgroundImage() {
    const currentData = this.homeData();
    if(currentData) {
      return 'url(' + this.appService.apiUrl + currentData?.data.Section9Image1.url + ')';
    } 
    return '';
    
  }
  
}
