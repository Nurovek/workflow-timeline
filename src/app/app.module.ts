import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WorkflowTimelineComponent } from './workflow-timeline/workflow-timeline.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, WorkflowTimelineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
