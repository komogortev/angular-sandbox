import { Component, OnInit, Output } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
  
})
export class TabsComponent implements OnInit {
  characters = [];
  
  activeList = 'all';
  swService: StarWarsService;
  
  constructor(swService: StarWarsService) {
    this.swService = swService;
    
  }

  ngOnInit() {
  }

  onChoose(side) {
      this.activeList = side;
  }
  
  getCharacters (){
    this.characters = this.swService.getCharacters(this.activeList);
    return this.characters;
  }
  
  
  
}
