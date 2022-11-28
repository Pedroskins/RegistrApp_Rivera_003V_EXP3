import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, NavController } from '@ionic/angular';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-registroestudiante',
  templateUrl: './registroestudiante.page.html',
  styleUrls: ['./registroestudiante.page.scss'],
})
export class RegistroestudiantePage implements OnInit {

  formularioRegistro : FormGroup;

  constructor(private menuController: MenuController,
              public navCtrl: NavController,
              private fb: FormBuilder,
              public alertController: AlertController
              ) {
                this.formularioRegistro = this.fb.group({ /* aqui probablemente va this.fb.group */
                  'usuarioestudiante': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required), 
                  'confirmacionPassword': new FormControl("", Validators.required), 
                  'correo': new FormControl("", Validators.required),  
                  'perfilUsuario': new FormControl("", Validators.required)
                 })
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los campos.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuarioestudiante = {
      usuarioestudiante: f.usuarioestudiante,
      password: f.password,
      confirmacionPassword: f.confirmacionPassword,
      correo: f.correo,
      perfilUsuario: f.perfilUsuario
    }

    localStorage.setItem('usuarioestudiante', JSON.stringify(usuarioestudiante));

    localStorage.setItem('ingresadoestudiante','true');
    this.navCtrl.navigateRoot('home'); /* nos lleva al home */

  }

}
