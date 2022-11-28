import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicedatosService, Datos } from '../../services/servicesdatos.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-asistenciaalumno',
  templateUrl: './asistenciaalumno.page.html',
  styleUrls: ['./asistenciaalumno.page.scss'],
})
export class AsistenciaalumnoPage implements OnInit {

  datos : Datos[] = [];
  newDato: Datos = <Datos>{};
  @ViewChild('myList')myList :IonList; 

  constructor(private menuController: MenuController, 
              private serviceDatos: ServicedatosService, 
              private plt: Platform, 
              private toastController: ToastController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }


}