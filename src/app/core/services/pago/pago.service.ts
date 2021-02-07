import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pago } from '@core/models/pago';


@Injectable({
    providedIn: 'root',
})
export class PagoService {
    url: string = environment.urlApi + '/pago';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Pago[]> {
    // tslint:disable-next-line: typedef
    getAllPagos() {
        // return this.http.get<Pago[]>(`${environment.urlApi}/pago`);
        return this.http.get<Pago[]>(this.url);
    }

    // get(id: number): Observable<Pago> {
    // tslint:disable-next-line: typedef
    getPago(id: number) {
        // return this.http.get<Pago>(`${environment.urlApi}/pago/${id}`);
        return this.http.get<Pago>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createPago(pago: Pago) {
        // return this.http.post(`${environment.urlApi}/pago`, pago);
        return this.http.post(this.url, pago);
    }
    // tslint:disable-next-line: typedef
    updatePago(id: number, changes: Partial<Pago>) {
        // return this.http.put(`${environment.urlApi}/pago/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(pago: Pago): Observable<Pago> {
        return this.http.put<Pago>(this.url, pago);
    }
    // tslint:disable-next-line: typedef
    deletepago(id: number) {
        // return this.http.delete(`${environment.urlApi}/pago/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
