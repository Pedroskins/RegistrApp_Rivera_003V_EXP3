import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-generarqr',
  templateUrl: './generarqr.page.html',
  styleUrls: ['./generarqr.page.scss'],
})
export class GenerarqrPage implements OnInit {

  qrCodeString= 'Bienvenido a RegistrApp'; 
  scannedResult:any;

  constructor(private menuController: MenuController,
    public navCtrl: NavController) { }

  usuario={
    nom:'',
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }
  
  CerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('home')
  }
}
