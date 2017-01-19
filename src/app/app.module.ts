import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { MenuComponent } from './menu/menu.component';
import { ItemActionComponent } from './item-action/item-action.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListitemsComponent,
    MenuComponent,
    ItemActionComponent,
    ItemDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'items',
     component: ListitemsComponent
    },
    {path: 'items/:id', component: ItemDetailComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
