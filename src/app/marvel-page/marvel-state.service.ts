import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, of } from 'rxjs';
import { concatMap, delay, flatMap, switchMap } from 'rxjs/operators';
import { HttpClientService } from '../http-client.service';

const SummaryAnchor = {
  left: 410,
  top: 2,
  width: 111,
  height: 74,
  defaultLeft: 410,
  defaultTop: 2,
  defaultWidth: 111,
  defaultHeight: 74,
  route: '/marvel/payments-list',
  name: 'SUMMARY_ANCHOR'
};

const CancelPayment = {
  left: 426,
  top: 1973,
  width: 173,
  height: 94,
  defaultLeft: 426,
  defaultTop: 1973,
  defaultWidth: 173,
  defaultHeight: 94,
  name: 'CANCEL_PAYMENT_ANCHOR',
  route: '/marvel/payment-list'
};

const SearchAnchor = {
  left: 333,
  top: 0,
  width: 84,
  height: 78,
  defaultLeft: 333,
  defaultTop: 0,
  defaultWidth: 84,
  defaultHeight: 78,
  name: 'to-search',
  route: '/marvel/search'
};


enum MarvelPageName {
  PAYMENTS_LIST = 'payments-list',
  LOGIN_WITH_PASSWORD = 'login-with-password',
  LOGIN = 'login',
  COMPANIES_SELECT = 'companies-select',
  SEARCH_P = 'search-p',
  SEARCH_PRO = 'search-pro',
  SEARCH = 'search',
  FOR_SIGN_FILTER = 'for-sign-filter',
  SELECT_USD = 'select-usd',
  PAYMENT_INFORMATION = 'payment-information',
  PAYMENT_INFORMATION_2500 = 'payment-information-2500',
  TYPE_OF_PAYMENT = 'type-of-payment',
  NEW_PAYMENT = 'new-payment',
  CORRECT_PAYMENT = 'correct-payment',
  ACCOUNT_SELECT = 'account-select'
}

@Injectable({
  providedIn: 'root'
})
export class MarvelStateService {
  getPayment = () => {
    return this.httpClient.createTransaction(`
      Payer: MyMainCompany LTD (FTD12345678901009)
      Type of payment: tepegraphic transfer
      Amount: 2.500
      Currency: SGD
      Details of payment: Invoice No: P2019482, Invoice Date: 01.11.2019
      Processing date: 07.01.2020
      Commission: 100,00 USD
      Source of payment of commission: 129986198769
      Beneficiary's name: ProDigit LTD
      Beneficiary's address: 4 Ann Siang hill, 3 rd Floor Singapore 069786
      Beneficiary's Account/IBAN: FT12345678901009
      Beneficiary's Bank Swift: OCBCSGGXXX
      Beneficiary's Bank Name: OVERSEA-CHINESE BANKING CORPORATION
      Beneficiary's Bank address: 4 Ann Siang Hill, 3 rd Floor Singapore 069789
      Country: SG
    `)
      .pipe(
        switchMap((x: any) => {
          // console.log('xxx', x);
          return interval(2000).pipe(
            switchMap(() => {
              return this.httpClient.getTransaction(x.answer.transaction_created.transaction_id);
            })
          );
        })
      );
  }

  auth = () => {
    return this.httpClient.createTransaction(`
      login: ${'DemoLogin'}
      password: ${'Password is correct'}
      time: ${new Date()}
      userAgent: ${window.navigator.userAgent}
      navigatorLang: ${window.navigator.language}
    `)
      .pipe(
        switchMap((x: any) => {
          // console.log('xxx', x);
          return interval(2000).pipe(
            switchMap(() => {
              return this.httpClient.getTransaction(x.answer.transaction_created.transaction_id);
            })
          );
        })
      );
  };

