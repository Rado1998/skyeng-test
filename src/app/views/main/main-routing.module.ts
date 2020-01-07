import { NgModule } from '@angular/core';
import { MainView } from './main.view';
import { Routes, RouterModule } from '@angular/router';

const mainRoutes: Routes = [
    { path: '', component: MainView }
]

@NgModule({
    imports: [RouterModule.forChild(mainRoutes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }