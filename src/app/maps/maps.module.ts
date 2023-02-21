import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';



@NgModule({
  declarations: [
    MapScreenComponent
  ],
  imports: [
    CommonModule
  ],
  // Como los modulos estan encapsulados y aislados, 
  // debo de exportarlos para poder ver ciertos componentes.
  // En este caso es MapScreenComponent, el componente que quiero hacer visible
  exports: [
    MapScreenComponent
  ]
})
export class MapsModule { }
