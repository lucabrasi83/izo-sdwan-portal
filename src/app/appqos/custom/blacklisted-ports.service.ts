import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlacklistedPortsService {

  blacklist = [
              179,
              9996,
              161,
              162,
              49,
              123
  ];

  constructor() { }

  getBlacklistedPorts() {
    return this.blacklist.slice();
  }
}
