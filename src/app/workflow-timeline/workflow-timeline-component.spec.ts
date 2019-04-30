import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { WorkflowTimelineComponent } from './workflow-timeline.component';

describe('WorkflowTimelineComponent', () => {
  let component: WorkflowTimelineComponent;
  let fixture: ComponentFixture<WorkflowTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowTimelineComponent);
    component = fixture.componentInstance;
    component.steps = []

    fixture.detectChanges();
  });

  it('displays properly', () => {
    expect(component).toBeTruthy();
  });

  it('displays with 3 steps', () => {
    // given
    component.steps = [
      {stepName: 'foo'},
      {stepName: 'bar'},
      {stepName: 'baz'},
    ]
    // ALWAYS PUT THIS
    fixture.detectChanges();
    const compiledComponent = fixture.debugElement.nativeElement;
    const steps = compiledComponent.querySelectorAll('.step-block');
    // then check there are 3 div steps
    expect(steps.length).toEqual(component.steps.length);
  });

  it('displays with 2nd step active', () => {
    // given
    component.steps = [
      {stepName: 'foo'},
      {stepName: 'bar', isActive: true},
      {stepName: 'baz'},
    ]
    // ALWAYS PUT THIS
    fixture.detectChanges();
    const compiledComponent = fixture.debugElement.nativeElement;
    const steps = compiledComponent.querySelectorAll('.step-block');
    // then check there are 3 div steps
    expect(steps[1].getAttribute('class')).toContain('active');
  });

  it('displays with 1st step finished', () => {
    // given
    component.steps = [
      {stepName: 'foo', isFinished: true},
      {stepName: 'bar'},
      {stepName: 'baz'},
    ]
    // ALWAYS PUT THIS
    fixture.detectChanges();
    const compiledComponent = fixture.debugElement.nativeElement;
    const steps = compiledComponent.querySelectorAll('.step-block');
    // then check there are 3 div steps
    expect(steps[0].getAttribute('class')).toContain('finished');
  });

  it('generates correct step numbers', () => {
    const getIndex=key=> component.steps.map((el) => el.stepName).indexOf(key);
    
    // given
    component.steps = [
      {stepName: 'foo'},
      {stepName: 'bar'},
      {stepName: 'baz'},
      {stepName: 'bard'},
    ]
    // ALWAYS PUT THIS
    fixture.detectChanges();
    const compiledComponent = fixture.debugElement.nativeElement;
    const stepNumbers = compiledComponent.querySelectorAll('.step-number');
    const stepNames = Array.from(compiledComponent.querySelectorAll('.step-name'))

    stepNames.map(step => 
      // Pour chaque étape, on vérifie que l'index du tableau+1 correspond au numéro de l'étape       
      expect(getIndex(step.textContent)+1).toEqual(parseInt(stepNumbers[getIndex(step.textContent)].textContent))
    )
  });

});