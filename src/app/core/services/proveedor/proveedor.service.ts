import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proveedor } from '@core/models/proveedor';


@Injectable({
    providedIn: 'root',
})
export class ProveedorService {
    url: string = environment.urlApi + '/proveedor';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Proveedor[]> {
    // tslint:disable-next-line: typedef
    getAllProveedores() {
        // return this.http.get<Proveedor[]>(`${environment.urlApi}/proveedor`);
        return this.http.get<Proveedor[]>(this.url);
    }

    // get(id: number): Observable<Proveedor> {
    // tslint:disable-next-line: typedef
    getProveedor(id: number) {
        // return this.http.get<Proveedor>(`${environment.urlApi}/proveedor/${id}`);
        return this.http.get<Proveedor>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createProveedor(proveedor: Proveedor) {
        // return this.http.post(`${environment.urlApi}/proveedor`, proveedor);
        return this.http.post(this.url, proveedor);
    }
    // tslint:disable-next-line: typedef
    updateProveedor(id: number, changes: Partial<Proveedor>) {
        // return this.http.put(`${environment.urlApi}/proveedor/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(proveedor: Proveedor): Observable<Proveedor> {
        return this.http.put<Proveedor>(this.url, proveedor);
    }
    // tslint:disable-next-line: typedef
    deleteProveedor(id: number) {
        // return this.http.delete(`${environment.urlApi}/proveedor/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
