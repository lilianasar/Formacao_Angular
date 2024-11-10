import { Injectable } from '@angular/core';
import { Animal } from '../models/animal';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {
  private animais: Array<Animal> = []

  constructor(private http: HttpClient) { 
    console.log('AnimaisService.constructor()')
  }

  getAnimais(): Observable<any>{
    //return [... this.animais]
    return this.http.get('http://localhost:3000/animais')
  }

  getAnimal(id:string): Observable<any>{
    return this.http.get('http://localhost:3000/animais/' + id)   
  }
}
