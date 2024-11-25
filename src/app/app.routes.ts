import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactmeComponent } from './components/contactme/contactme.component';

export const routes: Routes = [
    {
        path:"home",component:HomeComponent
    },
    {
        path:"",redirectTo:"home",pathMatch:"full"
    },
    {
        path:"about",component:AboutComponent
    },
    {
        path:"project",component:ProjectsComponent
    },
    {
        path:"contactme",component:ContactmeComponent
    }
];
