import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica');
  }

  //este hace lo mismo que el de arriba 
  // pero transforma la data para obtenerla en el componente en la forma en la que la necesitamos utilizar
  getUsuariosRedesSocialesRXJSData(){
    return this.getUsuariosRedesSociales()
          .pipe(
            delay(1500), 
            map(  data => Object(  { labels: Object.keys(data), data: Object.values(data) }  ) )
        )
  }

}
