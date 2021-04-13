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

  add(item: string) {
    this.equipment.push({part: item});
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }


  edit(equipment: object) {
    this.editEquipment.push(equipment);
  }

  save(item: string, part: object) {
    part['part'] = item;
    this.editEquipment = null;
  }

}
