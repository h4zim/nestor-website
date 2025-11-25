import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PageHeaderModule } from './page-header/page-header.module';
import { BlogComponent } from './blog/blog.component';
import { PageTopShortModule } from './page-top-short/page-top-short.module';
import { FaqComponent } from './faq/faq.component';
import { PageFooterModule } from './page-footer/page-footer.module';
import { AboutComponent } from './about/about.component';
import { ServiceWebComponent } from './service-web/service-web.component';
import { ContactComponent } from './contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ServiceContentComponent } from './service-content/service-content.component';
import { ServiceMarketingComponent } from './service-marketing/service-marketing.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    FaqComponent,
    ContactComponent,
    ServiceWebComponent,
    ServiceContentComponent,
    ServiceMarketingComponent,
    CaseStudiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AsyncPipe,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      },
      defaultLanguage: 'en',
  }),
    PageHeaderModule,
    PageTopShortModule,
    PageFooterModule,
    GoogleMapsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }