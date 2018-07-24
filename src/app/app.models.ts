export interface GoogleBook{
kind?: string,
  id?: string,
  etag?: string,
  selfLink?: any,
  volumeInfo?: {
  title?: string,
    subtitle?: any,
    authors?: any[
  ],
    publisher?: string,
    publishedDate?: any,
    description?: any,
    industryIdentifiers?: [
    {
      type?: any,
      identifier?: number
    },
    {
      type?: any,
      identifier?: number
    }
  ],
    readingModes?: {
    text?: any,
      image?: any
  },
  pageCount?:any,
    printType?: any,
    categories?: [
    string
  ],
    averageRating?: any,
    ratingsCount?: any,
    maturityRating?: any,
    allowAnonLogging?: boolean,
    contentVersion?: any,
    panelizationSummary?: {
    containsEpubBubbles?: boolean,
      containsImageBubbles?: boolean,
  },
  imageLinks?: {
    smallThumbnail?: string,
      thumbnail?: string,
  },
  language?: string,
    previewLink?: string,
    infoLink?: string,
    canonicalVolumeLink?: string,
},
saleInfo?: {
  country: any,
    saleability: any,
    isEbook: boolean,
    listPrice: {
    amount: number,
      currencyCode: any
  },
  retailPrice?: {
    amount: number,
      currencyCode: any,
  },
  buyLink?: any,
    offers:[
    {
      finskyOfferType: number,
      listPrice: {
        amountInMicros: number,
        currencyCode: any
      },
      retailPrice: {
        amountInMicros: number,
        currencyCode: any
      }
    }
  ]
},
accessInfo?: {
    country: any,
    viewability: any,
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: any,
    epub: {
    isAvailable: boolean,
      acsTokenLink: any,
  },
  pdf: {
    isAvailable: any,
  },
  webReaderLink: any,
    accessViewStatus: any,
    quoteSharingAllowed: any;
},
searchInfo?: {
  textSnippet: string;
}
}
