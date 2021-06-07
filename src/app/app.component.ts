import * as core from '@angular/core';
import { Component, HostListener } from "@angular/core";

@core.Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'BlogApp';
  
//  @HostListener('window:unload')
//     private onUnload(): void {
//         localStorage.removeItem('jwt');
//     }
}
