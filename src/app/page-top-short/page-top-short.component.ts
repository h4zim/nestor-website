import { Component, Input} from '@angular/core';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;

@Component({
  selector: 'app-page-top-short',
  standalone: false,
  templateUrl: './page-top-short.component.html',
  styleUrls: ['../app.component.scss', './page-top-short.component.scss']
})
export class PageTopShortComponent {
  
  @Input() title: string;
  @Input() subtitle: string;

  constructor(public appService: AppService) {
  }

  public ngOnInit() {
    
  }

  public ngAfterViewInit() {
  }
  
}
