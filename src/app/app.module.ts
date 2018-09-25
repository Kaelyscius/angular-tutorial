import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
// Pour pouvoir utiliser le two-way binding
import { FormsModule } from '@angular/forms';
// Utilisation du service
import { AppareilService } from './services/appareil.service';
@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    // Pour pouvoir utiliser le two-way binding
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
