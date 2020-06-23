import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";

import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";

import { DigimonComponent } from "./digimon/digimon.component";
import { DigimonDetailComponent } from "./digimon/digimon-detail.component";

import { HomeComponent } from "./home/home.component";

import { AboutComponent } from "./about/about.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import Theme from "@nativescript/theme";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
Theme.setMode(Theme.Dark);

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        NativeScriptUISideDrawerModule,
    ],
    declarations: [
        AppComponent,
        PokemonComponent,
        PokemonDetailComponent,
        LoginComponent,
        ShellComponent,
        HomeComponent,
        DigimonComponent,
        DigimonDetailComponent,
        AboutComponent,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
