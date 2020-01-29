import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  apiUrl = 'users/rest-api-test-89055b31-f110-45ed-be02-c49d62b489fa/';
  constructor(private http: HttpClient) {}

  createTransaction(text: string) {
    return this.http.post(this.apiUrl + 'transactions', {
      transaction_data: {
        text
      },
      notification_type: 'Push',
      callback_url: 'http://abs.absnet.local/transaction_callback',
      confirm_code_length: 8,
      ttl: 0,
      extended_check: false,
      autosing_enabled: false
    });
  }

  getTransaction(id): Observable<any> {
    return this.http.get(this.apiUrl + 'transactions/' + id);
  }
}
