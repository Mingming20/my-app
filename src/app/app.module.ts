import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { ChildComponent } from './child/child.component';
import { SampleTemplateDrivenComponent } from './sample-template-driven/sample-template-driven.component';
import { SampleReactiveComponent } from './sample-reactive/sample-reactive.component';
@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    ChildComponent,
    SampleTemplateDrivenComponent,
    SampleReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
