import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsInfoService {

  constructor() { }
  getTicketsInfo() {
    return [
      {
        userInfo: {
          name: "أحمد محمود",
          phoneNumber: "0123456789",
          image: ''
        },

        ticketNumber: "C-101",
        ticketValue: 40,
        cinemas: ["سينما مصر", " مول العرب", " برج الأطنان", " سرايا القبة", "صيدناوي مول ", " برج العرب", " برج الأطنان"],
        personsCount: 13,
        purchasesCount: 1,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: 'assets/images/avatar1.png'
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 30,
        cinemas: ["سينما مصر", " مول العرب", " برج الأطنان", " سرايا القبة"],
        personsCount: 32,
        purchasesCount: 1,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: 'assets/images/avatar2.png'

        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 45,
        cinemas: ["سينما مصر", " مول العرب", " برج الأطنان", " سرايا القبة", "صيدناوي مول ", " برج العرب"],
        personsCount: 33,
        purchasesCount: 7,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
      {
        userInfo: {
          name: "محمد الغريب",
          phoneNumber: "0123456789",
          image: ''
        },
        phoneNumber: "0123456789",
        ticketNumber: "C-101",
        ticketValue: 54,
        cinemas: ["سينما مصر", " مول العرب", " سرايا القبة"],
        personsCount: 70,
        purchasesCount: 5,
        ticketFile: {
          fileName: "تذكرة رقم 45.pdf",
          fileType: "pdf",
          fileSize: 9,
        }
      },
    ]
  }
}
