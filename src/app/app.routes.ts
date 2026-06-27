import { Routes } from '@angular/router';
import { home } from './pages/home';
import { Loading } from './components/const/loading';
import { about } from './components/about';
import { contact } from './components/contact';
import { Projects } from './components/projects';

export const routes: Routes = [
    // { path: '', component: Loading }



    { path: '', component: home },
    { path: 'about', component: about },
    { path: 'projects', component: Projects },
    { path: 'contact', component: contact },

];
