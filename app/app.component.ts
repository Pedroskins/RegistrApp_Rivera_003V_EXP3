import { Component } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirecTo: string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


            /* MENU HAMBURGUESA */

  componentes : Componente[] = [
/* HOME */
    {
      icon: 'home-outline',
      name: 'Home',
      redirecTo: '/home'
    },
/* PERFIL DOCENTE */
    {
      icon: 'briefcase-outline',
      name: 'Perfil Docente',
      redirecTo: '/perfildocente'
    },
/* PERFIL ESTUDIANTE */
    {
      icon: 'book-outline',
      name: 'Perfil Estudiante',
      redirecTo: '/perfilestudiante'
    },
/* REGISTRO */
    {
      icon: 'person-add',
      name: 'Registro Docente',
      redirecTo: '/registro'
    },
/* REGISTRO ESTUDIANTE */
{
  icon: 'finger-print-outline',
  name: 'Registro Estudiante',
  redirecTo: '/registroestudiante'
}, 

/* GENERAR CODIGO QR */
    {
      icon: 'qr-code-outline',
      name: 'Generar QR',
      redirecTo: '/generarqr'
    },

/* SCANEAR CODIGO QR */
    {
      icon: 'camera-outline',
      name: 'Scanear QR',
      redirecTo: '/scanearqr'
    },    
/* QUIENES SOMOS */
    {
      icon: 'information-outline',
      name: 'Quienes somos',
      redirecTo: '/quienessomos'
    },     
/* ASISTENCIA ALUMNO */
    {
      icon: 'person-circle-outline',
      name: 'Asistencia alumno',
      redirecTo: '/asistenciaalumno'
    },     

/* ASISTENCIA TOTAL */
    {
      icon: 'people-circle-outline',
      name: 'Asistencia total',
      redirecTo: '/asistenciatotal'
    }, 

/* NOTICIAS */
    {
      icon: 'globe',
      name: 'Noticias del mundo',
      redirecTo: '/noticias'
    }, 
    
  ];



}
