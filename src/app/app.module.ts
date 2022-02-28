import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingContainerComponent } from './components/shopping-container/shopping-container.component';
import { ShoppingEntryComponent } from './components/shopping-entry/shopping-entry.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigationComponent } from './components/navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingContainerComponent,
    ShoppingListComponent,
    ShoppingEntryComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
