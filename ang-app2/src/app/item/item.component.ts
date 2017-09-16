import { Component, OnInit, Input } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
  
})
export class ItemComponent implements OnInit {

  @Input() character;
   
  swService: StarWarsService;
  
  //add swService as dependency 
  constructor(swService: StarWarsService) {
    this.swService = swService;   
  
  }

  ngOnInit() {
  }
  
  onAssign(side) {
    // this.character.side = side; 
    // this.sideAssigned.emit({name: this.character.name, side: side});
     
    this.swService.onsideChosen({name: this.character.name, side: side});
  
  }

}
