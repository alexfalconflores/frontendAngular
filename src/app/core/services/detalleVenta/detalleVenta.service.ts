import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetalleVenta } from '@core/models/detalleVenta';

@Injectable({
    providedIn: 'root',
})
export class DetalleVentaService {
    url: string = environment.urlApi + '/detalleVenta';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<DetalleVenta[]> {
    // tslint:disable-next-line: typedef
    getAllDetalleVentas() {
        // return this.http.get<DetalleVenta[]>(`${environment.urlApi}/detalleVenta`);
        return this.http.get<DetalleVenta[]>(this.url);
    }

    // get(id: number): Observable<DetalleVenta> {
    // tslint:disable-next-line: typedef
    getDetalleVenta(id: number) {
        // return this.http.get<DetalleVenta>(`${environment.urlApi}/detalleVenta/${id}`);
        return this.http.get<DetalleVenta>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createDetalleVenta(detalleVenta: DetalleVenta) {
        // return this.http.post(`${environment.urlApi}/detalleVenta`, detalleVenta);
        return this.http.post(this.url, detalleVenta);
    }
    // tslint:disable-next-line: typedef
    updateDetalleVenta(id: number, changes: Partial<DetalleVenta>) {
        // return this.http.put(`${environment.urlApi}/detalleVenta/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(detalleVenta: DetalleVenta): Observable<DetalleVenta> {
        return this.http.put<DetalleVenta>(this.url, detalleVenta);
    }
    // tslint:disable-next-line: typedef
    deleteDetalleVenta(id: number) {
        // return this.http.delete(`${environment.urlApi}/detalleVenta/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
