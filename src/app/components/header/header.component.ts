import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked {

  @Output() changePageEv = new EventEmitter();
  @Input() totalPages: number = 0;
  @Input() currentPage: number = 0;
  title: string = 'Colores';
  disabledPrevBtn: boolean = true;
  disabledNextBtn: boolean = true;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  ngAfterViewChecked() {
    this.disableBtns();
    this.cdRef.detectChanges()
  }

  disableBtns() {
    this.disabledPrevBtn = true;
    this.disabledNextBtn = true;
    if (this.currentPage !== 1) {
      this.disabledPrevBtn = false;
    } else if (this.currentPage < this.totalPages) {
      this.disabledNextBtn = false;
    }
    console.log(this.currentPage)
    console.log(this.totalPages)
  }

  handleChangePage(to: ('next' | 'prev')) {
    this.disableBtns();
    this.changePageEv.emit(to);
  }

}
