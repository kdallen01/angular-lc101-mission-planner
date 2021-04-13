import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experiments: object[] = [
    {experiment:"Mars soil sample"},
    {experiment: "Plant growth in habitat"},
    {experiment: "Human bone density"}
  ];
  
  editExperiment: object = null;
  inExperiment: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  add(test: string) {
    for(let i = 0; i < this.experiments.length; i++) {
      if(test === this.experiments[i]['experiment']) {
        this.inExperiment = true;
      }
    }
    if(!this.inExperiment) {
      this.experiments.push({experiment: test});
    }
    this.inExperiment = false;
  }

  remove(test: object) {
    let index = this.experiments.indexOf(test);
    this.experiments.splice(index, 1);
  }

  edit(test: object) {
    this.editExperiment = test;
  }

  save(test: string, exam: object) {
    exam['experiment'] = test;
    this.editExperiment = null;
  }
}
