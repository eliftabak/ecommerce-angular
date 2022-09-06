import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  subject = new Subject()

  constructor() { }

  sendUpdate(product:any) {
    this.subject.next(product);
  }

  getUpdate() {
    return this.subject.asObservable()
  }
}
