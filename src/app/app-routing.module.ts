import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { ServiceWebComponent } from './service-web/service-web.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceContentComponent } from './service-content/service-content.component';
import { ServiceMarketingComponent } from './service-marketing/service-marketing.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

const routes: Routes = [ 
      {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'About Us page',
      },
      {
        path: 'services',
        component: ServicesComponent,
        title: 'Services page',
      },
      {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog page',
      },
      {
        path: 'faq',
        component: FaqComponent,
        title: 'Faq page',
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'Contact page',
      },
      {
        path: 'service-web',
        component: ServiceWebComponent,
        title: 'Web & App page',
      },
      {
        path: 'service-content',
        component: ServiceContentComponent,
        title: 'Creative Content page',
      },
      {
        path: 'service-marketing',
        component: ServiceMarketingComponent,
        title: 'Digital Marketing page',
      },
      {
        path: 'case-studies',
        component: CaseStudiesComponent,
        title: 'Case Study page',
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
