import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatCardModule,MatTabsModule ],
  declarations: [ AppComponent, FrontPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
