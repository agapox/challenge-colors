import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/interfaces/colors.interface';

@Component({
  selector: 'app-color-card',
  templateUrl: './color-card.component.html',
  styleUrls: ['./color-card.component.scss']
})
export class ColorCardComponent implements OnInit {

  @Input() color: Color = {
    id: 0,
    name: '',
    year: 0,
    color: '',
    pantone_value: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
