import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  amount: any;
  getCur: any;
  postCur: any;
  result: any;
  currencies: string[] = ['USD','INR',
    'AED',
    'AFN',
    'ALL',
    'AMD',
    'ANG',
    'AOA',
    'ARS',
    'AUD',
    'AWG',
    'AZN',
    'BAM',
    'BBD',
    'BDT',
    'BGN',
    'BHD',
    'BIF',
    'BMD',
    'BND',
    'BOB',
    'BRL',
    'BSD',
    'CAD',
    'CDF',
    'CRC',
    'CUP',
    'CVE',
    'CZK',
    'DJF',
    'DKK',
    'DOP',
    'DZD',
    'EGP',
    'ERN',
    'ETB',
    'EUR',
    'FJD',
    'FKP',
    'FOK',
    'GBP',
    'GIP',
    'GMD',
    'GYD',
    'HKD',
    'HRK',
    'HTG',
    'HUF',
    'IDR',
    'JEP',
    'JMD',
    'JOD',
    'JPY',
    'KES',
    'KGS',
    'KHR',
    'LRD ',
    'LSL ',
    'LYD ',
    'MAD ',
    'MDL ',
    'MRU ',
    'MUR ',
    'NIO ',
    'NOK',
    'NPR ',
    'NZD ',
    'OMR ',
    'PAB ',
    'PEN ',
    'PGK',
    'PLN',
    'PYG',
    'QAR',
    'RON',
    'RSD ',
    'RUB ',
    'RWF',
    'SAR',
    'SBD ',
    'SCR',
    'SDG',
    'SEK',
    'SZL',
    'TOP',
    'TRY',
    'TTD',
    'TVD',
    'TWD',
    'TZS',
    'UAH',
    'UGX',
    'UYU',
    'UZS',
    'VES',
    'VND',
    'VUV',
    'WST',
    'XAF',
    'XCD',
    'XDR',
    'XOF',
    'XPF',
    'YER',
    'ZAR',
    'ZMW',
    'ZWL',]; // Add more currencies as needed

  constructor(private http: HttpClient) { }

  convertCurrency() {
    const url = `https://api.exchangerate-api.com/v4/latest/${this.getCur}`;
    this.http.get<any>(url).subscribe(data => {
      const exchangeRate = data.rates[this.postCur];
      this.result = this.amount * exchangeRate;
    });
  }
}








