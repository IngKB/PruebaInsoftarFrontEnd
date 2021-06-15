import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.entity';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['Nombres', 'Apellidos', 'Cedula', 'Correo', 'Telefono','Editar'];
  userList:User[] = [{apellidos:'21e',cedula:'1',correo:'2',nombres:'12',id:0,telefono:'1233'}];

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value=>{
      console.log(value)

      if(value && value.data){
        this.userList = value.data
      }
    })
  }

  addUser(){
    this.router.navigateByUrl('createUser');
  }

  editUser(id:number){
    this.router.navigateByUrl('editUser/'+id);
  }

}
