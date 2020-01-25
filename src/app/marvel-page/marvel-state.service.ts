import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelStateService {
  getPayment = () => {
    const url = 'https://api.github.com/users/YaroslavLyzlov';
    return this.http.get(url).pipe(delay(2000));
  }

  Pages = [{
    name: 'companies-select',
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
    }]
  }, {
    name: 'payments-list',
    url: 'assets/images/payments-list.png',
    width: 1920,
    height: 1207,
    anchors: [{
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
      action: this.getPayment
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
    name: 'select-usd',
    url: 'assets/images/select-usd.png',
    width: 1920,
    height: 1207,
    anchors: [{
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
    }]
  }, {
    name: 'payment-information',
    url: 'assets/images/payment-information.png',
    width: 1920,
    height: 1207,
    anchors: [{
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
    name: 'new-payment',
    url: 'assets/images/new-payment.png',
    width: 1920,
    height: 1207,
    anchors: [{
      left: 425,
      top: 620,
      width: 1069,
      height: 94,
      defaultLeft: 425,
      defaultTop: 620,
      defaultWidth: 1069,
      defaultHeight: 94,
      route: '/marvel/select-bank'
    }, {
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
    }]
  }, {
    name: 'select-bank',
    url: 'assets/images/new-payment-select-bank.png',
    width: 1920,
    height: 1207,
    anchors: [{
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



  constructor(private http: HttpClient) {}

  getPage(name: string) {
    return this.Pages.find(page => page.name === name);
  }
}
