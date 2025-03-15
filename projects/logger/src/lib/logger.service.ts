import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  /**
   * @description do log normal message
   * @param message 
   */
  log(message: string): void {
    console.log(message);
  }

  
  /**
   * @description do log error message
   * @param message 
   */
  error(message: string): void {
    console.error(message);
  }

  
  /**
   * @description do log warn message
   * @param message 
   */
  warn(message: string): void {
    console.warn(message);
  }
}
