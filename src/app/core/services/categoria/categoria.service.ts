import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categoria } from '@core/models/categoria';



@Injectable({
    providedIn: 'root',
})
export class CategoriaService {
    url: string = environment.urlApi + '/categoria';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Categoria[]> {
    // tslint:disable-next-line: typedef
    getAllCategorias() {
        // return this.http.get<Categoria[]>(`${environment.urlApi}/categoria`);
        return this.http.get<Categoria[]>(this.url);
    }

    // get(id: number): Observable<Categoria> {
    // tslint:disable-next-line: typedef
    getCategoria(id: number) {
        // return this.http.get<Categoria>(`${environment.urlApi}/categoria/${id}`);
        return this.http.get<Categoria>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createCategoria(categoria: Categoria) {
        // return this.http.post(`${environment.urlApi}/categoria`, categoria);
        return this.http.post(this.url, categoria);
    }
    updateCategoriar(id: number, changes: Partial<Categoria>) {
        // return this.http.put(`${environment.urlApi}/categoria/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(categoria: Categoria): Observable<Categoria> {
        return this.http.put<Categoria>(this.url, categoria);
    }
    deleteCategoria(id: number) {
        // return this.http.delete(`${environment.urlApi}/categoria/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
