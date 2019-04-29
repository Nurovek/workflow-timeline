import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-workflow-timeline',
  templateUrl: './workflow-timeline.component.html',
  styleUrls: ['./workflow-timeline.component.css']
})
export class WorkflowTimelineComponent implements OnInit {

  @Input() steps: any[];

  constructor() { }

  ngOnInit() {
  }

}