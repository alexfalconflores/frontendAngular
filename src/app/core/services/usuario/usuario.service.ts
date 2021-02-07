import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from '@core/models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    url: string = environment.urlApi + '/usuario';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Usuario[]> {
    // tslint:disable-next-line: typedef
    getAllUsuarios() {
        // return this.http.get<Usuario[]>(`${environment.urlApi}/usuario`);
        return this.http.get<Usuario[]>(this.url);
    }

    // get(id: number): Observable<Usuario> {
    // tslint:disable-next-line: typedef
    getUsuario(id: number) {
        // return this.http.get<Usuario>(`${environment.urlApi}/usuario/${id}`);
        return this.http.get<Usuario>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createUsuario(usuario: Usuario) {
        // return this.http.post(`${environment.urlApi}/usuario`, usuario);
        return this.http.post(this.url, usuario);
    }
    // tslint:disable-next-line: typedef
    updateUsuario(id: number, changes: Partial<Usuario>) {
        // return this.http.put(`${environment.urlApi}/usuario/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(usuario: Usuario): Observable<Usuario> {
        return this.http.put<Usuario>(this.url, usuario);
    }
    // tslint:disable-next-line: typedef
    deleteUsuario(id: number) {
        // return this.http.delete(`${environment.urlApi}/usuario/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
