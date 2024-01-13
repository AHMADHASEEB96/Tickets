import { Component, OnInit, Input } from '@angular/core';
import { TicketsInfoService } from '../../services/tickets/tickets-info.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Input() contentObj: any;
  @Input() dir: any;

  ticketsInfo: any = []; // currently to be viewed depending on the page size;
  pageSize: number = 4;
  paginationSize: number[] = [];
  originalLength: number = 0;
  currentPage: number = 1;
  sortedBy: string = 'none';

  constructor(private ticketService: TicketsInfoService) { }
  ngOnInit() {
    this.originalLength = this.ticketService.getTicketsInfo().length
    this.ticketsInfo = this.ticketService.getTicketsInfo().splice(0, this.pageSize)
    this.resizeThePagination();
  }
  resizeThePagination(): void {
    let pagesNo = (this.originalLength % this.pageSize) == 0 ? (this.originalLength / this.pageSize) : (this.originalLength / this.pageSize) + 1;
    this.paginationSize = Array.from({ length: pagesNo }, (_, index) => index + 1) // should return a number to assign it ti number[]

  }

  getPageSize(e: any) {
    this.pageSize = e.target.value;
    this.ticketsInfo = this.ticketService.getTicketsInfo().splice(0, this.pageSize)
    this.resizeThePagination();
  }

  displayTooltipe(e: any, isMoreThanThree: boolean) {
    const tooltip = e.target.querySelector(`.custom-tooltip`);
    isMoreThanThree ? tooltip?.classList.add("reveal") : tooltip?.classList.remove("reveal")
  }

  hideTooltip() {
    document.querySelectorAll(".cinemas-tooltip").forEach(tt => {
      tt.classList.remove(`reveal`)
    })
  }
  sortType = 'as';
  sortTable() {
    this.ticketsInfo.sort((a: any, b: any) => {
      const aValue = a.ticketValue;
      const bValue = b.ticketValue;
      let result = 0;
      if (this.sortType === 'as') {
        result = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        this.sortedBy = 'as'
      } else {
        result = aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        this.sortedBy = 'des'
      }

      return result;
    });

    this.sortType = this.sortType === 'as' ? 'des' : 'as';

    console.table(this.ticketsInfo);
  }
}




