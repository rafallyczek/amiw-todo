import { Injectable } from '@angular/core';

@Injectable()
export class LocalSorageService {

  public isEmpty() {
    if (localStorage.getItem('mysli') == null) {
      return true;
    }
    return false;
  }

  public save(key: string, value: string[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public load(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}
