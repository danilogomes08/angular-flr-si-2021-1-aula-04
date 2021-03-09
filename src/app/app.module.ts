import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { EvenoroddComponent } from './evenorodd/evenorodd.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'evenorodd', component: EvenoroddComponent},
      {path: 'tabuada', component: TabuadaComponent}
    ])
     ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, EvenoroddComponent, TabuadaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
