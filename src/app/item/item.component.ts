import { Component, OnInit } from '@angular/core';
import { LocalSorageService } from '../local-sorage.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  constructor(private localStorageService: LocalSorageService) { }

  ngOnInit() {
  }

  public goldenIdeas = this.localStorageService.load('mysli') ? JSON.parse(this.localStorageService.load('mysli')) : [];
  public index: number = this.localStorageService.load('mysli') ? this.goldenIdeas.length : 0;
  public idea: string ="";

  public add(){
    if(this.idea!=""){
      this.goldenIdeas[this.index] = this.idea;
      this.saveToStorage();
      this.index++;
    }
  }

  public saveToStorage(){
    this.localStorageService.save("mysli",JSON.stringify(this.goldenIdeas));
  }

  public clear(){
    localStorage.clear();
    this.goldenIdeas = [];
    this.index = 0;
  }

  public delete(el){
    let myslIndex = el.getAttribute('data-index');
    this.goldenIdeas.splice(myslIndex,1);
    this.saveToStorage();
    this.index--;    
  }

}
