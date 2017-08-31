import { Component, OnInit } from '@angular/core';
//import { RouterOutlet, RouterLink  } from '@angular/router';
declare var device;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    device:any;
    ngOnInit() {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
           alert(device.platform);
        }
    }
    title = 'app';
}
