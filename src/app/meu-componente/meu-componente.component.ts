import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  standalone: true, //sao carregados os imports que se vai utilizar
  imports: [],
  templateUrl: './meu-componente.component.html',
  styleUrl: './meu-componente.component.scss'
})
export class MeuComponenteComponent {
  @Input({alias: 'nome2'}) meuNome = 'Liliana'
  mensagem = 'Mensagem random'
  imagem = 'https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b'
  
  num = 10

  corTexto = '#369'

  onClick(){
    this.corTexto = 'red'
    this.meuNome = 'Rodrigues'
  }
}
