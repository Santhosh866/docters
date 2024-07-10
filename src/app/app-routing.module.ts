import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DataTableComponent } from './data-table/data-table.component';
import { AuthGuard } from './auth.guard';
import { NoteReviewComponent } from './note-review/note-review.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
  {path : 'login', component:LoginComponent},
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', redirectTo: '/data', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      {path : 'data', component:DataTableComponent},
      {path : 'note/:id', component:NoteReviewComponent},
    ],
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
