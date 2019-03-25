import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventHandlerService {
  @Output() change:EventEmitter<Object> = new EventEmitter();
  @Output() sideMenuEvent:EventEmitter<Object> = new EventEmitter();
  constructor() { }
  sideMenuHandler(event){
    this.sideMenuEvent.emit(event);
  }
}