  Pages = [{
    name: MarvelPageName.LOGIN,
    url: 'assets/images/login.png',
    width: 1920,
    height: 1024,
    anchors: [{
      left: 1322,
      top: 285,
      width: 566,
      height: 189,
      defaultLeft: 1322,
      defaultTop: 285,
      defaultWidth: 566,
      defaultHeight: 189,
      name: 'enter-creds',
      route: '/marvel/login-with-password'
    }]
  }, {
    name: MarvelPageName.LOGIN_WITH_PASSWORD,
    url: 'assets/images/login-with-creds.png',
    width: 1920,
    height: 1024,
    anchors: [{
      left: 1270,
      top: 611,
      width: 202,
      height: 85,
      defaultLeft: 1270,
      defaultTop: 611,
      defaultWidth: 202,
      defaultHeight: 85,
      name: 'select-company-close',
      action: this.auth,
      route: '/marvel/payments-list'
    }]
  }, {
    name: MarvelPageName.COMPANIES_SELECT,
    url: 'assets/images/companies-select.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 1524,
      top: 106,
      defaultLeft: 1524,
      defaultTop: 106,
      width: 321,
      height: 67,
      defaultWidth: 321,
      defaultHeight: 67,
      name: 'select-company-close',
      route: '/marvel/payments-list'
    },{
      left: 333,
      top: 0,
      width: 84,
      height: 78,
      defaultLeft: 333,
      defaultTop: 0,
      defaultWidth: 84,
      defaultHeight: 78,
      name: 'to-search',
      route: '/marvel/search'
    }, {
      left: 300,
      top: 748,
      width: 1278,
      height: 118,
      defaultLeft: 300,
      defaultTop: 748,
      defaultWidth: 1278,
      defaultHeight: 118,
      name: 'select-payment',
      route: '/marvel/payment-information-2500'
    }, {
      left: 1078,
      top: 318,
      width: 177,
      height: 68,
      defaultLeft: 1078,
      defaultTop: 318,
      defaultWidth: 177,
      defaultHeight: 68,
      name: 'for-sign-filter',
      route: '/marvel/for-sign-filter'
    }, {
      left: 309,
      top: 623,
      width: 1256,
      height: 117,
      defaultLeft: 309,
      defaultTop: 623,
      defaultWidth: 1256,
      defaultHeight: 117,
      name: 'payment-information',
      route: '/marvel/payment-information',
      // action: this.getPayment
    }, {
      left: 699,
      top: 112,
      width: 162,
      height: 67,
      defaultLeft: 699,
      defaultTop: 112,
      defaultWidth: 162,
      defaultHeight: 67,
      name: 'payment-information',
      route: '/marvel/select-usd',
    }, SummaryAnchor, SearchAnchor]
  }, {
    name: MarvelPageName.SEARCH_P,
    url: 'assets/images/search-p.png',
    anchors: [{
      left: 326,
      top: 87,
      width: 172,
      height: 63,
      defaultLeft: 326,
      defaultTop: 87,
      defaultWidth: 172,
      defaultHeight: 63,
      name: 'search-pro',
      route: '/marvel/search-pro'
    }, {
      left: 1523,
      top: 184,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 184,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'new-payment',
      route: '/marvel/new-payment',
    }, SummaryAnchor, SearchAnchor]
  }, {
    name: MarvelPageName.SEARCH_PRO,
    url: 'assets/images/search-pro.png',
    anchors: [SummaryAnchor, SearchAnchor, {
      left: 1523,
      top: 184,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 184,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'new-payment',
      route: '/marvel/new-payment',
    }, {
      left: 280,
      top: 269,
      width: 1227,
      height: 120,
      defaultLeft: 280,
      defaultTop: 269,
      defaultWidth: 1227,
      defaultHeight: 120,
      name: 'payment-information-search-2500',
      route: '/marvel/payment-information-search-2500'
    }]
  }, {
    name: 'payment-information-search-2500',
    url: 'assets/images/payment-information-search-2500.png',
    anchors: [SummaryAnchor, SearchAnchor, {
      left: 1523,
      top: 184,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 184,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'new-payment',
      route: '/marvel/new-payment',
    }, {
      left: 1523,
      top: 386,
      width: 340,
      height: 71,
      defaultLeft: 1523,
      defaultTop: 386,
      defaultWidth: 340,
      defaultHeight: 71,
      name: 'correct_payment',
      route: `/marvel/${MarvelPageName.CORRECT_PAYMENT}`
    }]
  }, {
    name: MarvelPageName.SEARCH,
    url: 'assets/images/search.png',
    width: 1920,
    height: 1207,
    anchors: [SummaryAnchor, SearchAnchor, {
      left: 327,
      top: 90,
      width: 159,
      height: 66,
      defaultLeft: 327,
      defaultTop: 90,
      defaultWidth: 159,
      defaultHeight: 66,
      name: 'search-p',
      route: '/marvel/search-p'
    }, {
      left: 300,
      top: 829,
      width: 1278,
      height: 118,
      defaultLeft: 300,
      defaultTop: 829,
      defaultWidth: 1278,
      defaultHeight: 118,
      name: 'select-payment',
      route: '/marvel/payment-information-2500'
    }, {
      left: 1078,
      top: 399,
      width: 177,
      height: 68,
      defaultLeft: 1078,
      defaultTop: 399,
      defaultWidth: 177,
      defaultHeight: 68,
      name: 'for-sign-filter',
      route: '/marvel/for-sign-filter'
    }, {
      left: 1524,
      defaultLeft: 1524,
      defaultTop: 191,
      top: 191,
      width: 321,
      height: 67,
      defaultWidth: 321,
      defaultHeight: 67,
      name: 'select-company-open',
      route: '/marvel/companies-select'
    }, {
      left: 309,
      top: 705,
      width: 1256,
      height: 117,
      defaultLeft: 309,
      defaultTop: 705,
      defaultWidth: 1256,
      defaultHeight: 117,
      name: 'payment-information',
      route: '/marvel/payment-information'
    }, {
      left: 699,
      top: 181,
      width: 162,
      height: 67,
      defaultLeft: 699,
      defaultTop: 181,
      defaultWidth: 162,
      defaultHeight: 67,
      name: 'payment-information',
      route: '/marvel/select-usd',
    }, {
      left: 1523,
      top: 286,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 286,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'new-payment',
      route: '/marvel/new-payment',
    }]
  }, {
    name: MarvelPageName.PAYMENTS_LIST,
    url: 'assets/images/payments-list.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 333,
      top: 0,
      width: 84,
      height: 78,
      defaultLeft: 333,
      defaultTop: 0,
      defaultWidth: 84,
      defaultHeight: 78,
      name: 'to-search',
      route: '/marvel/search'
    }, {
      left: 300,
      top: 748,
      width: 1278,
      height: 118,
      defaultLeft: 300,
      defaultTop: 748,
      defaultWidth: 1278,
      defaultHeight: 118,
      name: 'select-payment',
      route: '/marvel/payment-information-2500'
    }, {
      left: 1078,
      top: 318,
      width: 177,
      height: 68,
      defaultLeft: 1078,
      defaultTop: 318,
      defaultWidth: 177,
      defaultHeight: 68,
      name: 'for-sign-filter',
      route: '/marvel/for-sign-filter'
    }, {
      left: 1524,
      defaultLeft: 1524,
      defaultTop: 106,
      top: 106,
      width: 321,
      height: 67,
      defaultWidth: 321,
      defaultHeight: 67,
      name: 'select-company-open',
      route: '/marvel/companies-select'
    }, {
      left: 309,
      top: 623,
      width: 1256,
      height: 117,
      defaultLeft: 309,
      defaultTop: 623,
      defaultWidth: 1256,
      defaultHeight: 117,
      name: 'payment-information',
      route: '/marvel/payment-information'
    }, {
      left: 699,
      top: 112,
      width: 162,
      height: 67,
      defaultLeft: 699,
      defaultTop: 112,
      defaultWidth: 162,
      defaultHeight: 67,
      name: 'payment-information',
      route: '/marvel/select-usd',
    }, {
      left: 1523,
      top: 205,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 205,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'payment-information',
      route: '/marvel/new-payment',
    }]
  }, {
    name: MarvelPageName.FOR_SIGN_FILTER,
    url: 'assets/images/for-sign.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 593,
      top: 318,
      width: 58,
      height: 57,
      defaultLeft: 593,
      defaultTop: 318,
      defaultWidth: 58,
      defaultHeight: 57,
      route: '/marvel/payments-list'
    }, SummaryAnchor, SearchAnchor, {
      left: 1523,
      top: 205,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 205,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'new-payment',
      route: '/marvel/new-payment',
    }, {
      left: 298,
      top: 613,
      width: 1232,
      height: 112,
      defaultLeft: 298,
      defaultTop: 613,
      defaultWidth: 1232,
      defaultHeight: 112,
      name: 'payment-information',
      route: '/marvel/payment-information',
    }]
  }, {
    name: MarvelPageName.SELECT_USD,
    url: 'assets/images/select-usd.png',
    width: 1920,
    height: 1207,
    anchors: [SummaryAnchor, {
      left: 699,
      top: 112,
      width: 162,
      height: 67,
      defaultLeft: 699,
      defaultTop: 112,
      defaultWidth: 162,
      defaultHeight: 67,
      name: 'payment-information',
      route: '/marvel/payments-list',
    }, SearchAnchor, {
      left: 300,
      top: 748,
      width: 1278,
      height: 118,
      defaultLeft: 300,
      defaultTop: 748,
      defaultWidth: 1278,
      defaultHeight: 118,
      name: 'select-payment',
      route: '/marvel/payment-information-2500'
    }, {
      left: 1078,
      top: 318,
      width: 177,
      height: 68,
      defaultLeft: 1078,
      defaultTop: 318,
      defaultWidth: 177,
      defaultHeight: 68,
      name: 'for-sign-filter',
      route: '/marvel/for-sign-filter'
    }, {
      left: 1524,
      defaultLeft: 1524,
      defaultTop: 106,
      top: 106,
      width: 321,
      height: 67,
      defaultWidth: 321,
      defaultHeight: 67,
      name: 'select-company-open',
      route: '/marvel/companies-select'
    }, {
      left: 309,
      top: 623,
      width: 1256,
      height: 117,
      defaultLeft: 309,
      defaultTop: 623,
      defaultWidth: 1256,
      defaultHeight: 117,
      name: 'payment-information',
      route: '/marvel/payment-information',
    }, {
      left: 1523,
      top: 205,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 205,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'payment-information',
      route: '/marvel/new-payment',
    }]
  }, {
    name: MarvelPageName.PAYMENT_INFORMATION,
    url: 'assets/images/payment-information.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 1523,
      top: 115,
      width: 252,
      height: 88,
      defaultLeft: 1523,
      defaultTop: 115,
      defaultWidth: 252,
      defaultHeight: 88,
      name: 'authorised',
      route: '/marvel/payments-list-after-authorised'
    }, {
      left: 411,
      top: 3,
      width: 121,
      height: 78,
      defaultLeft: 411,
      defaultTop: 3,
      defaultWidth: 121,
      defaultHeight: 78,
      name: 'payment-list',
      route: '/marvel/payments-list'
    }, {
      left: 261,
      top: 110,
      width: 1252,
      height: 113,
      defaultLeft: 261,
      defaultTop: 110,
      defaultWidth: 1252,
      defaultHeight: 113,
      name: 'payment-list',
      route: '/marvel/payments-list'
    }]
  }, {
    name: 'payments-list-after-authorised',
    width: 1920,
    height: 1207,
    url: 'assets/images/payments-list-after-authorised.png', anchors: [{
      left: 333,
      top: 0,
      width: 84,
      height: 78,
      defaultLeft: 333,
      defaultTop: 0,
      defaultWidth: 84,
      defaultHeight: 78,
      name: 'to-search',
      route: '/marvel/search'
    }, {
      left: 300,
      top: 748,
      width: 1278,
      height: 118,
      defaultLeft: 300,
      defaultTop: 748,
      defaultWidth: 1278,
      defaultHeight: 118,
      name: 'select-payment',
      route: '/marvel/payment-information-2500'
    }, {
      left: 1078,
      top: 318,
      width: 177,
      height: 68,
      defaultLeft: 1078,
      defaultTop: 318,
      defaultWidth: 177,
      defaultHeight: 68,
      name: 'for-sign-filter',
      route: '/marvel/for-sign-filter'
    }, {
      left: 1524,
      defaultLeft: 1524,
      defaultTop: 106,
      top: 106,
      width: 321,
      height: 67,
      defaultWidth: 321,
      defaultHeight: 67,
      name: 'select-company-open',
      route: '/marvel/companies-select'
    }, {
      left: 699,
      top: 112,
      width: 162,
      height: 67,
      defaultLeft: 699,
      defaultTop: 112,
      defaultWidth: 162,
      defaultHeight: 67,
      name: 'payment-information',
      route: '/marvel/select-usd',
    }, {
      left: 1523,
      top: 205,
      width: 246,
      height: 80,
      defaultLeft: 1523,
      defaultTop: 205,
      defaultWidth: 246,
      defaultHeight: 80,
      name: 'payment-information',
      route: '/marvel/new-payment',
    }]
  }, {
    name: MarvelPageName.PAYMENT_INFORMATION_2500,
    url: 'assets/images/payment-information-2500.png',
    width: 1920,
    height: 1207,
    anchors: [SummaryAnchor, SearchAnchor, {
      left: 411,
      top: 3,
      width: 121,
      height: 78,
      defaultLeft: 411,
      defaultTop: 3,
      defaultWidth: 121,
      defaultHeight: 78,
      name: 'payment-list',
      route: '/marvel/payments-list'
    }, {
      left: 1530,
      top: 203,
      width: 317,
      height: 72,
      defaultLeft: 1530,
      defaultTop: 203,
      defaultWidth: 317,
      defaultHeight: 72,
      name: 'correct-payment',
      route: `/marvel/${MarvelPageName.CORRECT_PAYMENT}`
    }, {
      left: 261,
      top: 110,
      width: 1252,
      height: 113,
      defaultLeft: 261,
      defaultTop: 110,
      defaultWidth: 1252,
      defaultHeight: 113,
      name: 'payment-list',
      route: '/marvel/payments-list'
    }]
  }, {
    name: MarvelPageName.NEW_PAYMENT,
    url: 'assets/images/new-payment.png',
    width: 1920,
    height: 2143,
    anchors: [SummaryAnchor, SearchAnchor, {
      left: 425,
      top: 590,
      width: 517,
      height: 98,
      defaultLeft: 425,
      defaultTop: 590,
      defaultWidth: 517,
      defaultHeight: 98,
      name: 'type-of-payment',
      route: '/marvel/type-of-payment'
    }, CancelPayment]
  }, {
    name: MarvelPageName.TYPE_OF_PAYMENT,
    url: 'assets/images/type-of-payment.png',
    width: 1920,
    height: 2143,
    anchors: [SummaryAnchor, SearchAnchor, {
      left: 425,
      top: 590,
      width: 517,
      height: 98,
      defaultLeft: 425,
      defaultTop: 590,
      defaultWidth: 517,
      defaultHeight: 98,
      route: '/marvel/new-payment'
    }, {
      left: 428,
      top: 945,
      width: 515,
      height: 74,
      defaultLeft: 428,
      defaultTop: 945,
      defaultWidth: 515,
      defaultHeight: 74,
      route: '/marvel/account-select'
    }, CancelPayment]
  }, {
    name: MarvelPageName.ACCOUNT_SELECT,
    url: 'assets/images/account-select.png',
    width: 1920,
    height: 2143,
    anchors: [
      SearchAnchor,
      {
        left: 426,
        top: 812,
        width: 517,
        height: 101,
        defaultLeft: 426,
        defaultTop: 812,
        defaultWidth: 517,
        defaultHeight: 101,
        route: '/marvel/correct-payment'
      }, CancelPayment
    ]
  }, {
    name: MarvelPageName.CORRECT_PAYMENT,
    url: 'assets/images/correct-payment.png',
    width: 1920,
    height: 2143,
    anchors: [
      CancelPayment,
      SearchAnchor,
      {
        left: 1324,
        top: 1979,
        width: 173,
        height: 83,
        defaultLeft: 1324,
        defaultTop: 1979,
        defaultWidth: 173,
        defaultHeight: 83,
        action: this.getPayment,
        route: '/marvel/payments-list-after-authorised'
      }, SummaryAnchor
    ]
  }, {
    name: 'select-bank',
    url: 'assets/images/new-payment-select-bank.png',
    width: 1920,
    height: 1207,
    anchors: [SearchAnchor, {
      left: 430,
      top: 974,
      width: 1062,
      height: 66,
      defaultLeft: 430,
      defaultTop: 974,
      defaultWidth: 1062,
      defaultHeight: 66,
      route: '/marvel/new-payment-selected-bank'
    }, {
      left: 1098,
      top: 751,
      width: 148,
      height: 87,
      defaultLeft: 1098,
      defaultTop: 751,
      defaultWidth: 148,
      defaultHeight: 87,
      name: 'payment cancel',
      route: '/marvel/payments-list'
    }]
  }, {
    name: 'new-payment-selected-bank',
    url: 'assets/images/new-payment-selected-bank.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 1088,
      top: 748,
      width: 167,
      height: 86,
      defaultLeft: 1088,
      defaultTop: 748,
      defaultWidth: 167,
      defaultHeight: 86,
      name: 'payment cancel',
      route: '/marvel/payments-list'
    }, {
      left: 1270,
      top: 747,
      width: 224,
      height: 87,
      defaultLeft: 1270,
      defaultTop: 747,
      defaultWidth: 224,
      defaultHeight: 87,
      name: 'payment whom',
      route: '/marvel/to-whom'
    }, {
      left: 411,
      top: 3,
      width: 121,
      height: 78,
      defaultLeft: 411,
      defaultTop: 3,
      defaultWidth: 121,
      defaultHeight: 78,
      name: 'top menu summ',
      route: '/marvel/payments-list'
    }]
  }, {
    name: 'to-whom',
    url: 'assets/images/to-whom.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 425,
      top: 427,
      width: 1067,
      height: 260,
      defaultLeft: 425,
      defaultTop: 427,
      defaultWidth: 1067,
      defaultHeight: 260,
      route: '/marvel/writed-whom',
    }, {
      left: 423,
      top: 719,
      width: 231,
      height: 86,
      defaultLeft: 423,
      defaultTop: 719,
      defaultWidth: 231,
      defaultHeight: 86,
      name: 'back',
      route: '/marvel/new-payment-selected-bank'
    }, {
      left: 1087,
      top: 721,
      width: 160,
      height: 85,
      defaultLeft: 1087,
      defaultTop: 721,
      defaultWidth: 160,
      defaultHeight: 85,
      name: 'return from',
      route: '/marvel/payments-list'
    }]
  }, {
    name: 'writed-whom',
    url: 'assets/images/writed-whom.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 423,
      top: 719,
      width: 231,
      height: 86,
      defaultLeft: 423,
      defaultTop: 719,
      defaultWidth: 231,
      defaultHeight: 86,
      name: 'back',
      route: '/marvel/new-payment-selected-bank'
    }, {
      left: 1087,
      top: 721,
      width: 160,
      height: 85,
      defaultLeft: 1087,
      defaultTop: 721,
      defaultWidth: 160,
      defaultHeight: 85,
      name: 'return from',
      route: '/marvel/payments-list'
    }, {
      left: 1272,
      top: 719,
      width: 225,
      height: 87,
      defaultLeft: 1272,
      defaultTop: 719,
      defaultWidth: 225,
      defaultHeight: 87,
      route: '/marvel/where-to'
    }]
  }, {
    name: 'where-to',
    url: 'assets/images/where-to.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 426,
      top: 430,
      width: 1069,
      height: 421,
      defaultLeft: 426,
      defaultTop: 430,
      defaultWidth: 1069,
      defaultHeight: 421,
      route: '/marvel/where-to-writed'
    }, {
      left: 428,
      top: 878,
      width: 220,
      height: 80,
      defaultLeft: 428,
      defaultTop: 878,
      defaultWidth: 220,
      defaultHeight: 80,
      route: '/marvel/writed-whom'
    }, {
      left: 1090,
      top: 872,
      width: 162,
      height: 87,
      defaultLeft: 1090,
      defaultTop: 872,
      defaultWidth: 162,
      defaultHeight: 87,
      route: '/marvel/payments-list'
    }]
  }, {
    name: 'where-to-writed',
    url: 'assets/images/where-to-writed.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 1090,
      top: 872,
      width: 162,
      height: 87,
      defaultLeft: 1090,
      defaultTop: 872,
      defaultWidth: 162,
      defaultHeight: 87,
      route: '/marvel/writed-whom'
    }, {
      left: 1090,
      top: 872,
      width: 162,
      height: 87,
      defaultLeft: 1090,
      defaultTop: 872,
      defaultWidth: 162,
      defaultHeight: 87,
      route: '/marvel/payments-list'
    }, {
      left: 1270,
      top: 872,
      width: 228,
      height: 90,
      defaultLeft: 1270,
      defaultTop: 872,
      defaultWidth: 228,
      defaultHeight: 90,
      route: '/marvel/how-much'
    }, {
      left: 428,
      top: 878,
      width: 220,
      height: 80,
      defaultLeft: 428,
      defaultTop: 878,
      defaultWidth: 220,
      defaultHeight: 80,
      route: '/marvel/writed-whom'
    }]
  }, {
    name: 'how-much',
    url: 'assets/images/how-much.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 426,
      top: 430,
      width: 1069,
      height: 421,
      defaultLeft: 426,
      defaultTop: 430,
      defaultWidth: 1069,
      defaultHeight: 421,
      route: '/marvel/where-to-writed'
    }]
  }];


  constructor(private httpClient: HttpClientService) {
  }

  getPage(name: string) {
    console.log('name', name);
    return this.Pages.find(page => page.name === name);
  }
}
