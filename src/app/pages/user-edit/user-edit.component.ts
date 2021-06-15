import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user.entity';
import { AlertService } from 'src/app/shared/_alert';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  userForm = new FormGroup({
    cedula : new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    nombres : new FormControl('', Validators.required),
    apellidos: new FormControl('',Validators.required),
    telefono: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
    correo:new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  id:string = '';
  options = {
    autoClose: true,
    keepAfterRouteChange: false
  };
  constructor(private userService:UserService,
    private route: ActivatedRoute,
    private alertService: AlertService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.userService.getOne(this.id).subscribe(value=>this.fillFields(value.data));
  }
  fillFields(user:User){
    this.userForm.controls["cedula"].setValue(user.cedula);
    this.userForm.controls["nombres"].setValue(user.nombres);
    this.userForm.controls["apellidos"].setValue(user.apellidos);
    this.userForm.controls["telefono"].setValue(user.telefono);
    this.userForm.controls["correo"].setValue(user.correo);
  }
  saveUser(user: User ){
    if(this.userForm.valid){
      this.userService.edit(this.id,user).subscribe(value=>{
        if(value && value.data){
          this.options.keepAfterRouteChange=true;
            this.alertService.success('Usuario Modificado',this.options);
            this.router.navigateByUrl('userList');
        }else{
          this.alertService.error(value.message,this.options);
        }
      }
      );
    }else{
      this.alertService.error('Formulario invalido',this.options)
    }
  }
}
