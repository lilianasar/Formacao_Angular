import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.scss'
})
export class NgforComponent {
  arr: Array<number> = [0, 1, 1, 2, 3, 4, 7]

  frutas: Array<string> = ['maçã', 'pera', 'banana', 'morango']
}
