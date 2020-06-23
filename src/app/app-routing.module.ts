import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PokemonComponent } from "./pokemon/pokemon.component";
import { PokemonDetailComponent } from "./pokemon/pokemon-detail.component";
import { LoginComponent } from "./login/login.component";
import { ShellComponent } from "./shell/shell.component";
import { HomeComponent } from "./home/home.component";
import { DigimonComponent } from "./digimon/digimon.component";
import { DigimonDetailComponent } from "./digimon/digimon-detail.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    {
        path: "",
        component: ShellComponent,
        children: [
            { path: "home", component: HomeComponent },
            { path: "About", component: AboutComponent},
            { path: "pokemon", component: PokemonComponent },
            { path: "pokemon/:name", component: PokemonDetailComponent },
            { path: "digimon", component : DigimonComponent },
            { path: "digimon/:id", component: DigimonDetailComponent },
            
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
