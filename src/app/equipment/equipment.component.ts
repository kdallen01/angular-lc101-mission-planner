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

  editEquipment: object[] = null;

  constructor() { }

  ngOnInit() {
  }

  add(part: string) {
    this.equipment.push({part: part});
  }

  remove(part: object) {
    let index = this.equipment.indexOf(part);
    this.equipment.splice(index, 1);
  }


  edit(equipment: object) {
    this.editEquipment = equipment;
  }

}
