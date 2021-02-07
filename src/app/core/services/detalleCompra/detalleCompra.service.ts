import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DetalleCompra } from '@core/models/detalleCompra';


@Injectable({
    providedIn: 'root',
})
export class DetalleCompraService {
    url: string = environment.urlApi + '/detalleCompra';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<DetalleCompra[]> {
    // tslint:disable-next-line: typedef
    getAllDetalleCompras() {
        // return this.http.get<DetalleCompra[]>(`${environment.urlApi}/detalleCompra`);
        return this.http.get<DetalleCompra[]>(this.url);
    }

    // get(id: number): Observable<DetalleCompra> {
    // tslint:disable-next-line: typedef
    getDetalleCompra(id: number) {
        // return this.http.get<DetalleCompra>(`${environment.urlApi}/detalleCompra/${id}`);
        return this.http.get<DetalleCompra>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createDetalleCompra(detalleCompra: DetalleCompra) {
        // return this.http.post(`${environment.urlApi}/detalleCompra`, detalleCompra);
        return this.http.post(this.url, detalleCompra);
    }
    // tslint:disable-next-line: typedef
    updateDetalleCompra(id: number, changes: Partial<DetalleCompra>) {
        // return this.http.put(`${environment.urlApi}/detalleCompra/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(detalleCompra: DetalleCompra): Observable<DetalleCompra> {
        return this.http.put<DetalleCompra>(this.url, detalleCompra);
    }
    // tslint:disable-next-line: typedef
    deleteDetalleCompra(id: number) {
        // return this.http.delete(`${environment.urlApi}/detalleCompra/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
