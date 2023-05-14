import { Component } from '@angular/core';
import { PortService } from './services/port/port.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private portService: PortService) {
    this.portService.getPort();
  }
  title = 'carbon-angular-tutorial';
}
