import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormControl, Validators,FormBuilder} from '@angular/forms';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';

@Component({
  selector: 'app-perfildocente',
  templateUrl: './perfildocente.page.html',
  styleUrls: ['./perfildocente.page.scss'],
})
export class PerfildocentePage implements OnInit {

  formularioLogin : FormGroup;
  usuarios : Usuario[] = []; 

  constructor(private alertController: AlertController, 
              public navCtrl: NavController,
              private menuController: MenuController,
              private registroService: RegistroserviceService,
              private fb: FormBuilder) { 
                this.formularioLogin = fb.group({ 
                  'correo': new FormControl("", Validators.required), 
                  'password': new FormControl("", Validators.required)
                 })
               }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
                    /* INGRESAR USUARIO */
  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if (datos.length==0)
      {
          return null;
      }

      for (let obj of this.usuarios){
        if (obj.correo == f.correo && obj.password==f.password){
            a=1;
            console.log('ingresado');
            localStorage.setItem('ingresado', 'true');
            this.navCtrl.navigateRoot('generarqr');
        }
      }
    console.log(a);
    if (a==0){
      this.alertMsg();
    }
  });   
 }

  async alertMsg(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }



}