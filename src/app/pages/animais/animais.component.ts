import { Component } from '@angular/core';
import { ListaAnimaisComponent } from "../../components/lista-animais/lista-animais.component";

@Component({
  selector: 'app-animais',
  standalone: true,
  imports: [ListaAnimaisComponent],
  templateUrl: './animais.component.html',
  styleUrl: './animais.component.scss'
})
export class AnimaisComponent {

}
