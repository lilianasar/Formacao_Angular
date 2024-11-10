import { Component, inject, Input, SimpleChange } from '@angular/core';
import { AnimaisService } from '../../services/animais.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-animais',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-animais.component.html',
  styleUrl: './lista-animais.component.scss'
})
export class ListaAnimaisComponent {
  animais: Array<any> = []
  //animaisService = inject(AnimaisService)

  constructor(private animaisService: AnimaisService){}

  ngOnChanges(changes: SimpleChange){
    //@Input() animais
    /* if(changes['animais']){
      changes['animais'].previousValue;  
      changes['animais'].currentValue;
      changes['animais'].firstChange;    
    } */
  }

  ngOnInit(){
    //this.animais = this.animaisService.getAnimais();
    this.animaisService.getAnimais().subscribe({
      next: (data) => {
        console.log(data);
        this.animais = data;
      },
      error: (error) => {
        console.error('Algo correu mal: ', error)
      }
    })
  }
}
