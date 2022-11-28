import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadodocenteGuard } from './ingresadodocente.guard';
import { IngresadoestudianteGuard } from './ingresadoestudiante.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', /* Page en donde inicia la app*/
    pathMatch: 'full'
  },

  {
    path: 'perfildocente',
    loadChildren: () => import('./pages/perfildocente/perfildocente.module').then( m => m.PerfildocentePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'perfilestudiante',
    loadChildren: () => import('./pages/perfilestudiante/perfilestudiante.module').then( m => m.PerfilestudiantePageModule),
    canActivate: [NoIngresadoGuard]
  },
  
  {
    path: 'generarqr',
    loadChildren: () => import('./pages/generarqr/generarqr.module').then( m => m.GenerarqrPageModule),
    canActivate: [IngresadodocenteGuard]
  },
  {
    path: 'scanearqr',
    loadChildren: () => import('./pages/scanearqr/scanearqr.module').then( m => m.ScanearqrPageModule),
    canActivate: [IngresadoestudianteGuard]
  },
  {
    path: 'quienessomos',
    loadChildren: () => import('./pages/quienessomos/quienessomos.module').then( m => m.QuienessomosPageModule)
    /* free */
  },
  {
    path: 'asistenciatotal',
    loadChildren: () => import('./pages/asistenciatotal/asistenciatotal.module').then( m => m.AsistenciatotalPageModule),
    canActivate: [IngresadodocenteGuard]
  },
  {
    path: 'asistenciaalumno',
    loadChildren: () => import('./pages/asistenciaalumno/asistenciaalumno.module').then( m => m.AsistenciaalumnoPageModule),
    canActivate: [IngresadoestudianteGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./pages/noticias/noticias.module').then( m => m.NoticiasPageModule)
    /* free */
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registroestudiante',
    loadChildren: () => import('./pages/registroestudiante/registroestudiante.module').then( m => m.RegistroestudiantePageModule),
    canActivate: [NoIngresadoGuard]
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
