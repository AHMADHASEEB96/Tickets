import { Component, OnInit } from '@angular/core';
import { ContentService } from './services/content/content.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tickets';
  dir: string = "rtl";
  content: any;
  constructor(private contentService: ContentService) {
  }
  ngOnInit(): void {
    // Get General Content 
    this.getContentByLang();
    this.dir = localStorage.getItem('direction') ?? 'rtl';

  }
  getContentByLang(): void {
    this.content = this.contentService.getContent(localStorage.getItem(`lang`) ?? "ar")
  }
  changeLang($e?: any) {
    localStorage.setItem("lang", `${$e.target?.dataset.lang}`)
    let lang = localStorage.getItem(`lang`) ?? 'ar';
    // store direction
    localStorage.setItem("direction", lang == "ar" ? "rtl" : "ltr")
    this.dir = localStorage.getItem('direction') ?? 'rtl';
    this.getContentByLang();
  }

  toggle(e: any, ball: any) {
    ball.classList.toggle(`toggler-active`)
  }

}
