import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public pageEvent = new EventEmitter();
  constructor() { }

  setPageChange(a) {
    this.pageEvent.emit(a);
  }

  getPageChange() {
    return this.pageEvent;
  }
  
}
