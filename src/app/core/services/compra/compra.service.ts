import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Compra } from '@core/models/compra';


@Injectable({
    providedIn: 'root',
})
export class CompraService {
    url: string = environment.urlApi + '/compra';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Compra[]> {
    // tslint:disable-next-line: typedef
    getAllCompras() {
        // return this.http.get<Compra[]>(`${environment.urlApi}/compra`);
        return this.http.get<Compra[]>(this.url);
    }

    // get(id: number): Observable<Compra> {
    // tslint:disable-next-line: typedef
    getCompra(id: number) {
        // return this.http.get<Compra>(`${environment.urlApi}/compra/${id}`);
        return this.http.get<Compra>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createCompra(compra: Compra) {
        // return this.http.post(`${environment.urlApi}/compra`, compra);
        return this.http.post(this.url, compra);
    }
    // tslint:disable-next-line: typedef
    updateCompra(id: number, changes: Partial<Compra>) {
        // return this.http.put(`${environment.urlApi}/compra/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(compra: Compra): Observable<Compra> {
        return this.http.put<Compra>(this.url, compra);
    }
    // tslint:disable-next-line: typedef
    deleteCompra(id: number) {
        // return this.http.delete(`${environment.urlApi}/compra/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
