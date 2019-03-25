import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material.module';
import { AppRoutingModule } from './app.route-module';
import { EventHandlerService } from './shared/sevices/event-handler.service';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/modules/shared.module';
import { DataService } from './layout/public/services/data.service';
import { TopHeaderComponent } from './layout/public/template/top-header/top-header.component';
import { ContainerComponent } from './layout/public/template/container/container.component';
import { PublicComponent } from './layout/public/public.component';
import { BookComponent } from './layout/public/book/book.component';
import { HomeComponent } from './layout/public/home/home.component';
import { PublicMenuComponent } from './layout/public/public-menu/public-menu.component';
import { GameComponent } from './layout/public/game/game.component';
import { HelpComponent } from './layout/public/help/help.component';
import { UserComponent } from './layout/public/user/user.component';
import { ApplicationComponent } from './layout/public/dialogs/application/application.component';
import { NotificationComponent } from './layout/public/dialogs/notification/notification.component';
import { AuthGuard } from './shared/sevices/security/auth.guard';
import { LoginService } from './shared/sevices/security/login.service';
import { VideoComponent } from './layout/public/video/video.component';
import { SideMenuComponent } from './layout/public/side-menu/side-menu.component';


@NgModule({
  declarations: [
    BookComponent,
    HomeComponent,
    PublicMenuComponent,
    SideMenuComponent,
    GameComponent,
    HelpComponent,
    UserComponent,
    ApplicationComponent,
    NotificationComponent,
    AppComponent,
    PublicComponent,
    TopHeaderComponent,
    ContainerComponent,
    VideoComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EventHandlerService,
    DataService,
    AuthGuard, 
    LoginService
  ],

  bootstrap: [AppComponent],

  entryComponents:[

  ]
})
export class AppModule { }
