import { Injectable, signal, computed } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ExchangeApiService {
  private api: AxiosInstance;

  private exchangeData = signal<any>(null);

  constructor() {
    const API_KEY = 'RVZG0GHEV2KORLNA';

    this.api = axios.create({
      baseURL: 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open',
      timeout: 3000,
      params: {
        apiKey: API_KEY,
        from_symbol: 'BRL',
      },
    });
  }


  get data() {
    return computed(() => this.exchangeData());
  }

  async fetchExchangeRate(toSymbol: string) {
    try {
      const response = await this.api.get('/currentExchangeRate', {
        params: { to_symbol: toSymbol },
      });

      this.exchangeData.set(response.data);
      return response.data;
    } catch (err: any) {
      console.log("🚀 ~ ExchangeApiService ~ err:", err)
      throw err;
    }
  }
}
