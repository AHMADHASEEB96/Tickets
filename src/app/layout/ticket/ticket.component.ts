import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  curvesCount = Array.from({ length: 7 }, (_, index) => index + 1)
  ticketName: string = 'a ticket name '
  @Input() contentObj: any;
  @Input() dir: any;

  constructor(private contentService: ContentService) {
  }
  ngOnInit() {
    this.contentObj = this.contentService.getContent(localStorage.getItem(`lang`) ?? "ar")
  }

  copyText(e: any, linkEl: any, copiedEl: any) {
    const textToCopy = linkEl.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    document.execCommand('copy');

    document.body.removeChild(textarea);

    console.log(`Text "${textToCopy}" copied to the clipboard`);
    e.target.classList.add(`hidden`)
    copiedEl.classList.remove(`hidden`)
    setTimeout(() => {
      copiedEl.classList.add(`hidden`)
      e.target.classList.remove(`hidden`)
    }, 6000)

  }

  displayTooltipe(e: any) {
    const tooltip = document.querySelector(`.trash-tooltip`);
    tooltip?.classList.add("reveal")
    console.log('trash clicked')
  }

  hideTooltip() {
    document.querySelector(`.trash-tooltip`)?.classList.remove(`reveal`)
  }
}
