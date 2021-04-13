import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   
   choosenExperiments: string[] = [];
   inactive: boolean = false;

   constructor() { }

   ngOnInit() { }

   addExperiment(experiment) {
     this.choosenExperiments.push(experiment);
   }

   removeExperiment(test) {
     this.choosenExperiments.splice(this.choosenExperiments.indexOf(test),1);
     this.inactive = false;
   }

}
