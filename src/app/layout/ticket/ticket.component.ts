import { Component, Input, OnInit } from '@angular/core';
import { ContentService } from '../../services/content/content.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit {
  //curvesCount = new Array(10);
  // or create array and map on the values to implement the array
  curvesCount = Array.from({ length: 7 }, (_, index) => index + 1)
  ticketName: string = 'a ticket name '
  @Input() contentObj: any;
  @Input() dir: any;

  constructor(private contentService: ContentService) {
  }
  ngOnInit() {
    this.contentObj = this.contentService.getContent(localStorage.getItem(`lang`) ?? "ar")
  }

  copyText(linkEl: any) {
    const textToCopy = linkEl.textContent;

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Optionally, you can provide user feedback that the text has been copied
    console.log(`Text "${textToCopy}" copied to the clipboard`);
  }
}


/* 
To copy the text content of a particular element to the clipboard, you can use the Clipboard API.
 Here's an updated version of your copyText function that copies the text to the clipboard:
This function does the following:

It creates a temporary textarea element and sets its value to the text content you want to copy.

It appends the textarea to the document body.

It selects the text inside the textarea and copies it to the clipboard using document.execCommand('copy').

It removes the temporary textarea from the document body.

Optionally, it logs a message to the console to indicate that the text has been copied.
*/