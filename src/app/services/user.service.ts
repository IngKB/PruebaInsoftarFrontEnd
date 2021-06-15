import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user.entity';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  create(usuario:User): Observable<CreateUserResponse> {
    return this.http.post<CreateUserResponse>(baseUrl+'/user', usuario);
  }

  getAll(): Observable<GetAllUsersResponse> {
    return this.http.get<GetAllUsersResponse>(baseUrl+'/user');
  }

  getOne(id:string): Observable<CreateUserResponse>{
    return this.http.get<CreateUserResponse>(baseUrl+'/user/'+id);
  }

  edit(id:string, usuario:User): Observable<CreateUserResponse>{
    return this.http.put<CreateUserResponse>(baseUrl+'/user/'+id,usuario)
  }
}

export interface CreateUserResponse{
  message:string,
  data:User
}

export interface GetAllUsersResponse{
  message:string,
  data:User[]
}
