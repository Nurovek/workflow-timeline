import { Component } from '@angular/core';
import { IStep } from './step';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  myArray: Array<IStep> = [
    {stepName: 'Création', isFinished: true}, 
    {stepName: 'Validation', isActive: true}, 
    {stepName: 'Finalisation'},
    {stepName: 'Youpi'},
  ]
}
