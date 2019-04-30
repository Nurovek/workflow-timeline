import { Component, OnInit, Input } from '@angular/core';
import { IStep } from '../step';


@Component({
  selector: 'app-workflow-timeline',
  templateUrl: './workflow-timeline.component.html',
  styleUrls: ['./workflow-timeline.component.css']
})
export class WorkflowTimelineComponent implements OnInit {

  @Input() steps: Array<IStep>;
  @Input() offer: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}