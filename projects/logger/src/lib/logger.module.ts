import { NgModule } from '@angular/core';
import { LoggerComponent } from './logger.component';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [LoggerComponent],
  imports: [],
  exports: [LoggerComponent],
  providers: [LoggerService],
})
export class LoggerModule {}
