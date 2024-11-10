import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ng-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.scss'
})
export class NgIfComponent {
  num: number = -1

  fun(){
    /* if(this.num >= 0)
      console.log('')
    else ()
      console.log('')
      if()
        console.log('')
      else()
        console.log('') */
  }
}
