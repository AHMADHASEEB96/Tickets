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

  ticketsInfo: any = [];
  pageSize: number = 4;
  originalLength: number = 0;
  currentPage: number = 1;
  sortedBy: string = 'none';

  constructor(private ticketService: TicketsInfoService) { }
  ngOnInit() {
    this.originalLength = this.ticketsInfo = this.ticketService.getTicketsInfo().length
    this.ticketsInfo = this.ticketService.getTicketsInfo().splice(0, this.pageSize)
    console.log(this.ticketsInfo)
  }

  getPageSize(e: any) {
    this.pageSize = e.target.value;
    this.ticketsInfo = this.ticketService.getTicketsInfo().splice(0, this.pageSize)
  }

  displayTooltipe(e: any, isMoreThanThree: boolean) {
    const tooltip = e.target.querySelector(`.cinemas-tooltip`);
    isMoreThanThree ? tooltip?.classList.add("reveal") : tooltip?.classList.remove("reveal")
  }

  hideTooltip() {
    document.querySelectorAll(".cinemas-tooltip").forEach(tt => {
      tt.classList.remove(`reveal`)
    })
  }
  // first set the default sorting type to Ascending
  sortType = 'as';
  // call the function when button is clicked
  sortTable() {
    // sort the array of objects
    this.ticketsInfo.sort((a: any, b: any) => {
      // get the properties from the object those used to sort
      const aValue = a.ticketValue;
      const bValue = b.ticketValue;
      // set a default value for the sorting result
      let result = 0;
      // is sorting ascending
      if (this.sortType === 'as') {
        // if the first value is less than the second then make the first comes before the second  by returning -1 ( no changes happen ) otherwise if the first one is greater than the second
        // then make the first comes after the second, finally if both are equal make no changes
        result = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        this.sortedBy = 'as'
      } else {
        // if descending do the opposite
        result = aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
        this.sortedBy = 'des'
      }

      return result;
    });

    // Toggle the sortType after sorting
    this.sortType = this.sortType === 'as' ? 'des' : 'as';

    console.table(this.ticketsInfo);
  }
}

/* It seems like the sort method takes a reference from the object thats why we don't have to update the object by the version results in from sorting  
1: Indicates that the first element should be placed after the second element in the sorted order.
-1: Indicates that the first element should be placed before the second element in the sorted order.
0: Indicates that the order of the two elements remains unchanged.
*/

