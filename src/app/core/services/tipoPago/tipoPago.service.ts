import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TipoPago } from '@core/models/tipoPago';

@Injectable({
    providedIn: 'root',
})
export class TipoPagoService {
    url: string = environment.urlApi + '/tipoPago';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<TipoPago[]> {
    // tslint:disable-next-line: typedef
    getAllTipoPagos() {
        // return this.http.get<TipoPago[]>(`${environment.urlApi}/tipoPago`);
        return this.http.get<TipoPago[]>(this.url);
    }

    // get(id: number): Observable<TipoPago> {
    // tslint:disable-next-line: typedef
    getTipoPago(id: number) {
        // return this.http.get<TipoPago>(`${environment.urlApi}/tipoPago/${id}`);
        return this.http.get<TipoPago>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createTipoPago(tipoPago: TipoPago) {
        // return this.http.post(`${environment.urlApi}/tipoPago`, tipoPago);
        return this.http.post(this.url, tipoPago);
    }
    // tslint:disable-next-line: typedef
    updateTipoPago(id: number, changes: Partial<TipoPago>) {
        // return this.http.put(`${environment.urlApi}/tipoPago/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(tipoPago: TipoPago): Observable<TipoPago> {
        return this.http.put<TipoPago>(this.url, tipoPago);
    }
    // tslint:disable-next-line: typedef
    deleteTipoPago(id: number) {
        // return this.http.delete(`${environment.urlApi}/tipoPago/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
