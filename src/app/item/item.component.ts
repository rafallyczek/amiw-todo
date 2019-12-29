import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goldenIdeas = localStorage.getItem('mysli') ? JSON.parse(localStorage.getItem('mysli')) : [];
  public index: number = localStorage.getItem('mysli') ? this.goldenIdeas.length : 0;
  public idea: string ="";

  public add(){
    if(this.idea!=""){
      this.goldenIdeas[this.index] = this.idea;
      this.saveToStorage();
      this.index++;
    }
  }

  public saveToStorage(){
    localStorage.setItem("mysli",JSON.stringify(this.goldenIdeas));
  }

  public clear(){
    localStorage.clear();
    this.goldenIdeas = [];
  }

  public delete(el){
    let myslIndex = el.getAttribute('data-index');
    this.goldenIdeas.splice(myslIndex,1);
    this.saveToStorage();
    this.index--;    
  }

}
