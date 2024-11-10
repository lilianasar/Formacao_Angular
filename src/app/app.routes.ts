import { Routes } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { ContadorComponent } from './contador/contador.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgforComponent } from './components/ngfor/ngfor.component';
import { AnimaisComponent } from './pages/animais/animais.component';
import { AnimalDetalhesComponent } from './pages/animal-detalhes/animal-detalhes.component';

export const routes: Routes = [
    {path: 'meu-componente', component: MeuComponenteComponent},
    {path: 'contador', component: ContadorComponent},
    {path: 'ngif', component: NgIfComponent},
    {path: 'ngfor', component: NgforComponent},
    {path: 'animais', title:'Página animais', component: AnimaisComponent},
    {path: 'animal-detalhes/:id', title:'Detalhes do animal', component: AnimalDetalhesComponent},
    {path: '', redirectTo: '/meu-componente', pathMatch: 'full'}, // se chegar e nao encontrar, redireciona
    {path: '**', component: NotFoundComponent} //se nao encontrar, mostra erro
];
