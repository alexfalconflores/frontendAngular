import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { Articulo } from '@core/models/articulo';

@Injectable({
    providedIn: 'root',
})
export class ArticuloService {
    url: string = environment.urlApi + '/articulo';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Articulo[]> {
    // tslint:disable-next-line: typedef
    getAllArticulos() {
        // return this.http.get<Articulo[]>(`${environment.urlApi}/articulo`);
        return this.http.get<Articulo[]>(this.url);
    }

    // get(id: number): Observable<Articulo> {
    // tslint:disable-next-line: typedef
    getArticulo(id: number) {
        // return this.http.get<Articulo>(`${environment.urlApi}/articulo/${id}`);
        return this.http.get<Articulo>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createArticulo(articulo: Articulo) {
        // return this.http.post(`${environment.urlApi}/articulo`, articulo);
        return this.http.post(this.url, articulo);
    }
    // tslint:disable-next-line: typedef
    updateArticulo(id: number, changes: Partial<Articulo>) {
        // return this.http.put(`${environment.urlApi}/articulo/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(articulo: Articulo): Observable<Articulo> {
        return this.http.put<Articulo>(this.url, articulo);
    }
    // tslint:disable-next-line: typedef
    deleteArticulo(id: number) {
        // return this.http.delete(`${environment.urlApi}/articulo/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}

