import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Color, ColorsHttp } from './interfaces/colors.interface';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public colorsHttp: ColorsHttp = {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
    support: {
      url: '',
      text: ''
    }
  };
  public colors: Color[] = [];

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit() {
    this.getColors().subscribe(data => {
      this.colorsHttp = data;
      this.colors = data.data;
    });

  }

  getColors(): Observable<ColorsHttp> {
    return this.colorService.getColors();
  }

  nextPage() {

  }

  previusPage() {

  }
}
