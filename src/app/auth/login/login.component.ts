import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    hide = true;
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required]);

    constructor(private formBuilder: FormBuilder, private router: Router) {}

    // tslint:disable-next-line: typedef
    ngOnInit() {
        this.buildForm();
    }

    // tslint:disable-next-line: typedef
    login(event: Event) {
        event.preventDefault();
        // if (this.form.valid) {
        //     const value = this.form.value;
        //     this.authService
        //         .login(value.email, value.password)
        //         .then(() => {
        //             this.router.navigate(['/admin']);
        //         })
        //         .catch(() => {
        //             alert('Error');
        //         });
        // }
    }

    // tslint:disable-next-line: typedef
    getErrorMessage() {
        if (this.email.hasError('required')) {
            return 'Ingresa tu correo';
        }
        return this.email.hasError('email') ? 'email no valido' : '';
    }
    // tslint:disable-next-line: typedef
    getErrorPassword() {
        if (this.password.hasError('required')) {
            return 'Ingresa tu contraseña';
        }
        return 'Ingresa tu contraseña';
    }


    // tslint:disable-next-line: typedef
    private buildForm() {
        this.form = this.formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
        });
    }
}
