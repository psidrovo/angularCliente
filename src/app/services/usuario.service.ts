import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  _url = 'http://localhost:8080/usuario'
  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio Usuario')
  }

  getUsuarios() {
    let heades = new HttpHeaders()
      .set('Type-content', 'aplication/json')
    return this.http.get(this._url, {
      headers: heades
    });
  }
}
