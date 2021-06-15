import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.entity';
import { AlertService } from 'src/app/shared/_alert';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.scss']
})
export class UserCreationComponent implements OnInit {
  userForm = new FormGroup({
    cedula : new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    nombres : new FormControl('', Validators.required),
    apellidos: new FormControl('',Validators.required),
    telefono: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    correo:new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
  constructor(private userService:UserService,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(user: User ){
    if(this.userForm.valid){
      this.userService.create(user).subscribe(value=>{
        if(value && value.data){
          this.options.keepAfterRouteChange=true;
          this.alertService.success('usuario '+value.data.nombres+' creado con exito');
          this.router.navigateByUrl('userList');
        }else{
        this.alertService.error(value.message,this.options);
        }
      }
      );
    }
  }
}
