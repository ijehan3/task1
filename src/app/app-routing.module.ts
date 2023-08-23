import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path:'', redirectTo:'home',pathMatch:'full'
    },
  
  {
    path:'studentLink', component:StudentComponent
  },

  {
    path:'studentsDetailsLink',component: StudentdetailsComponent
  },
  {
    path:'home', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
