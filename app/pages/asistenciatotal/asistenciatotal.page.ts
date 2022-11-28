import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-asistenciatotal',
  templateUrl: './asistenciatotal.page.html',
  styleUrls: ['./asistenciatotal.page.scss'],
})
export class AsistenciatotalPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
  
}
