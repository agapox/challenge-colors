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

  copyMsg: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleColorSelected(ev: MouseEvent, color: string) {

    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = color;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showCopiedMsg();
  }

  showCopiedMsg() {
    this.copyMsg = true;
    setTimeout(() => {
      this.copyMsg = false;
    }, 1300);
  }

}
