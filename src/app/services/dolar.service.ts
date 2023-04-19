import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, tap, lastValueFrom, map} from 'rxjs';
import { Dolar } from '../model/Dolar.Interface';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  baseUrl =  "https://dolar-api-argentina.vercel.app/"
  public dolares: Dolar[];

  constructor(private http : HttpClient) { 
    this.dolares = [];
  }

  async getDolaresType(): Promise<Array<string>> {
    const data = await this.http.get<Array<any>>(this.baseUrl + "v1/dolares").toPromise();
    return data?.map(dolar => dolar.nombre) || [];
  }
  
  
  getValorDolarByName(nombre: string, tipo: string): Observable<number> {
    return this.http.get<any>(this.baseUrl + 'v1/dolares/' + nombre).pipe(
      map(data => data[tipo.toLowerCase()])
    );
  }
    
  getDolares(): Observable<Dolar[]> {
    return this.http.get<Dolar[]>(`${this.baseUrl}v1/dolares`).pipe(
      tap(dolares => this.dolares = dolares)
    );
  }

  async getDolarByName(nombre: string): Promise<string> {
    await lastValueFrom(this.getDolares());
    const dolar = this.dolares.find(d => d.nombre.toLowerCase() === nombre.toLowerCase());
    console.log(dolar);
    return dolar ? dolar.casa : '';
  }
}
