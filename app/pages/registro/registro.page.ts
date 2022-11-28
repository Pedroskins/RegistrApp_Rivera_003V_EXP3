import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { RegistroserviceService, Usuario} from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro : FormGroup;
  newUsuario: Usuario = <Usuario>{};
  usuarios: Usuario[] =[]; 

  constructor(private menuController: MenuController,
              public navCtrl: NavController,
              private fb: FormBuilder,
              public alertController: AlertController,
              private toastController: ToastController, 
              public registroService: RegistroserviceService
              ) {
                this.formularioRegistro = this.fb.group({ 
                
                  'usuario': new FormControl("", [
                    Validators.required, 
                    Validators.minLength(4), 
                    Validators.maxLength(12)
                  ]),
                  'password': new FormControl("", [
                    Validators.required,
                    Validators.minLength(4), 
                    Validators.maxLength(15)
                  ]), 
                  'confirmacionPassword': new FormControl("", [
                    Validators.required,
                    Validators.minLength(4), 
                    Validators.maxLength(15)
                  ]), 
                  'correo': new FormControl("", [
                    Validators.required,
                    Validators.minLength(4), 
                    Validators.maxLength(30)
                  ]),  
                  'perfilUsuario': new FormControl("", [
                    Validators.required,
                    Validators.minLength(4), 
                    Validators.maxLength(12)
                  ])
                 })
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    var existe = 0;

    if (this.formularioRegistro.invalid){
      this.alertError();
    }

    else{
     this.newUsuario.usuario = form.usuario;
     this.newUsuario.password = form.password;
     this.newUsuario.confirmacionPassword = form.confirmacionPassword;
     this.newUsuario.correo = form.correo;
     this.newUsuario.perfilUsuario = form.perfilUsuario;
    

    this.registroService.getUsuarios().then(datos=>{ 
    this.usuarios = datos; 

    if (!datos || datos.length==0){
      this.registroService.addDatos(this.newUsuario).then(dato=>{ 
        this.newUsuario=<Usuario>{};
        this.showToast('Usuario Creado satisfactoriamente');
      });
      this.formularioRegistro.reset();
      this.navCtrl.navigateRoot('login');
    }else{
    
    for (let obj of this.usuarios){
      if (this.newUsuario.correo == obj.correo){
        existe = 1;
      }
    }//Fin del for
  
      if (existe == 1){
        this.alertCorreoDuplicado();
        this.formularioRegistro.reset();
      }
      else{
        this.registroService.addDatos(this.newUsuario).then(dato=>{ 
          this.newUsuario=<Usuario>{};
          this.showToast('Usuario Creado satisfactoriamente');
        });
        this.formularioRegistro.reset();
        this.navCtrl.navigateRoot('login');
      }
    }
    })  
  
  }//finelse

  }//findelmetodo


  async showToast(msg){
    const toast = await this.toastController.create({ 
      message : msg,
      duration: 2000
    })
    await toast.present();
  }

  async alertError(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async alertCorreoDuplicado(){
    const alert = await this.alertController.create({ 
      header: '¡Error!',
      message: 'El correo ingresado ya existe',
      buttons: ['Aceptar']
    })
    await alert.present();
  }



  
}
