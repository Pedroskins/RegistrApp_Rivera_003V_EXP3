import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-scanearqr',
  templateUrl: './scanearqr.page.html',
  styleUrls: ['./scanearqr.page.scss'],
})
export class ScanearqrPage implements OnInit {

  constructor(private menuController: MenuController,
                      public navCtrl: NavController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

  CerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('home')
  }
}
