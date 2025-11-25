import { Component, computed, effect, inject } from '@angular/core';
import { TranslateService, _ } from "@ngx-translate/core";
import { AppService } from './service/app.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'nestor-website';
  lang = '';

    // public homeDataResult = toSignal(this.homeService.getHomeData(), { initialValue: null});
    // homeData = computed(() => this.homeDataResult());
    
  constructor(private translate: TranslateService, public appService: AppService) {
    this.translate.addLangs(['zh', 'en', 'bm']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    
    document.documentElement.style.setProperty('--theme', '#ee257c');
  }

  public ngOnInit() {
    const currentLang = this.translate.currentLang;
    this.translate.get(_('menu.home')).subscribe((res: string) => {
      if(currentLang == 'en') {
        this.lang = this.translate.instant('menu.eng');
      } else if(currentLang == 'zh') {
        this.lang = this.translate.instant('menu.chi');
      } else if(currentLang == 'bm') {
        this.lang = this.translate.instant('menu.bm');
      }
    });
    this.appService.isLoading$.subscribe(data => {
      console.log('isloading', data);
    })
    // this.homeService.getHomeData().subscribe(res => {
    //   console.log('getHomeData', res);
    //   this.homeService.homeData.next(res);
    //   this.homeService.isLoading.next(true);
    // })
  }

  setLanguage(language: string) {
    this.translate.use(language);
  }

}
