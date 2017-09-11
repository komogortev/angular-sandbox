import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-user",
  template: `
    <input type="text" (input)="onUserInput($event)" [placeholder]="user"> <!--/*(input)=set actionlistener, $event=reserved name for event, [property]-bind proprty value. #ik*/-->
    <!--input type="text" [(ngModel)]="user" --> <!--/*[(ngModel)] - shorthand for two way action binding. *requires FormsModule. #ik*/-->
   
    <h2>< User Template: <u>{{user}}</u>></h2>
    <app-user-detail></app-user-detail>
  `
})
export class UserComponent {
  @Input() user; /*added decorator @Input converts property into a 'settable/bindable' from outside (e.g. template). *no explicit assignment reqiored at this point ( = '#ik') #ik*/ 
  @Output() nameChanged = new EventEmitter<string>(); /*ng Class allows to emit events to higher components. #ik*/
  
  /* is replaced with ng two way action binding shorthand from input.*sample in dashboard.component #ik*/
    onUserInput(event){
     this.nameChanged.emit(event.target.value); /*passing information between components. #ik*/
  }
}