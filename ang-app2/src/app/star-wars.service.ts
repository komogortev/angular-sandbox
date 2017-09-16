import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  private logService: LogService;
  
  constructor(logService: LogService) {
    this.logService = logService;
  }
  
  private characters = [
    {name: 'Luke', side: ''},
    {name: 'Darth', side: ''},
  ];
    
     
  getCharacters(activeList) {
    if (activeList == 'all'){
      return this.characters.slice();
    }
    
    return this.characters.filter( (char) => {
      return char.side === activeList;
    } );
  }
  
  onsideChosen(charInfo){
    const pos = this.characters.findIndex((char)=>{
      return char.name === charInfo.name; 
    });  
    
    this.characters[pos].side = charInfo.side;
    this.logService.writeLog('Changed side of ' + charInfo.name);
  }
  
  addCharacter(name, side) {
    const pos = this.characters.findIndex((char)=>{
      return char.name === name; 
    });  
    
    if (pos != -1) {
      return;
    }
    
    
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
  
}