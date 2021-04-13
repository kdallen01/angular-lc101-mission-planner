import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipment: object[] = [
    {part: 'Habitat dome'},
    {part: 'Drones'},
    {part: 'Food containers'},
    {part:'Oxygen tanks'}
  ];

  editEquipment: object = null;
  inEquipment = false;

  constructor() { }

  ngOnInit() {
  }

  add(item: string) {
    for(let i = 0; i < this.equipment.length; i++) {
      if(item === this.equipment[i]['part']) {
        this.inEquipment = true;
      }
    } 
      if (!this.inEquipment) {
        this.equipment.push({part: item});
      }
      this.inEquipment = false;
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }


  edit(item: object) {
    this.editEquipment = item;
  }

  save(item: string, part: object) {
    part['part'] = item;
    this.editEquipment = null;
  }

}
