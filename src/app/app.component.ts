import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MeuComponenteComponent } from './meu-componente/meu-componente.component';
import { ContadorComponent } from "./contador/contador.component";
import { NgIfComponent } from "./components/ng-if/ng-if.component";
import { ListaAnimaisComponent } from "./components/lista-animais/lista-animais.component";

@Component({
  selector: 'app-root',
  standalone: true, //funcionar sem depender dos componentes, podendo usar noutros projetos
  imports: [RouterOutlet, MeuComponenteComponent, ContadorComponent, RouterLink, RouterLinkActive, NgIfComponent, ListaAnimaisComponent], //informacao que queremos usar no html
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  str: string = ''
  num: number = 0
  bool: boolean = true
  obj: object = {}
  arr: object = []
  und: undefined
  null: null = null
  
  str2: string | null = null
  num2: number | undefined

  var: 'ola' | 'mundo' = 'ola'

  title: string = 'projeto_1'
  
  nome: string = 'Maria'

  contadorPai: number = 0

  quandoFoiAlterado(valor: number){
    this.contadorPai = valor
  }
}
