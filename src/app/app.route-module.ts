import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/public/home/home.component';
import { GameComponent } from './layout/public/game/game.component';
import { AuthGuard } from './shared/sevices/security/auth.guard';
import { LoginService } from './shared/sevices/security/login.service';
import { BookComponent } from './layout/public/book/book.component';
import { VideoComponent } from './layout/public/video/video.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: 'book', component: BookComponent},
  { path: 'video', component: VideoComponent},
  { path: 'admin', loadChildren: './layout/admin/admin.module#AdminModule', canActivate: [AuthGuard] },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [LoginService, AuthGuard]
})
export class AppRoutingModule { }

