import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ForminputComponent } from './components/forminput/forminput.component';



const routes: Routes = [
  {path: '',component: AppComponent},
  {path: 'home',component: HomeComponent},
  {path: 'grid',component: GridComponent},
  {path: 'frominput',component: ForminputComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
