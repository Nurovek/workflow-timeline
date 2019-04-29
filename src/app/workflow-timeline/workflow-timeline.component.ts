import { Component, OnInit, Input } from '@angular/core';


// TODO Step interface
// export interface Step {
//   stepNumber: number,
//   stepName: string,
//   isActive?: boolean,
//   isFinished?: boolean,

//   stepInformations?: {
//     targetProfile?: string,
//     status?: string,
//     processedBy?: string,
//     statusDate?: number
//   }
// }


@Component({
  selector: 'app-workflow-timeline',
  templateUrl: './workflow-timeline.component.html',
  styleUrls: ['./workflow-timeline.component.css']
})
export class WorkflowTimelineComponent implements OnInit {

  @Input() steps: [];
  @Input() offer: string;
  @Input() type: string;

  constructor() { }

  ngOnInit() {
  }

}