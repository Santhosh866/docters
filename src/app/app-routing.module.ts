import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AuthGuard } from './auth.guard';
import { NoteReviewComponent } from './note-review/note-review.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
//import { NoteReviewAccordianComponent } from './note-review-accordian/note-review-accordian.component';

const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      {path : 'data', component:DataTableComponent},
      {path : 'note/:id', component:NoteReviewComponent},
      // {path : 'note-review/:id', component:NoteReviewAccordianComponent},
    ],
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
