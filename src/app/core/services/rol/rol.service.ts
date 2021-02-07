import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rol } from '@core/models/rol';

@Injectable({
    providedIn: 'root',
})
export class RolService {
    url: string = environment.urlApi + '/rol';

    constructor(private http: HttpClient) {}

    // getAll(): Observable<Rol[]> {
    // tslint:disable-next-line: typedef
    getAllRoles() {
        // return this.http.get<Rol[]>(`${environment.urlApi}/rol`);
        return this.http.get<Rol[]>(this.url);
    }

    // get(id: number): Observable<Rol> {
    // tslint:disable-next-line: typedef
    getRol(id: number) {
        // return this.http.get<Rol>(`${environment.urlApi}/rol/${id}`);
        return this.http.get<Rol>(this.url + '/' + id);
    }

    // tslint:disable-next-line: typedef
    createRol(rol: Rol) {
        // return this.http.post(`${environment.urlApi}/rol`, rol);
        return this.http.post(this.url, rol);
    }
    // tslint:disable-next-line: typedef
    updateRol(id: number, changes: Partial<Rol>) {
        // return this.http.put(`${environment.urlApi}/rol/${id}`, changes)
        return this.http.put(this.url + '/' + id, changes);
    }
    update(rol: Rol): Observable<Rol> {
        return this.http.put<Rol>(this.url, rol);
    }
    // tslint:disable-next-line: typedef
    deleteRol(id: number) {
        // return this.http.delete(`${environment.urlApi}/rol/${id}`);
        return this.http.delete(this.url + '/' + id);
    }
}
