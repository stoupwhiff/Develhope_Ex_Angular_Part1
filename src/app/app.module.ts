import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { CardComponent } from './shared/card/card.component';
import { ListViewComponent } from './shared/list-view/list-view.component';
import { NewUserComponent } from './shared/new-user/new-user.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './shared/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    CardComponent,
    ListViewComponent,
    NewUserComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
