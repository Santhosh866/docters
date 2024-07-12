import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { AuthGuard } from './auth.guard';
import { NoteReviewComponent } from './note-review/note-review.component';
import { SuccessmessageComponent } from './components/successmessage/successmessage.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LayoutComponent } from './layout/layout.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { NoteReviewAccordianComponent } from './note-review-accordian/note-review-accordian.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DataTableComponent,
    NoteReviewComponent,
    SuccessmessageComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LayoutComponent,
    //NoteReviewAccordianComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [AuthGuard, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
