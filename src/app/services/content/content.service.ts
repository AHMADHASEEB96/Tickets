import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }
  getContent(lang: string) {
    if (lang == 'ar') {
      return {
        header: {
          title: "تذكرة رقم #2342",
          edit: "تعديل",
        },
        chart: {
          headerTitle: "إحصائيات إستخدام القسيمة",
          headerDateFrom: "05 يوليو , 2023",
          headerDateTo: "05 أغسطس , 2023",
          periodOption: "سنويا",
        },

        ticketBody: {
          ticketTitle: "عرض التذكرة الخاصة بالفيلم",
          ticketNote: "فعال حتي 15 يوليو 2023",
          ticketOffer: "خصم",
          ticketSharing: "مشاركة",
        },
        searchBar: {
          searchBarTitle: "مبيعات التذاكر",
          searchFor: "بحث عن ...",
          isActive: "مفعلة",
          bookNew: "حجز تذكرة جديدة",
        },
        table: {
          tableUser: "المستخدم",
          ticketNumber: "رقم التذكرة",
          ticketValue: "قيمة التذكرة",
          cinemas: "السينمات",
          personsCount: "عدد الأشخاص",
          purchasesCount: "عدد مرات الشراء",
          ticketFile: "التذكرة",
          once: 'مرة واحدة',
          aTicketNumber: "تذكرة رقم 45.pdf",
          show: "عرض",
          outOf: "من اصل",
        }
      }
    } else {
      return {
        header: {
          title: " Ticket number #2342",
          edit: "Edit",
        },
        chart: {
          headerTitle: "Ticket usage statics",
          headerDateFrom: "Jul 05, 2023",
          headerDateTo: "August 05, 2023",
          periodOption: "Yearly",
        },
        ticketBody: {
          ticketTitle: " Show ticket for this movie",
          ticketNote: "Active until July 15, 2023",
          ticketOffer: "Offer",
          ticketSharing: "Send",
        },
        searchBar: {
          searchBarTitle: "Tickets Sales",
          searchFor: 'Search for...',
          isActive: "Active",
          bookNew: "Book a new ticket",
        },
        table: {
          tableUser: "User",
          ticketNumber: "Ticket Number",
          ticketValue: "Ticket Value",
          cinemas: "Cinemas",
          personsCount: "Persons Count",
          purchasesCount: "Purchases Count",
          ticketFile: "Ticket",
          once: "One time",
          aTicketNumber: "Ticket number 45.pdf",
          show: "Show",
          outOf: "Out Of",
        }
      }
    }
  }
}
