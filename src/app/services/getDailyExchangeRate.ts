import { Injectable, signal, computed } from '@angular/core';
import axios, { AxiosInstance } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDailyApiService {
  private api: AxiosInstance;

  private dailyData = signal<any>(null);

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
    return computed(() => this.dailyData());
  }

  reset() {
    this.dailyData.set(null);
  }

  async fetchDailyExchangeRate(toSymbol: string) {
    try {
      const response = await this.api.get('/dailyExchangeRate', {
        params: { to_symbol: toSymbol },
      });

      this.dailyData.set(response.data);
      return response.data;
    } catch (err: any) {
      console.error('Erro na API dailyExchangeRate:', err);
      throw err;
    }
  }
}
