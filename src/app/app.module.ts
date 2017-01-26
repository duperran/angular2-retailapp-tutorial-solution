import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListitemsComponent } from './listitems/listitems.component';
import { ItemService } from './service/item.service';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemActionComponent } from './item-action/item-action.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListitemsComponent,
    ItemDetailComponent,
    ItemActionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'items', component: ListitemsComponent},
      {path:'items/:id', component: ItemDetailComponent}
      ])
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
