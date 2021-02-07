import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venta } from '@core/models/venta';

@Injectable({
    providedIn: 'root',
})
export class VentaService {
    url: string = environment.urlApi + '/venta';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Venta[]> {
    // tslint:disable-next-line: typedef
    getAllVentas() {
        // return this.http.get<Venta[]>(`${environment.urlApi}/venta`);
        return this.http.get<Venta[]>(this.url);
    }

    // get(id: number): Observable<Venta> {
    // tslint:disable-next-line: typedef
    getVenta(id: number) {
        // return this.http.get<Venta>(`${environment.urlApi}/venta/${id}`);
        return this.http.get<Venta>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createVenta(venta: Venta) {
        // return this.http.post(`${environment.urlApi}/venta`, venta);
        return this.http.post(this.url, venta);
    }
    // tslint:disable-next-line: typedef
    updateVenta(id: number, changes: Partial<Venta>) {
        // return this.http.put(`${environment.urlApi}/venta/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(venta: Venta): Observable<Venta> {
        return this.http.put<Venta>(this.url, venta);
    }
    // tslint:disable-next-line: typedef
    deleteVenta(id: number) {
        // return this.http.delete(`${environment.urlApi}/venta/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
