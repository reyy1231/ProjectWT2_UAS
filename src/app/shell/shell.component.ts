import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { LoginService } from "../login/login.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ShellComponent",
    templateUrl: "shell.component.html",
})
export class ShellComponent implements OnInit {
    constructor(
        private page: Page,
        private ls: LoginService,
        private router: RouterExtensions
    ) {
        page.actionBarHidden = true;
    }

    

    logout() 
    {
        this.ls.logout();
        this.router.navigate(["/login", { clearHistory: true }]);
    }
    login()
    {
        this.router.navigate(["About"], { clearHistory: true });
    }
    onTap(name:String)
    {
        switch (name) 
        {   
            case "digimon":
                this.router.navigate(["/digimon"]);
                break;
                
            case "pokemon":
                this.router.navigate(["/pokemon"]);
                break;

            case "logout":
                this.router.navigate(["/login"]);
                break;
            
            case "About":
                this.router.navigate(["/about"]);
                break;
        
            case "home":
                this.router.navigate(["/home"]);
                break;
        
            default:
                break;
        }
    }
    ngOnInit() {}
}
