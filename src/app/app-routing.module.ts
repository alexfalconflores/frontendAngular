import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'admin',
        component: LayoutComponent,
    },
    {
        path: '**',
        loadChildren: () =>
        import('./page-not-found/page-not-found.module').then((m) => m.PageNotFoundRoutingModule),
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
    })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
