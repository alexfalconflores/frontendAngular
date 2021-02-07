import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente} from '@core/models/cliente';


@Injectable({
    providedIn: 'root',
})
export class ClienteService {
    url: string = environment.urlApi + '/cliente';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Cliente[]> {
    // tslint:disable-next-line: typedef
    getAllClientes() {
        // return this.http.get<Cliente[]>(`${environment.urlApi}/cliente`);
        return this.http.get<Cliente[]>(this.url);
    }

    // get(id: number): Observable<Cliente> {
    // tslint:disable-next-line: typedef
    getCliente(id: number) {
        // return this.http.get<Cliente>(`${environment.urlApi}/cliente/${id}`);
        return this.http.get<Cliente>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createCliente(cliente: Cliente) {
        // return this.http.post(`${environment.urlApi}/cliente`, cliente);
        return this.http.post(this.url, cliente);
    }
    // tslint:disable-next-line: typedef
    updateCliente(id: number, changes: Partial<Cliente>) {
        // return this.http.put(`${environment.urlApi}/cliente/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(cliente: Cliente): Observable<Cliente> {
        return this.http.put<Cliente>(this.url, cliente);
    }
    // tslint:disable-next-line: typedef
    deleteCliente(id: number) {
        // return this.http.delete(`${environment.urlApi}/cliente/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
