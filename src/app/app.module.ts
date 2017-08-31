import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RouterOutlet, RouterLink} from '@angular/router';
import { NgModule } from '@angular/core';   
import { InputTextModule, ButtonModule, DataTableModule, DialogModule }  from 'primeng/primeng';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
//  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    InputTextModule, 
    DialogModule,
    ButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
