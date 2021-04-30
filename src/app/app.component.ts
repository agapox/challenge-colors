import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Color, ColorsHttp } from './interfaces/colors.interface';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading: boolean = true;
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

  public currentPage: number = 0;
  public totalPages: number = 0;

  constructor(
    private colorService: ColorService
  ) { }

  ngOnInit() {
    this.getColors();
  }

  getColors(page?: number): void {
    page = page ? page : 1;
    this.setLoading();
    setTimeout(() => {
      this.colorService.getColors(page).subscribe(data => {
        this.currentPage = data.page;
        this.totalPages = data.total_pages;
        this.colorsHttp = data;
        this.colors = data.data;
        this.setLoading(false);
      });
    }, 600);
  }

  changePage(ev: string) {
    console.log('changePage app', ev);
    if (ev === 'next') {
      this.getColors(this.colorsHttp.page + 1)
    } else {
      this.getColors(this.colorsHttp.page - 1)
    }
  }

  setLoading(state: boolean = true) {
    this.loading = state;
  }
}
