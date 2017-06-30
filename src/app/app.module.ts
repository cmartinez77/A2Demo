import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { ServiceDemoService } from './service-demo/service-demo.service';
import { DirectiveDemoDirective } from './directive-demo/attribute-directive-demo.directive';
import { PipeDemoPipe } from './pipe-demo/pipe-demo.pipe';

/* Decorator tells angular how to process this 'class'*/
@NgModule({

  /* export declarables (components, directives, and pipes) that can be used by other modules */
  declarations: [
    AppComponent,
    ComponentDemoComponent,
    DirectiveDemoDirective,
    PipeDemoPipe,

  ],


  /* import functionality needed from other modules */
  imports: [
    BrowserModule,  // Feature module - pre-installed
    HttpModule
  ],


  /* creates global services that the rest of the app can use
   *   -uses dependency injection
   *   */
  providers: [ServiceDemoService],


  /* Determines which components need to be loaded when the application is used*/
  bootstrap: [AppComponent]


})
export class AppModule { }



/* THIS IS THE ROOT MODULE */
