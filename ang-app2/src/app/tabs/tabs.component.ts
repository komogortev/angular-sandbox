import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Output() characters = [
    {name: 'Luke', side: ''},
    {name: 'Darth', side: ''},
    ];

  activeList = 'all';
  
  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
      this.activeList = side;
  }
  
  getCharacters() {
    if (this.activeList == 'all'){
      return this.characters.slice();
    }
    
    return this.characters.filter( (char) => {
      return char.side === this.activeList;
    } );
  }
  
  onsideChosen(charInfo){
    const pos = this.characters.findIndex((char)=>{
      return char.name === charInfo.name; 
    });  
    
    this.characters[pos].side = charInfo.side;
  }
  
}
