/*
El main.ts es el punto de entrada de nuestra aplicacion
*/


import { makeBindingParser } from '@angular/compiler';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//Si el Navegator no existe ...
if (!navigator.geolocation) {
  alert ('El navegador no soporta la geolocalizacion');
  throw new Error ('El navegador no soporta la geolocalizacion');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
