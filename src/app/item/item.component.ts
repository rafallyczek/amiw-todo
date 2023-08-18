import { Component, OnInit } from '@angular/core';
import { LocalSorageService } from '../local-sorage.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  public goldenIdeas: string[] = [];
  public index: number = 0;
  public idea: string = "";

  constructor(private localStorageService: LocalSorageService) {}

  ngOnInit() {
    if(this.localStorageService.isEmpty){
      this.localStorageService.save("mysli", this.goldenIdeas);
    } else {
      this.goldenIdeas = this.localStorageService.load('mysli');
      this.index = this.goldenIdeas.length;
    }
  }

  public add() {
    if(this.idea!=""){
      this.goldenIdeas[this.index] = this.idea;
      this.saveToStorage();
      this.index++;
    }
  }

  public saveToStorage() {
    this.localStorageService.save("mysli", this.goldenIdeas);
  }

  public clear() {
    localStorage.clear();
    this.goldenIdeas = [];
    this.index = 0;
  }

  public delete(el) {
    let myslIndex = el.getAttribute('data-index');
    this.goldenIdeas.splice(myslIndex,1);
    this.saveToStorage();
    this.index--;    
  }

}
