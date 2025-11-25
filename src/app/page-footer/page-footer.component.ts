import { Component, Input} from '@angular/core';
import { AppService } from '../service/app.service';

declare function initPinSpacer(): any;

@Component({
  selector: 'app-page-footer',
  standalone: false,
  templateUrl: './page-footer.component.html',
  styleUrls: ['../app.component.scss', './page-footer.component.scss']
})
export class PageFooterComponent {

  constructor(public appService: AppService) {
  }

  public ngOnInit() {
    
  }

  public ngAfterViewInit() {
  }
  
}
