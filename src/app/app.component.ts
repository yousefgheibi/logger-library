import { Component } from '@angular/core';
import { LoggerService } from 'logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'logger-library';
  constructor(private logger: LoggerService) {
    this.logger.log('This is a log message');
  }
}
