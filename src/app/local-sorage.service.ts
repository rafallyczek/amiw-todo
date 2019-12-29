import { Injectable } from '@angular/core';

@Injectable()
export class LocalSorageService {

  constructor() { }

  public save(key: string, value: string){
    localStorage.setItem(key, value);
  }

  public load(key: string){
    return localStorage.getItem(key);
  }

}
