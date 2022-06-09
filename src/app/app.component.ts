import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  public usuarios:Array<any> = []
  constructor(
    private usuarioService:UsuarioService
  ){
    this.usuarioService.getUsuarios().subscribe((resp:any)=>{
      console.log(resp)
      this.usuarios = resp
    })
  }

}
