import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class StarWarsService {
  
  private characters = [
    {name: 'Luke', side: ''},
    {name: 'Darth', side: ''},
  ];
  private logService: LogService;
  private http: Http;
  charactersChanged = new Subject<void>();
  
  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }
  
     
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
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + charInfo.name);
  }
  
  fetchCharacters() {
    this.http.get(
      'https://swapi.co/api/people/'
    ).map((response: Response) => {
      const data = response.json(); 
      const extracterChars = data.results;
      const chars = extracterChars.map((char) => {
        return {name: char.name, side: ''};
      });
      return chars;
    }).subscribe(
      (data) => {
        this.characters = data;
        this.charactersChanged.next();
      }
    );
   
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