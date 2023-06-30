import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/Jwt-Dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://backendbm.onrender.com/auth/';

  constructor(private HttpClient: HttpClient) { }


  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.HttpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);

  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.HttpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
  }



}
