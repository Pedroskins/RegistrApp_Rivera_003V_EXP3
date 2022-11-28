import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-perfilestudiante',
  templateUrl: './perfilestudiante.page.html',
  styleUrls: ['./perfilestudiante.page.scss'],
})
export class PerfilestudiantePage implements OnInit {

  formularioLogin : FormGroup;
  
/* OJO CON EL FORMULARIO */
  constructor(private alertController: AlertController, 
              public navCtrl: NavController,
              private menuController: MenuController,
              private fb: FormBuilder) { 
                this.formularioLogin = fb.group({ /* aqui probablemente va this.fb.group */
                  'correo': new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required)
                 })
                }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async ingresar(){
    var f = this.formularioLogin.value;

    var usuarioestudiante = JSON.parse(localStorage.getItem('usuarioestudiante'));

    if(usuarioestudiante.correo == f.correo && usuarioestudiante.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresadoestudiante','true');
      this.navCtrl.navigateRoot('scanearqr'); /* nos lleva al scanearqr */
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Vuelve a intentarlo nuevamente.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

}
