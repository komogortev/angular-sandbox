import { Component } from "@angular/core";

@Component({
  selector: "app-dboard",
  template: `
    <h2>< DashBoard Template: <u>{{dboard}}</u></h2>
    <p [textContent]="loadState"></p>
   <p><input type="text" [(ngModel)]="loadState">
      <button (click)="onClick('finished')">Press to finish loading</button>
    </p>
  `
})
export class DashboardComponent {
  dboard = "some settings";
  loadState = "loadState: loading";
  
  onClick(value) {
    this.loadState = `loadState: ${value}`;
  }
}