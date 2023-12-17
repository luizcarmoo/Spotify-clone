import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRotas } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations:[

  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRotas),
    AppComponent,
  ],

  providers: [],
})

export class AppModule {}