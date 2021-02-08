import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '@core/models/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AdminService {
    private subject = new BehaviorSubject<Usuario>(null);

    user$: Observable<Usuario> = this.subject.asObservable();
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    constructor(private http: HttpClient) {
        // this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    }
}
