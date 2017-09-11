import { Component } from '@angular/core';

/*decorate (add to) imported component with additional information. #ik*/
@Component({
   /*anchor point and assets. #ik*/
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootUser = 'Default User';
  rootItemlist = ['Apples', 'Bananas', 'Cherries'];
  
  onNameChanged(newUser: string){
    this.rootUser = newUser;
  }
  onItemAdded(addedItem){
    this.rootItemlist.push(addedItem);
    console.log(this.rootItemlist);
  }
}
